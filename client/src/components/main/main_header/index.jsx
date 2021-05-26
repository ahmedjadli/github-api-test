import React from "react";
import { Typography, Avatar, makeStyles } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const MainHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <Typography align="center" component="h1" variant="h6">
        List of Github repositories by sername sorted by watch count
      </Typography>
    </div>
  );
};

export default MainHeader;
