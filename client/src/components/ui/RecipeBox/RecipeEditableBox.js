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
import { Modal } from "../../views/AdminPanel/ManageRecipesPage/Modal";
import { useState } from "react";

const RecipeEditableBox = (props) => {
  const [openModal, setOpenModal] = useState(false);

  // console.log(props);

  const recipeId = props.recipe._id;

  const fetchDeleteRecipe = async () => {
    await axios({
      url: `/recipes/${recipeId}`,
      method: "DELETE",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchEditRecipe = async () => {
    await axios({
      url: `/recipes/${recipeId}`,
      method: "PUT",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const onDeleteButtonClick = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const deleteRecipe = () => {
    fetchDeleteRecipe();
    props.setDeletedRecipeId(recipeId);
    setOpenModal(false);
  };

  return (
    <>
      <RecipeBox>
        <NavLink
          to={`/${props.recipe._id}`}
          style={{ textDecoration: "none", color: "#000" }}
          key={props.recipe._id}
        >
          <Image src={props.recipe.image[0].url} alt=""></Image>
        </NavLink>
        <RecipeNameWrapper>
          <RecipeName>{props.recipe.name}</RecipeName>
        </RecipeNameWrapper>
        <ManageRecipeWrapper>
          <button type="button" onClick={fetchEditRecipe}>
            <img src="/icons/editRecipe.svg" alt="" />
          </button>
          <button type="button" onClick={onDeleteButtonClick}>
            <img src="/icons/deleteRecipe.svg" alt="" />
          </button>
          {openModal && (
            <Modal
              setOpenModal={setOpenModal}
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
