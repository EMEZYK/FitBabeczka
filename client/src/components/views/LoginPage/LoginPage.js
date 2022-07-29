import React from "react";
import {
  LoginForm,
  Title,
  LoginButton,
  SignInWrapper,
} from "./LoginPage.styled";
import { Input } from "../../ui/Input/Input.styled";
import { FlexWrapper } from "../../global-styles/Flex.styled";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";
import { signInSchema } from "./LoginValidationSchema";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { BASE_URL } from "../../../context/recipes-context";

const LoginPage = ({ setUserId, setisLoggedIn, token, setTok }) => {
  const [, setToken] = useCookies(["token"]);
  let decodedToken;

  const signInFormHandler = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: (values) => JSON.stringify(values),
  });

  const navigate = useNavigate();

  const navigation = () => {
    navigate("/user/home");
  };

  const handleSignIn = signInFormHandler.handleSubmit;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    handleSignIn();

    await axios(
      {
        method: "POST",
        url: BASE_URL + "/admin/login",
        data: {
          email: signInFormHandler.values.email,
          password: signInFormHandler.values.password,
        },
      },
      { withCredentials: true }
    )
      .then((response) => {
        setToken("token", response.data.token);
        decodedToken = jwt_decode(response.data.token);
        console.log("decodedtoken", decodedToken);

        const userId = decodedToken.userid;
        setUserId(userId);
        setisLoggedIn(true);
        navigation();
      })
      .catch(() => {
        return toast.error(
          "Nieudana próba logowania. Sprawdź wprowadzane dane"
        );
      });
  };

  return (
    <FlexWrapper width="100%">
      <SignInWrapper>
        <Title>Logowanie </Title>
        <LoginForm type="submit" onSubmit={onSubmitHandler}>
          <Input
            type="email"
            id="email"
            placeholder="E-mail"
            value={signInFormHandler.values.email}
            onChange={signInFormHandler.handleChange}
            margin="0 0 0.6rem 0"
            required
          ></Input>
          {signInFormHandler.errors.email ? (
            <div>{signInFormHandler.errors.email}</div>
          ) : null}
          <Input
            type="password"
            id="password"
            placeholder="Hasło"
            value={signInFormHandler.values.password}
            onChange={signInFormHandler.handleChange}
            required
          ></Input>
          {signInFormHandler.errors.password ? (
            <div>{signInFormHandler.errors.password}</div>
          ) : null}
          <LoginButton type="submit">Zaloguj się</LoginButton>
          <ToastContainer />
        </LoginForm>
      </SignInWrapper>
    </FlexWrapper>
  );
};

export default LoginPage;
