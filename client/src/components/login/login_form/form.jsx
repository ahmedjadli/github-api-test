import React from "react";
import { Form } from "formik";
import { Grid, makeStyles, InputBase, Paper, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
const LoginForm = ({
  handleChange,
  handleSubmit,
  values,
  errors,
  isValid,
  touched,
}) => {
  const classes = useStyles();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper
            elevation={0}
            className={classes.inputContainer}
            variant="outlined"
          >
            <InputBase
              className={classes.input}
              required
              fullWidth
              id="email"
              placeholder="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              inputProps={{ "aria-label": "Email Address" }}
              helperText={errors.email && touched.email && errors.email}
              onChange={handleChange}
              value={values.email}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={0}
            className={classes.inputContainer}
            variant="outlined"
          >
            <InputBase
              className={classes.input}
              required
              fullWidth
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputProps={{ "aria-label": "Password" }}
              helperText={
                errors.password && touched.password && errors.password
              }
              onChange={handleChange}
              value={values.password}
            />
          </Paper>
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="default"
        disableElevation
        className={classes.submit}
        disabled={!isValid}
      >
        Log In
      </Button>
    </Form>
  );
};

export default LoginForm;
