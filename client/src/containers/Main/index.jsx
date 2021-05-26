import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import MainHeader from "../../components/main/main_header";
import SearchInput from "../../components/main/search_input";
import SearchResults from "../../components/main/search_result";
import { fetchReposByUsername } from "./../../store/repos/actions";
import withAuth from "../../components/utils/auth";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const MainPage = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const { repos, loading } = useSelector((state) => state.repos);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchReposByUsername(username));
  };

  return (
    <Container className={classes.root} component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.box}>
        <MainHeader />
        <SearchInput
          handleChange={handleChange}
          username={username}
          handleSubmit={handleSubmit}
        />
        <SearchResults repos={repos} loading={loading} />
      </div>
    </Container>
  );
};

export default withAuth(MainPage);
