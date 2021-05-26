import React from "react";
import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import LoginHeader from "../../components/login/login_header";
import Login from "../../components/login/login_form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../store/user/actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (values) => {
    dispatch(login(values.email, values.password)).then(() => {
      history.push("/");
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <LoginHeader />
        <Login handleSubmit={onSubmit} />
      </div>
    </Container>
  );
};

export default LoginPage;
