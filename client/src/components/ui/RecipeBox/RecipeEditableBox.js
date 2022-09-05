import React from "react";
import {
  RecipeBox,
  Image,
  RecipeNameWrapper,
  RecipeName,
} from "./RecipeBox.styled";
import { ManageRecipeWrapper } from "./RecipeEditableBox.styled";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Modal } from "../../views/AdminPanel/ManageRecipesPage/EditDeleteModal/Modal";
import { useState, useEffect } from "react";
import { NewRecipeModal } from "../../views/AdminPanel/ManageRecipesPage/NewRecipe/NewRecipeModal";

const RecipeEditableBox = ({
  recipe,
  setEditedRecipeId,
  setDeletedRecipeId,
  categories,
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [openEditModal, setOpenEditModal] = useState(false);

  const recipeId = recipe._id;

  const fetchDeleteRecipe = async () => {
    await axios({
      url: `/recipes/${recipeId}`,
      method: "DELETE",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const fetchEditRecipe = async () => {
    await axios({
      url: `/recipes/${recipeId}`,
      method: "PUT",
    }).catch((err) => console.error(err));
  };

  const updateRecipe = () => {
    fetchEditRecipe();
  };

  const onDeleteButtonClick = () => {
    setOpenDeleteModal(true);
  };

  const onEditButtonClick = () => {
    setOpenEditModal(true);
  };

  const closeModal = () => {
    setOpenDeleteModal(false);
  };

  const deleteRecipe = () => {
    fetchDeleteRecipe();
    setDeletedRecipeId(recipe._id);
    setOpenDeleteModal(false);
  };

  useEffect(() => {
    if (openEditModal || openDeleteModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openEditModal, openDeleteModal]);

  return (
    <>
      <RecipeBox margin="2rem 0">
        <NavLink
          to={`/user/${recipeId}`}
          style={{ textDecoration: "none", color: "#000" }}
          key={recipeId}
        >
          <Image
            src={
              "data:" +
              recipe.image.contentType +
              ";base64, " +
              recipe.image.data
            }
            alt="recipe photo"
          ></Image>
        </NavLink>
        <RecipeNameWrapper>
          <RecipeName>{recipe.name}</RecipeName>
        </RecipeNameWrapper>
        <ManageRecipeWrapper>
          <button type="button" onClick={onEditButtonClick}>
            <img src="/icons/editRecipe.svg" alt="" />
          </button>
          {openEditModal && (
            <NewRecipeModal
              setOpenModal={setOpenEditModal}
              modalRecipeTitle="Edytuj przepis"
              recipeId={recipeId}
              addOperation={false}
              categories={categories}
              imageName={recipe.image}
              onEdit={updateRecipe}
              setEditedRecipeId={setEditedRecipeId}
            />
          )}
          <button type="button" onClick={onDeleteButtonClick}>
            <img src="/icons/deleteRecipe.svg" alt="" />
          </button>
          {openDeleteModal && (
            <Modal
              setOpenModal={setOpenDeleteModal}
              onClose={closeModal}
              onDelete={deleteRecipe}
            />
          )}
        </ManageRecipeWrapper>
      </RecipeBox>
    </>
  );
};

export default RecipeEditableBox;
