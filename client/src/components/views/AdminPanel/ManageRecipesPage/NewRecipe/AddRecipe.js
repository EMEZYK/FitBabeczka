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
import { FormikProvider } from "formik";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddRecipe = ({
  setOpenModal,
  modalRecipeTitle,
  addOperation = true, //by default form handlers new recipe, but can be used to edit if set to false
  recipeId,
  // onSuccess,
  // onFail,
  categories,
}) => {
  const [recipeData, setRecipeData] = useState([]);

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
      if (addOperation) {
        axios
          .post("/recipes", formData)
          .then((res) => {
            setOpenModal(false);
          })
          .catch((e) => console.log("Failed to upload recipe", e.message));
      } else {
        axios
          .put(`/recipes/${recipeId}`, formData)
          .then(() => {
            // onSuccess()
            // toast.success("Twój przepis został zaktualizowany");
            setOpenModal(false);
          })
          .catch(() => {
            return toast.error(
              "Twój przepis nie został zaktualizowany. Zweryfikuj wprowadzane dane"
            );
          });
      }
    },
  });

  const getCategoryName = () => {
    if (categories) {
      return categories.find((category) => category._id === recipeData.category)
        ?.name;
    }
  };

  const categoryName = getCategoryName();
  console.log("categoryName", categoryName);

  const autocompleteValues = () => {
    formik.setValues({
      name: recipeData ? recipeData.name : "",
      description: recipeData ? recipeData.description : "",
      ingredients: recipeData ? recipeData.ingredients : "",
      preparation: recipeData ? recipeData.preparation : "",
      category: recipeData ? categoryName : "elo",
      servingsNumber: recipeData ? recipeData.servingsNumber : "",
      time: recipeData ? recipeData.time : "",
      difficultyLevel: recipeData ? recipeData.difficultyLevel : "",
      photo: recipeData ? recipeData.image : "",
    });
  };

  const fetchOneRecipe = async () => {
    await axios({
      url: `/recipes/${recipeId}`,
    })
      .then((response) => {
        console.log("tutej 1 recipe", response);
        setRecipeData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    //----------
    // if (!addOperation) {
    //   fetchOneRecipe().then(() => {
    //     console.log("recipe data", recipeData);
    //     autocompleteValues();
    //   });
    // }

    //----------

    if (!addOperation) {
      fetchOneRecipe();
      autocompleteValues();
    }
  }, [recipeData._id]);

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
          <Title>{modalRecipeTitle}</Title>
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

            <Input
              minHeight="0"
              border="0"
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
      <ToastContainer />
    </>
  );
};
