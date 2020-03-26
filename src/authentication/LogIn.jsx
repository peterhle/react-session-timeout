import React, {useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {AppStateContext} from "../contexts/AppStateContext";
import Paper from "@material-ui/core/Paper";
import {ErrorOutline} from "@material-ui/icons";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  timeoutPaper: {
    padding: "3em",
    display: "flex",
    alignItems: "center",
    borderRadius: 0
  },
  message: {
    display: "inline-block",
    marginLeft: "1em"
  },
  icon: {
    display: "inline-block",
    fontSize: "5rem",
    color: red[700]
  },
  placeholderText: {
    color: grey[800]
  },
  title: {
    fontSize: "1.5rem",
    color: grey[800],
    marginTop: "2em"
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const {handleAuthenticateUser, isTimedOut} = useContext(AppStateContext);

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleAuthenticateUser}
          >
            Sign In
          </Button>
        </form>
      </div>
      {isTimedOut && (
        <>
          <Typography className={classes.title}>Session Timed Out</Typography>
          <Paper elevation={0} className={classes.timeoutPaper}>
            <ErrorOutline className={classes.icon} />
            <div className={classes.message}>
              <Typography>
                  <span className={classes.placeholderText}>
                    Your current session has timed out.
                  </span>
                <div className={classes.placeholderText}>
                  Please log in again to continue.
                </div>
              </Typography>
            </div>
          </Paper>
        </>
      )}
    </Container>
  );
}