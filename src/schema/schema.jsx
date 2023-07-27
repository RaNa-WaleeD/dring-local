import * as yup from "yup";

const loginSchema = {
  initialValues: {
    email: "",
    password: "",
  },
  validationSchema: yup.object({
    password: yup
      .string()
      .min(8)
      .required("Password Should Be 8 Character Long"),
    email: yup.string().required("Enter Your Email"),
  }),
};

const createNewPasswordSchema = {
  initialValues: {
    password: "",
    passwordConfirm: "",
  },
  validationSchema: yup.object({
    password: yup
      .string()
      .min(8)
      .required("Password Should Be 8 Character Long"),
    passwordConfirm: yup
      .string()
      .required("Please retype your password.")
      .oneOf([yup.ref("password")], "Your passwords do not match."),
  }),
};

export { loginSchema,createNewPasswordSchema };
