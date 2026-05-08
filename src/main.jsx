import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import TimelineProvider from "./context/TimelineProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </TimelineProvider>
  </StrictMode>,
);
