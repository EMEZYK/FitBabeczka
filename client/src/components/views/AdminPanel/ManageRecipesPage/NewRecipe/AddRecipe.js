import React from "react";
import { useFormik } from "formik";
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
import { useState } from "react";

export const AddRecipe = ({ setOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

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
      image: "",
    },
    validationSchema: addRecipeSchema,
    onSubmit: (values) => {
      console.log(values);
      return JSON.stringify(values);
    },
  });

  const handleNewRecipe = formik.handleSubmit;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    handleNewRecipe();
    console.log({
      name: formik.values.name,
      description: formik.values.description,
      ingredients: formik.values.ingredients,
      preparation: formik.values.preparation,
      category: formik.values.category,
      image: formik.values.image,
      servingsNumber: formik.values.servingsNumber,
      time: formik.values.time,
      difficultyLevel: formik.values.difficultyLevel,
    });
    await axios({
      method: "POST",
      url: "/recipes",
      data: {
        name: formik.values.name,
        description: formik.values.description,
        ingredients: formik.values.ingredients,
        preparation: formik.values.preparation,
        category: formik.values.category,
        image: formik.values.image,
        servingsNumber: formik.values.servingsNumber,
        time: formik.values.time,
        difficultyLevel: formik.values.difficultyLevel,
      },
    })
      .then((response) => {
        console.log(response);
        setOpenModal(false);
      })
      .catch((err) => console.error(err));
  };

  const onCloseClick = () => {
    setOpenModal(false);
  };

  // const handleCategory = (selectedCategory) => {
  //   selectedCategory.value = formik.values.difficultyLevel;
  //   console.log("op", selectedCategory);
  //   setSelectedCategory(selectedCategory);
  // };

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
        <Form type="submit" onSubmit={onSubmitHandler}>
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
            onChange={formik.handleChange}
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
          {formik.errors.category ? <div>{formik.errors.category}</div> : null}
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
            requiredrequired
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
          <Input
            type="text"
            id="image"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            border="0.2px solid #DEA8A8"
          />
          {formik.errors.image ? <div>{formik.errors.image}</div> : null}
          <SaveButton type="submit">Zapisz</SaveButton>
        </Form>
      </FormWrapper>
    </>
  );
};
