import { useEffect, useState } from "react";
import { useI18n } from "../i18n/I18nContext";

export default function Timer() {
  const { t } = useI18n();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Running");
      setSeconds((currentSeconds) => currentSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer stopped");
    };
  }, []);

  return (
    <section>
      <h2>{t("timer.heading")}</h2>
      <p>{t("timer.elapsed", { seconds })}</p>
      <p>{t("timer.cleanup")}</p>
    </section>
  );
}