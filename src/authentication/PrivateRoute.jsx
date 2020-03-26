import * as React from "react";
import { AppStateContext } from "../contexts/AppStateContext";
import LogIn from "./LogIn";

/**
 * Component utilized to handle access to private routes.
 * If a user doesn't have access to a route/url, they will be redirect to an Unauthorized page.
 */
export function PrivateRoute({ component: C, path, location }) {
  const { isAuthenticated } = React.useContext(AppStateContext);

  return isAuthenticated ? <C /> : <LogIn />;
}
