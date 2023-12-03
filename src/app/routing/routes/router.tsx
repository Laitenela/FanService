import { createBrowserRouter } from "react-router-dom";
import { routeLoaders } from "../loaders";
import { General } from "@pages/general";
import { SecondTest } from "@pages/secondTest/ui/SecondTest";
import { Login } from "@pages/login";
import { Main } from "@pages/main";

export const router = createBrowserRouter([
  {
    path: "",
    element: <General/>,
    loader: routeLoaders.app,
    children: [
      {
        path: "/",
        element: <Main/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/second",
        element: <SecondTest/>,
      }
    ]
  },
]);
