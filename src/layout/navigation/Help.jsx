import React from "react";
import { Typography, Paper, makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles(() => ({
  paper: {
    width: "100%",
    borderRadius: 0,
    padding: "2em",
    margin: "1em"
  },
  text: {
    color: grey[500]
  }
}));

export default function Help() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={0}>
        <Typography variant="h6" className={classes.text}>
          User Guide
        </Typography>
        <Typography variant="body2"></Typography>
      </Paper>
      <Paper className={classes.paper} elevation={0}>
        <Typography variant="h6" className={classes.text}>
          Release Notes
        </Typography>
        <Typography variant="body2">version 1.0</Typography>
      </Paper>
    </>
  );
}
