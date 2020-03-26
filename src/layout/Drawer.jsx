import React, { useState, useContext } from "react";
import { Link } from "@reach/router";
import * as PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Drawer as MuiDrawer,
  Typography,
  Container,
  Hidden
} from "@material-ui/core";
import { AppStateContext } from "../contexts/AppStateContext";
import grey from "@material-ui/core/colors/grey";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    backgroundColor: "#202026",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  content: {
    flexGrow: 1,
    minHeight: "100vh",
    overflow: "auto",
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  supports: {
    padding: "5px 20px",
    textDecoration: "none",
    color: grey[500],
    "&:hover": {
      backgroundColor: "#1D1D22"
    }
  },
  logoutButton: {
    textTransform: "none",
    justifyContent: "left"
  },
  drawerRoot: {
    height: "100%"
  },
}));

export default function Drawer({ children }) {
  const classes = useStyles();
  const {handleLogoutUser} = useContext(AppStateContext);
  const [tempDrawerOpen, setTempDrawerOpen] = useState(false);
  const handleDrawerToggle = () =>
    setTempDrawerOpen(tempDrawerOpen => !tempDrawerOpen);

  const drawer = (
    <>
      <Link to="help" className={classes.supports}>
        <Typography variant="body2">Help</Typography>
      </Link>
      <Link to="contact-us" className={classes.supports}>
        <Typography variant="body2">Contact Us</Typography>
      </Link>
      <Button
        className={clsx(classes.supports, classes.logoutButton)}
        disableRipple
        disableFocusRipple
        onClick={() => handleLogoutUser(false)}
      >
        <Typography variant="body2">Logout</Typography>
      </Button>
    </>
  );

  return (
    <div className={classes.root}>
      <Hidden mdDown implementation="css">
        <MuiDrawer
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
            root: classes.drawerRoot
          }}
          open={tempDrawerOpen}
          onClose={handleDrawerToggle}
        >
          {drawer}
        </MuiDrawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <MuiDrawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
            root: classes.drawerRoot
          }}
          open
        >
          {drawer}
        </MuiDrawer>
      </Hidden>
      <main className={classes.content}>
        <Container maxWidth={false} className={classes.container}>
          {children}
        </Container>
      </main>
    </div>
  );
}

Drawer.propTypes = {
  children: PropTypes.element.isRequired
};
