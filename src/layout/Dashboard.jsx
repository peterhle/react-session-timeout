import React from "react";
import { Router } from "@reach/router";
import Home from "../Home";
import Drawer from "./Drawer";
import Help from "./navigation/Help";
import ContactUs from "./navigation/ContactUs";

function Dashboard() {
  return (
    <>
      <Drawer>
        <Router primary={false}>
          <Help path="help" />
          <ContactUs path="contact-us" />
          <Home path="/" />
        </Router>
      </Drawer>
    </>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
