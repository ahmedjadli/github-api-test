import React from "react";
import { Grid, makeStyles, Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import DividerWithText from "./../../utils/divider_with_text";
import SignUpForm from "./form";
import SignUpSchema from "./schema";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2rem",
  },
  inputContainer: {
    padding: "0.5rem 1rem",
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderRadius: "1.5rem",

    "&:hover": {
      boxShadow: "0 0 5px rgba(33,33,33,.2)",
    },
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  btn: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(4),
    backgroundColor: "#32BC4F",
    color: "white",
    "&:hover": {
      backgroundColor: "#6cc644",
      boxShadow: "0 0 5px rgba(33,33,33,.2)",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(4),
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.grey[50],
    "&:hover": {
      backgroundColor: theme.palette.grey[500],
      boxShadow: "0 0 5px rgba(33,33,33,.2)",
    },
  },
}));
const SignUp = ({ handleSubmit }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Formik
        component={SignUpForm}
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      />
      <DividerWithText>Or</DividerWithText>
      <Button
        fullWidth
        variant="contained"
        disableElevation
        className={classes.btn}
        startIcon={<GitHubIcon fontSize="medium" />}
      >
        Sign Up with Github
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link to="/login">Already have an account? Sign in</Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
