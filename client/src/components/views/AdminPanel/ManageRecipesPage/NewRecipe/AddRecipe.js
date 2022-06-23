import React from "react";
import { Field, useFormik } from "formik";
import axios from "axios";
import {
  FormWrapper,
  Title,
  Form,
  LabelName,
  SaveButton,
  TitleWrapper,
} from "../../EditUserPage/EditUserProfilePage.styled";
import { Input } from "../../../LoginPage/LoginPage.styled";
import { CloseModalButton } from "../Modal.styled";
import { DropDownCategory } from "./Dropdown/CategoryDropdown";
import { DifficultyLevelDropdown } from "./Dropdown/DifficultyLevelDropdown";
import { addRecipeSchema } from "./AddRecipeSchema";
import { FormikProvider } from "formik";
import { useState } from "react";
import FileUpload from "./ImageUploader";

export const AddRecipe = ({ setOpenModal }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      ingredients: "",
      preparation: "",
      category: "",
      servingsNumber: "",
      time: "",
      difficultyLevel: "",
      photo: "",
    },
    validationSchema: addRecipeSchema,
    onSubmit: (values) => {
      values.ingredients = JSON.stringify([values.ingredients]);
      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }
      console.log("formData", formData);

      // data: {
      //   name: formik.values.name,
      //   description: formik.values.description,
      //   ingredients: [formik.values.ingredients],
      //   preparation: formik.values.preparation,
      //   category: formik.values.category,
      //   image: formik.values.photo,
      //   servingsNumber: formik.values.servingsNumber,
      //   time: formik.values.time,
      //   difficultyLevel: formik.values.difficultyLevel,
      // },

      axios
        .post("/recipes", formData)
        .then((res) => {
          console.log("Recipe successfuly uploaded!");
          setOpenModal(false);
        })
        .cache((e) => console.log("Failed to upload recipe", e.message));
    },
  });

  const handleNewRecipe = formik.handleSubmit;

  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   handleNewRecipe();

  //   // let data = new FormData();
  //   // data.append("image", formik.values.image);
  //   console.log({
  //     name: formik.values.name,
  //     description: formik.values.description,
  //     ingredients: [formik.values.ingredients],
  //     preparation: formik.values.preparation,
  //     category: formik.values.category,
  //     image: formik.values.image,
  //     servingsNumber: formik.values.servingsNumber,
  //     time: formik.values.time,
  //     difficultyLevel: formik.values.difficultyLevel,
  //   });

  //   await axios({
  //     method: "POST",
  //     url: "/recipes",
  //     data: {
  //       name: formik.values.name,
  //       description: formik.values.description,
  //       ingredients: [formik.values.ingredients],
  //       preparation: formik.values.preparation,
  //       category: formik.values.category,
  //       image: formik.values.photo,
  //       servingsNumber: formik.values.servingsNumber,
  //       time: formik.values.time,
  //       difficultyLevel: formik.values.difficultyLevel,
  //     },
  //   })
  //     .then(() => {
  //       setOpenModal(false);
  //     })
  //     .catch((err) => console.error(err));
  // };

  const onCloseClick = () => {
    setOpenModal(false);
  };

  return (
    <>
      <FormWrapper fontSize="16">
        <TitleWrapper>
          <CloseModalButton
            aria-label="Close"
            type="submit"
            onClick={onCloseClick}
          >
            &times;
          </CloseModalButton>
          <Title>Dodaj przepis</Title>
        </TitleWrapper>
        <FormikProvider value={formik}>
          <Form
            type="submit"
            onSubmit={formik.handleSubmit}
            encType="multipart/form-data"
          >
            <LabelName htmlFor="dish_name">Nazwa dania</LabelName>
            <Input
              type="text"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              border="0.2px solid #DEA8A8"
            />
            {formik.errors.name ? <div>{formik.errors.name}</div> : null}
            <LabelName htmlFor="description">Krótki opis</LabelName>
            <Input
              type="text"
              id="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              border="0.2px solid #DEA8A8"
            />
            {formik.errors.description ? (
              <div>{formik.errors.description}</div>
            ) : null}
            <LabelName htmlFor="ingredients">Składniki</LabelName>
            <Input
              type="text"
              id="ingredients"
              value={formik.values.ingredients}
              onChange={formik.handleChange} //to do - zmienic na array stringów
              onBlur={formik.handleBlur}
              required
              border="0.2px solid #DEA8A8"
            />
            {formik.errors.ingredients ? (
              <div>{formik.errors.ingredients}</div>
            ) : null}
            <LabelName htmlFor="preparation">Przygotowanie</LabelName>
            <Input
              type="text"
              id="preparation"
              value={formik.values.preparation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              border="0.2px solid #DEA8A8"
            />
            {formik.errors.preparation ? (
              <div>{formik.errors.preparation}</div>
            ) : null}
            <LabelName htmlFor="category">Kategoria</LabelName>
            <DropDownCategory
              type="text"
              id="category"
              onChange={(value) => formik.setFieldValue("category", value._id)}
              onBlur={formik.setFieldTouched}
              required
            />
            {formik.errors.category ? (
              <div>{formik.errors.category}</div>
            ) : null}
            <LabelName htmlFor="servings_number">Ilość porcji</LabelName>
            <Input
              type="number"
              id="servingsNumber"
              value={formik.values.servingsNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              border="0.2px solid #DEA8A8"
            />
            {formik.errors.servingsNumber ? (
              <div>{formik.errors.servingsNumber}</div>
            ) : null}
            <LabelName type="text" htmlFor="preparation_time">
              Czas przygotowania
            </LabelName>
            <Input
              type="text"
              id="time"
              value={formik.values.time}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              border="0.2px solid #DEA8A8"
            />
            {formik.errors.time ? <div>{formik.errors.time}</div> : null}
            <LabelName htmlFor="difficultyLevel">Poziom trudności</LabelName>
            <DifficultyLevelDropdown
              id="difficultyLevel"
              value={formik.values.difficultyLevel}
              onChange={(value) =>
                formik.setFieldValue("difficultyLevel", value.value)
              }
              onBlur={formik.handleBlur}
              required
            />
            {formik.errors.difficultyLevel ? (
              <div>{formik.errors.difficultyLevel}</div>
            ) : null}
            <LabelName htmlFor="dish_photo">Zdjęcie</LabelName>
            {/* <Field name="image" type="file" component={FileUpload} required /> */}
            {/* <Input
              name="image"
              accept="image/*"
              type="file"
              // value={undefined}
              // component={FileUpload}
              // onChange={formik.handleChange}
              onChange={(event) => {
                formik.setFieldValue("image", event.target.files[0]);
              }}
            /> */}
            <Input
              type="file"
              name="photo"
              accept="image/*"
              onChange={(e) =>
                formik.setFieldValue("photo", e.currentTarget.files[0])
              }
            />
            {formik.errors.image ? <div>{formik.errors.image}</div> : null}
            <SaveButton type="submit">Zapisz</SaveButton>
          </Form>
        </FormikProvider>
      </FormWrapper>
    </>
  );
};
