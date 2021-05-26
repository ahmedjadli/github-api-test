import React from "react";
import { Avatar, Typography, makeStyles } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary,
  },
}));

const SignUpHeader = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Avatar className={classes.avatar}>
        <GitHubIcon fontSize="medium" />
      </Avatar>
      <Typography align="center" component="h1" variant="h5">
        Sign Up
      </Typography>
    </React.Fragment>
  );
};

export default SignUpHeader;
