import React from 'react';
import { Router } from "@reach/router";

import { PrivateRoute } from "./authentication/PrivateRoute";
import Dashboard from "./layout/Dashboard";
import { AppStateProvider } from "./contexts/AppStateContext";

function App() {
  return (
    <AppStateProvider>
      <Router>
        <PrivateRoute component={Dashboard} path="/*" />
      </Router>
    </AppStateProvider>
  );
}

export default App;
