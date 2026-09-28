import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");

console.log("rootElement", rootElement);

const root = createRoot(rootElement);

console.log("root", root);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);