import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/home/HomePage";
import ErrorPage from "../error/ErrorPage";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import Timelines from "../pages/timeline/Timelines";
import Stats from "../pages/stats/Stats";

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
        Component: Timelines,
      },
      {
        path: "/stats",
        Component: Stats,
      },
      {
        path: "/friendDetails/:id",
        Component: FriendDetails,
        loader: () => fetch("/friendsData.json"),
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
