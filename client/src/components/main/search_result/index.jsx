import React from "react";
import { makeStyles, Divider, List, Paper } from "@material-ui/core";
import RepoItem from "./repo_item";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem 1rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
    borderRadius: "1.5rem",

    height: "60vh",
    overflowX: "scroll",
  },
  list: {
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
  },
  divider: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const SearchResults = ({ repos, loading }) => {
  const classes = useStyles();
  return (
    <Paper elevation={0} variant="outlined" className={classes.root}>
      <List className={classes.list}>
        {loading ? (
          <div className={classes.loader}>
            <CircularProgress />
          </div>
        ) : (
          repos.map((repo) => (
            <React.Fragment>
              <RepoItem repo={repo} />
              <Divider
                className={classes.divider}
                variant="inset"
                component="li"
              />
            </React.Fragment>
          ))
        )}
      </List>
    </Paper>
  );
};

export default SearchResults;
