import type { RouteLoaders } from "./types";

export const routeLoaders: RouteLoaders = {
  app: async () => {
    const data = { testData: 'testData' };

    return data;
  }
};
