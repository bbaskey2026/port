import axios from "axios";
import { useRef, useState } from "react";
import { useI18n } from "../i18n/I18nContext";

export default function ProgressBar() {
  const { t } = useI18n();
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState({ key: "upload.chooseFile" });
  const [estimatedTime, setEstimatedTime] = useState(null);
  const abortController = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  function handleFileChange(event) {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
    setProgress(0);
    setStatus(
      file
        ? { key: "upload.ready", variables: { fileName: file.name } }
        : { key: "upload.chooseFile" },
    );
  }

  async function handleUpload() {
    if (!selectedFile) {
      return;
    }

    const controller = new AbortController();
    abortController.current = controller;
    const formData = new FormData();
    formData.append("file", selectedFile);
    setProgress(0);
    setEstimatedTime(null);
    setStatus({ key: "upload.uploading" });
    setIsUploading(true);

    try {
      await axios.post("https://httpbin.org/post", formData, {
        signal: controller.signal,
        onUploadProgress: (event) => {
          if (event.total) {
            setProgress(Math.round((event.loaded / event.total) * 100));
          }

          if (Number.isFinite(event.estimated)) {
            setEstimatedTime(Math.ceil(event.estimated));
          }
        },
      });
      setProgress(100);
      setEstimatedTime(0);
      setStatus({ key: "upload.complete" });
    } catch (error) {
      if (axios.isCancel(error)) {
        console.error("Upload aborted:", {
          name: error.name,
          message: error.message,
        });
        setStatus({ key: "upload.cancelled" });
      } else {
        setStatus({ key: "upload.failed" });
      }
    } finally {
      setIsUploading(false);
    }
  }

  function handleCancel() {
    abortController.current?.abort();
  }

  return (
    <div>
      <h2>{t("upload.heading")}</h2>
      <input type="file" onChange={handleFileChange} />
      <button type="button" onClick={handleUpload} disabled={!selectedFile || isUploading}>
        {t("upload.upload")}
      </button>
      <button type="button" onClick={handleCancel} disabled={!isUploading}>
        {t("upload.cancel")}
      </button>
      <div>
        <progress value={progress} max="100" />
        <span>{progress}%</span>
      </div>
      {isUploading && estimatedTime !== null && (
        <p>{t("upload.timeRemaining", { seconds: estimatedTime })}</p>
      )}
      <p>{t(status.key, status.variables)}</p>
    </div>
  );
}

/*
Old XMLHttpRequest upload implementation:

const request = new XMLHttpRequest();
request.upload.addEventListener("progress", (event) => {
  if (event.lengthComputable) {
    setProgress(Math.round((event.loaded / event.total) * 100));
  }
});
request.open("POST", "https://httpbin.org/post");
request.send(formData);
*/
