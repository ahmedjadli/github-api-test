import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import SignUp from "../../components/sign_up/sign_up_form";
import SignUpHeader from "../../components/sign_up/sign_up_header";
import { useDispatch } from "react-redux";
import { newUserSignUp } from "../../store/user/actions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const SignUpPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (values) => {
    dispatch(newUserSignUp(values));
    history.push("/login");
  };
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <SignUpHeader />
        <SignUp handleSubmit={onSubmit} />
      </div>
    </Container>
  );
};

export default SignUpPage;
