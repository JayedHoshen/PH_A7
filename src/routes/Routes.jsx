import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/home/HomePage";
import Timeline from "../pages/timeline/Timeline";
import ErrorPage from "../error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/timeline",
        Component: Timeline,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
