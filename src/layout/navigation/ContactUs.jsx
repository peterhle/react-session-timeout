import React from "react";
import { Typography, ListItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  paper: {
    width: "33em",
    borderRadius: 0,
    padding: "2em"
  },
  email: {
    marginRight: "1.6em"
  },
  phone: {
    marginRight: "1em"
  }
}));

export default function ContactUs() {
  const classes = useStyles();

  return (
      <Paper className={classes.paper} elevation={0}>
        <ListItem dense>
          <Typography variant="caption" className={classes.email}>
            Contact Email Address:
          </Typography>
          <Typography variant="caption">
            <a href="mailto:contact@sessiontimeout.com" target="_top">
              contact@sessiontimeout.com
            </a>
          </Typography>
        </ListItem>
        <ListItem dense>
          <Typography variant="caption" className={classes.phone}>
            Contact Phone Number:
          </Typography>
          <Typography variant="caption">
            <a href="tel:816-234-7000">911</a>
          </Typography>
        </ListItem>
      </Paper>
  );
}
