import React from "react";
import { FieldArray, useFormik, FormikProvider, Field } from "formik";
import axios from "axios";
import {
  Title,
  Form,
  LabelName,
  SaveButton,
  TitleWrapper,
} from "../../../EditUserPage/EditUserProfilePage.styled";
import { TextArea } from "../../../../LoginPage/LoginPage.styled";
import { InputComponent } from "../../../../../ui/Input/Input.styled";
import { DropDownCategory } from "./Dropdown/CategoryDropdown";
import { DifficultyLevelDropdown } from "./Dropdown/DifficultyLevelDropdown";
import { NewRecipeFormSchema } from "./NewRecipeFormSchema";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AddIcon,
  AddIngredientsButton,
  IngredientsList,
  OneIngredient as IngredientWrapper,
  IngredientListWrapper,
  ErrorInfo,
  RecipePhoto,
  RecipeImageWrapper,
} from "../../EditMenuPage/EditMenuPage.styled";

import {
  DeleteButton,
  MobileDeleteButton,
  NewRecipeFormWrapper,
  CloseModalButton,
} from "../../EditDeleteModal/Modal.styled";
import { useMediaQuery } from "react-responsive";

export const NewRecipeForm = ({
  setOpenModal,
  modalRecipeTitle,
  addOperation = true,
  recipeId,
  categories,
  imageName: currentImage,
  onEdit,
  setEditedRecipeId,
  setContext,
  // onSuccess,
  // onFail,
}) => {
  const [recipeData, setRecipeData] = useState(null);
  const [newImage, setNewImage] = useState("");
  const [newRecipe, setNewRecipe] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      ingredients: [],
      preparation: "",
      category: "",
      servingsNumber: "",
      time: "",
      difficultyLevel: "",
      photo: "",
    },
    validationSchema: NewRecipeFormSchema,

    onSubmit: (values) => {
      const formData = new FormData();

      for (let value in values) {
        if (value === "ingredients") {
          formData.append(value, JSON.stringify(values[value]));
          continue;
        }

        formData.append(value, values[value]);
      }

      const getRecipes = () => {
        axios({
          method: "GET",
          url: "/recipes?limit=1000",
        })
          .then((response) => {
            setContext(response.data);
          })
          .catch((err) => {
            console.error(err);
          });
      };

      if (addOperation) {
        axios
          .post("/recipes", formData)
          .then((res) => {
            setOpenModal(false);
            return getRecipes();
          })
          .then((recipesResponse) => {})
          .catch((e) => console.log("Failed to upload recipe", e.message));
      } else {
        axios
          .put(`/recipes/${recipeId}`, formData)
          .then((res) => {
            setEditedRecipeId(recipeId);
            // onSuccess()
            // toast.success("Twój przepis został zaktualizowany");
            setOpenModal(false);

            return getRecipes();
          })
          .then((recipesResponse) => {
            setContext(recipesResponse.data);
          })
          .catch(() => {
            return toast.error(
              "Twój przepis nie został zaktualizowany. Zweryfikuj wprowadzane dane"
            );
          });
      }
    },
  });

  const changeImageSrc = (e) => {
    const srcode = URL.createObjectURL(e.target.files[0]);
    setNewImage(srcode);
    setNewRecipe(false);
  };

  const changeDisplayedImg = () => {
    if (newRecipe === true) {
      return currentImage;
    } else {
      return newImage;
    }
  };

  const autocompleteValues = () => {
    formik.setValues({
      name: recipeData ? recipeData.name : "",
      description: recipeData ? recipeData.description : "",
      ingredients: recipeData ? recipeData.ingredients : [],
      preparation: recipeData ? recipeData.preparation : "",
      category: recipeData ? recipeData.category : "",
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
        setRecipeData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onCloseClick = () => {
    setOpenModal(false);
  };
  useEffect(() => {
    if (!addOperation) {
      fetchOneRecipe();
      autocompleteValues();
    }
  }, [recipeData?._id]);

  const isMobile = useMediaQuery({
    query: "(max-width: 599px)",
  });

  return (
    <>
      <NewRecipeFormWrapper>
        <TitleWrapper>
          <CloseModalButton
            aria-label="Close"
            type="submit"
            onClick={onCloseClick}
          >
            &times;
          </CloseModalButton>
          <Title role="heading">{modalRecipeTitle}</Title>
        </TitleWrapper>
        <FormikProvider value={formik}>
          <Form
            type="submit"
            onSubmit={formik.handleSubmit}
            encType="multipart/form-data"
          >
            <LabelName htmlFor="dish_name">Nazwa dania</LabelName>
            <InputComponent
              type="text"
              id="name"
              aria-label="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              border="0.2px solid #DEA8A8"
            />
            {formik.errors.name ? (
              <ErrorInfo>{formik.errors.name}</ErrorInfo>
            ) : null}
            <LabelName htmlFor="description">Krótki opis</LabelName>
            <TextArea
              type="text"
              id="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              border="0.2px solid #DEA8A8"
            />
            {formik.errors.description ? (
              <ErrorInfo>{formik.errors.description}</ErrorInfo>
            ) : null}
            <LabelName htmlFor="ingredients">Składniki</LabelName>
            <FieldArray name="ingredients">
              {(fieldArrayProps) => {
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { ingredients } = values;

                return (
                  <>
                    <IngredientListWrapper>
                      <IngredientsList>
                        {values.ingredients && values.ingredients.length > 0
                          ? ingredients.map((value, index) => (
                              <>
                                <IngredientWrapper key={index}>
                                  <Field
                                    name={`ingredients[${index}]`}
                                    type="text"
                                    width="100%"
                                    id={index}
                                  >
                                    {({ field }) => (
                                      <InputComponent
                                        {...field}
                                        type="text"
                                        id="ingredients"
                                        aria-label="ingredients"
                                        placeholder="wpisz składnik"
                                        width="80%"
                                        border="0.2px solid #DEA8A8"
                                        required
                                      />
                                    )}
                                  </Field>

                                  {isMobile === true ? (
                                    <MobileDeleteButton
                                      type="button"
                                      onClick={() => remove(index)}
                                    >
                                      <img
                                        src="/icons/deleteRecipe.svg"
                                        alt=""
                                      />
                                    </MobileDeleteButton>
                                  ) : (
                                    <DeleteButton
                                      type="button"
                                      onClick={() => remove(index)}
                                      padding="0.2rem"
                                      hoverColor="none"
                                      borderRadius="3px"
                                      margin="0 0 0 0.8rem"
                                      height="80%"
                                    >
                                      Usuń
                                    </DeleteButton>
                                  )}
                                </IngredientWrapper>
                              </>
                            ))
                          : ""}

                        <AddIngredientsButton
                          type="button"
                          onClick={() => push()}
                        >
                          <AddIcon
                            src="/icons/addRecipe.svg"
                            mediaWidth="20%"
                          />
                          Dodaj
                        </AddIngredientsButton>
                      </IngredientsList>
                    </IngredientListWrapper>
                  </>
                );
              }}
            </FieldArray>
            {formik.errors.ingredients ? (
              <ErrorInfo>{formik.errors.ingredients}</ErrorInfo>
            ) : null}
            <LabelName htmlFor="preparation">Przygotowanie</LabelName>
            <TextArea
              type="text"
              id="preparation"
              value={formik.values.preparation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              border="0.2px solid #DEA8A8"
            />
            {formik.errors.preparation ? (
              <ErrorInfo>{formik.errors.preparation}</ErrorInfo>
            ) : null}
            <LabelName htmlFor="category">Kategoria</LabelName>
            <DropDownCategory
              type="text"
              value={formik.values.category}
              onChange={(value) =>
                formik.setFieldValue("category", value.value)
              }
              onBlur={formik.handleBlur}
              required
              categories={categories}
            />
            {formik.errors.category ? (
              <ErrorInfo>{formik.errors.category}</ErrorInfo>
            ) : null}
            <LabelName htmlFor="servings_number">Ilość porcji</LabelName>
            <InputComponent
              type="number"
              min="1"
              aria-label="servings-number"
              id="servingsNumber"
              value={formik.values.servingsNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              border="0.2px solid #DEA8A8"
            />
            {formik.errors.servingsNumber ? (
              <ErrorInfo>{formik.errors.servingsNumber}</ErrorInfo>
            ) : null}
            <LabelName type="text" htmlFor="preparation_time">
              Czas przygotowania
            </LabelName>
            <InputComponent
              type="text"
              id="time"
              aria-label="time"
              value={formik.values.time}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              border="0.2px solid #DEA8A8"
            />
            {formik.errors.time ? (
              <ErrorInfo>{formik.errors.time}</ErrorInfo>
            ) : null}
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
              <ErrorInfo>{formik.errors.difficultyLevel}</ErrorInfo>
            ) : null}
            <LabelName htmlFor="photo">Zdjęcie</LabelName>
            <InputComponent
              minHeight="0"
              border="0"
              type="file"
              name="photo"
              aria-label="photo"
              accept="image/*"
              title=" "
              id="img"
              onChange={(e) => {
                changeImageSrc(e);
                formik.setFieldValue("photo", e.currentTarget.files[0]);
              }}
            />
            <RecipeImageWrapper>
              <p>Zdjęcie przepisu:</p>
              <RecipePhoto alt="" src={changeDisplayedImg()} />
            </RecipeImageWrapper>
            {formik.errors.photo ? (
              <ErrorInfo>{formik.errors.photo}</ErrorInfo>
            ) : null}
            <SaveButton type="submit" aria-label="save" onClick={onEdit}>
              Zapisz
            </SaveButton>
          </Form>
        </FormikProvider>
      </NewRecipeFormWrapper>
      <ToastContainer />
    </>
  );
};
