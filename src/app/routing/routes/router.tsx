import { createBrowserRouter } from "react-router-dom";
import { routeLoaders } from "../loaders";
import { General } from "@pages/general";
import { SecondTest } from "@pages/secondTest/ui/SecondTest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <General/>,
    loader: routeLoaders.app
  },
  {
    path: "/second",
    element: <SecondTest/>,
    loader: routeLoaders.app
  }
]);
