import React from "react";
import { Paper, InputBase, Divider, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0.5rem 1rem",
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "2rem",
    borderRadius: "1.5rem",

    "&:hover": {
      boxShadow: "0 0 11px rgba(33,33,33,.2)",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchInput = ({ username, handleChange, handleSubmit }) => {
  const classes = useStyles();
  const { error, loading } = useSelector((state) => state.repos);

  return (
    <Paper
      elevation={0}
      component="form"
      className={classes.root}
      variant="outlined"
    >
      <InputBase
        className={classes.input}
        placeholder="Search a github username"
        inputProps={{ "aria-label": "search a github username" }}
        value={username}
        onChange={handleChange}
        errorText={error}
        disabled={loading}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={handleSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
