import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router-dom";
import ApplicationPage from "./pages/application/index.tsx";
import WorkflowPage from "./pages/workflow/index.tsx";
import '@/utils/javascript-node.ts'
const router = createBrowserRouter([
  {
    path: "/",
    Component: () => {
      const navigate = useNavigate();

      return (
        <div>
          <div>
            <div
              onClick={() => {
                navigate("/flow");
              }}
            >
              flow
            </div>
            <div
              onClick={() => {
                navigate("/app");
              }}
            >
              app
            </div>
          </div>
          <div>
            <div>
              <div id="portal-action"></div>
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      );
    },
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
