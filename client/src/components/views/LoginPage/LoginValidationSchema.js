import * as Yup from "yup";

const RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const signInSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - must contain  min 8 characters ")
    .matches(
      RegExp,
      "Password must contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});
