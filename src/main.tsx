import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ApplicationPage from "./pages/application/index.tsx";
import WorkflowPage from "./pages/workflow/index.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <div></div>
        <div>
          <Outlet />
        </div>
      </div>
    ),
    children: [
      {
        path: "flow",
        element: (
          <Suspense fallback={"loading"}>
            <WorkflowPage />
          </Suspense>
        ),
      },
      {
        path: "app",
        element: (
          <Suspense fallback={"loading"}>
            <ApplicationPage />
          </Suspense>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
