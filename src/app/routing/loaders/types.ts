import type { AgnosticNonIndexRouteObject } from "@remix-run/router";

export interface RouteLoaders {
  app: AgnosticNonIndexRouteObject["loader"]
}