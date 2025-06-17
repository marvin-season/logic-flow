import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import WorkflowPage from "./pages/workflow/index.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WorkflowPage />
  </React.StrictMode>
);
