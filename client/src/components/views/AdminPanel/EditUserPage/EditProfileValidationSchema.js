import * as Yup from "yup";
import { RegExp } from "../../LoginPage/LoginValidationSchema";

export const EditProfileSchema = Yup.object({
  email: Yup.string()
    .email("Podaj prawidłowy email")
    .required("Wpisz swój email"),
  password: Yup.string()
    .required("Wpisz hasło")
    .min(8, "Hasło jest za krótkie - musi zawierać co najmniej 8 znaków ")
    .matches(
      RegExp,
      "Hasło musi zawierać 8 znaków, wielką literę, małą literę, cyfrę oraz znak specjalny"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Hasła muszą się zgadzać")
    .required("Wpisz ponownie swoje hasło."),
});
