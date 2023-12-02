import type { RouteLoaders } from "./types";
import { setUser } from "@entities/viewer/api/Viewer.slice";
import { store } from "@app/store";

export const routeLoaders: RouteLoaders = {
  app: async () => {
    const data = { id: 'test', name: 'testName' };
    store.dispatch(setUser(data));
    return null;
  }
};
