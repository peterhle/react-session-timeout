import * as React from "react";
import { navigate } from "@reach/router";
import { useReducer } from "react";

const initialState = {
  isAuthenticated: false,
  isTimedOut: false
};

const initialAppStateContext = {
  ...initialState,
  handleAuthenticateUser: () => {},
  handleLogoutUser: () => {}
};
/**
 * creating application states context to be used throughout the application.
 */
export const AppStateContext = React.createContext(initialAppStateContext);

const SET_INITIAL_DATA = "SET_INITIAL_DATA";
const LOGOUT = "LOGOUT";

const appStateReducer = (state, action) => {
  switch (action.type) {
    case SET_INITIAL_DATA:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
      };
    case LOGOUT:
      return {
        ...initialState,
        isTimedOut: action.isTimedOut
      };
    default:
      throw new Error("Unknown action in AppStateContext appStateReducer");
  }
};

/**
 * App State context provider. To be wrapped around the entire application.
 */
export function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(appStateReducer, {
    ...initialState
  });

  /**
   * handle when a user is successfully logged in.
   */
  async function handleAuthenticateUser() {
    dispatch({
      type: SET_INITIAL_DATA,
      isAuthenticated: true
    });
  }

  /**
   * handle log out.
   */
  function handleLogoutUser(isTimedOut = false) {
    dispatch({ type: LOGOUT, isTimedOut });
    navigate("/");
  }

  return (
    <AppStateContext.Provider
      value={{
        handleAuthenticateUser,
        handleLogoutUser,
        ...state
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}
