import React from "react";
import { FieldArray, useFormik, FormikProvider, Field } from "formik";
import axios from "axios";
import {
  Title,
  Form,
  LabelName,
  SaveButton,
  TitleWrapper,
} from "../../EditUserPage/EditUserProfilePage.styled";
import { TextArea } from "../../../LoginPage/LoginPage.styled";
import { Input } from "../../../../ui/Input/Input.styled";
import { DropDownCategory } from "./Dropdown/CategoryDropdown";
import { DifficultyLevelDropdown } from "./Dropdown/DifficultyLevelDropdown";
import { addRecipeSchema } from "./AddRecipeSchema";
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
} from "../ManageRecipes.styled";
import {
  DeleteButton,
  MobileDeleteButton,
  NewRecipeFormWrapper,
  CloseModalButton,
} from "../Modal.styled";
import { useMediaQuery } from "react-responsive";

export const AddRecipe = ({
  setOpenModal,
  modalRecipeTitle,
  addOperation = true,
  recipeId,
  categories,
  imageName: currentImage,
  newRecipe = true,
  // onSuccess,
  // onFail,
}) => {
  const [recipeData, setRecipeData] = useState([]);
  const [newImage, setNewImage] = useState("");

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
    validationSchema: addRecipeSchema,

    onSubmit: (values) => {
      const formData = new FormData();

      for (let value in values) {
        if (value === "ingredients") {
          formData.append(value, JSON.stringify(values[value]));
          continue;
        }

        formData.append(value, values[value]);
      }

      if (addOperation) {
        axios
          .post("/recipes", formData)
          .then((res) => {
            setOpenModal(false);
            // document.body.style.overflow = "unset";
          })
          .catch((e) => console.log("Failed to upload recipe", e.message));
      } else {
        axios
          .put(`/recipes/${recipeId}`, formData)
          .then(() => {
            // onSuccess()
            // toast.success("Twój przepis został zaktualizowany");
            setOpenModal(false);
            // document.body.style.overflow = "unset";
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
  // console.log("categoryname", categoryName);

  const imageChange = (e) => {
    const srcode = URL.createObjectURL(e.target.files[0]);
    setNewImage(srcode);
  };

  const autocompleteValues = () => {
    console.log("recipeData", recipeData);

    formik.setValues({
      name: recipeData ? recipeData.name : "",
      description: recipeData ? recipeData.description : "",
      ingredients: recipeData ? recipeData.ingredients : [],
      preparation: recipeData ? recipeData.preparation : "",
      category: recipeData ? categoryName : "",
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
    // document.body.style.overflow = "unset";
  };
  useEffect(() => {
    if (!addOperation) {
      fetchOneRecipe();
      autocompleteValues();
    }
  }, [recipeData._id]);

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
                                      <Input
                                        {...field}
                                        type="text"
                                        id="ingredients"
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
              // id="category"
              // value={categoryName}
              value={formik.values.category}
              onChange={(value) => formik.setFieldValue("category", value._id)}
              onBlur={formik.handleBlur}
              required
            />
            {formik.errors.category ? (
              <ErrorInfo>{formik.errors.category}</ErrorInfo>
            ) : null}
            <LabelName htmlFor="servings_number">Ilość porcji</LabelName>
            <Input
              type="number"
              min="1"
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
            <Input
              type="text"
              id="time"
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
            <Input
              minHeight="0"
              border="0"
              type="file"
              name="photo"
              accept="image/*"
              title=" "
              id="img"
              onChange={(e) => {
                imageChange(e);
                formik.setFieldValue("photo", e.currentTarget.files[0]);
              }}
            />
            <RecipeImageWrapper>
              <p>Zdjęcie przepisu:</p>
              <RecipePhoto alt="" src={newRecipe ? newImage : currentImage} />
            </RecipeImageWrapper>
            {formik.errors.photo ? (
              <ErrorInfo>{formik.errors.photo}</ErrorInfo>
            ) : null}
            <SaveButton type="submit">Zapisz</SaveButton>
          </Form>
        </FormikProvider>
      </NewRecipeFormWrapper>
      <ToastContainer />
    </>
  );
};
