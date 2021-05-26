import * as Yup from "yup";

export default Yup.object().shape({
  first_name: Yup.string().required("The first name is required !"),
  last_name: Yup.string().required("The last name is required !"),
  email: Yup.string().email("Invalid email").required("Email is required !"),
  password: Yup.string()
    .min(2, "The password is Too Short!")
    .max(50, "Thep password is Too Long!")
    .required("Password is Required"),
});
