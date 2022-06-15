import React from "react";
import { FlexWrapper } from "../../../global-styles/Flex.styled";
import {
  EditProfileWrapper,
  Title,
  EditProfileForm,
  LabelName,
  SaveButton,
} from "./EditUserProfilePage.styled";
import { EditProfileSchema } from "./EditProfileValidationSchema";
import { useFormik } from "formik";
import axios from "axios";
import { BASE_URL } from "../../../../context/recipes-context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../../LoginPage/LoginPage.styled";

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
        <EditProfileWrapper>
          <Title>Zmień hasło</Title>
          <EditProfileForm type="submit" onSubmit={onSubmitHandler}>
            <LabelName htmlFor="email">Email</LabelName>
            <Input
              type="email"
              id="email"
              value={editProfileFormHandler.values.email}
              onChange={editProfileFormHandler.handleChange}
              onBlur={editProfileFormHandler.handleBlur}
              required
            />
            {editProfileFormHandler.errors.email ? (
              <div>{editProfileFormHandler.errors.email}</div>
            ) : null}
            <LabelName htmlFor="password">Hasło</LabelName>
            <Input
              type="password"
              id="password"
              value={editProfileFormHandler.values.password}
              onChange={editProfileFormHandler.handleChange}
              onBlur={editProfileFormHandler.handleBlur}
              required
            />
            {editProfileFormHandler.errors.password ? (
              <div>{editProfileFormHandler.errors.password}</div>
            ) : null}
            <LabelName htmlFor="password">Potwierdź hasło</LabelName>
            <Input
              type="password"
              id="confirmPassword"
              value={editProfileFormHandler.values.confirmPassword}
              onChange={editProfileFormHandler.handleChange}
              onBlur={editProfileFormHandler.handleBlur}
              required
            />
            {editProfileFormHandler.errors.confirmPassword ? (
              <div>{editProfileFormHandler.errors.confirmPassword}</div>
            ) : null}
            <SaveButton type="submit">Zapisz</SaveButton>
            <ToastContainer />
          </EditProfileForm>
        </EditProfileWrapper>
      </FlexWrapper>
    </>
  );
};

export default EditProfilePage;
