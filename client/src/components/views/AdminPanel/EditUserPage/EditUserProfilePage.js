import React from "react";
import { FlexWrapper } from "../../../global-styles/Flex.styled";
import {
  FormWrapper,
  Title,
  Form,
  LabelName,
  SaveButton,
} from "./EditUserProfilePage.styled";
import { EditProfileSchema } from "./EditProfileValidationSchema";
import { useFormik } from "formik";
import axios from "axios";
import { BASE_URL } from "../../../../context/recipes-context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputComponent } from "../../../ui/Input/Input.styled";

const EditProfilePage = ({ userId }) => {
  const editProfileFormHandler = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: EditProfileSchema,
    onSubmit: (values) => JSON.stringify(values),
  });

  const handleEditProfile = editProfileFormHandler.handleSubmit;

  const resetForm = editProfileFormHandler.resetForm;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    handleEditProfile();

    await axios({
      method: "PUT",
      url: BASE_URL + `/admin/${userId}`,
      data: {
        email: editProfileFormHandler.values.email,
        password: editProfileFormHandler.values.password,
        confirmPassword: editProfileFormHandler.values.confirmPassword,
      },
    })
      .then(() => {
        return toast.success("Twoje hasło zostało zmienione");
      })
      .catch(() => {
        return toast.error(
          "Twoje hasło nie zostało zmienione. Zweryfikuj wprowadzane dane "
        );
      });
    resetForm();
  };

  return (
    <>
      <FlexWrapper>
        <FormWrapper minHeight="70vh">
          <Title>Zmień hasło</Title>
          <Form type="submit" onSubmit={onSubmitHandler}>
            <LabelName htmlFor="email">Email</LabelName>
            <InputComponent
              type="email"
              id="email"
              value={editProfileFormHandler.values.email}
              onChange={editProfileFormHandler.handleChange}
              onBlur={editProfileFormHandler.handleBlur}
              required
              border="0.2px solid #DEA8A8"
            />
            {editProfileFormHandler.errors.email ? (
              <div>{editProfileFormHandler.errors.email}</div>
            ) : null}
            <LabelName htmlFor="password">Hasło</LabelName>
            <InputComponent
              type="password"
              id="password"
              data-testid="password"
              value={editProfileFormHandler.values.password}
              onChange={editProfileFormHandler.handleChange}
              onBlur={editProfileFormHandler.handleBlur}
              required
              border="0.2px solid #DEA8A8"
            />
            {editProfileFormHandler.errors.password ? (
              <div data-testid="error-password">
                {editProfileFormHandler.errors.password}
              </div>
            ) : null}
            <LabelName htmlFor="password">Potwierdź hasło</LabelName>
            <InputComponent
              type="password"
              id="confirmPassword"
              data-testid="confirm-password"
              value={editProfileFormHandler.values.confirmPassword}
              onChange={editProfileFormHandler.handleChange}
              onBlur={editProfileFormHandler.handleBlur}
              required
              border="0.2px solid #DEA8A8"
            />
            {editProfileFormHandler.errors.confirmPassword ? (
              <div data-testid="error-confirm-password">
                {editProfileFormHandler.errors.confirmPassword}
              </div>
            ) : null}
            <SaveButton type="submit">Zapisz</SaveButton>
            <ToastContainer />
          </Form>
        </FormWrapper>
      </FlexWrapper>
    </>
  );
};

export default EditProfilePage;
