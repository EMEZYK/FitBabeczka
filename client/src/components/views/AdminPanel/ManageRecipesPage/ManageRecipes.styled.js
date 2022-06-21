import styled from "styled-components";
import { FlexWrapper } from "../../../global-styles/Flex.styled";

export const FlexAddWrapper = styled(FlexWrapper)`
  width: 93vw;
  display: flex;
  align-content: flex-end;
`;

export const AddRecipeWrapper = styled(FlexWrapper)`
  align-items: center;
  width: 15vw;
  margin: 1rem 0 0 0;
`;

export const AddRecipeButton = styled.button`
  height: 10vh;
  cursor: pointer;
  border: 0;
`;
export const AddRecipeIcon = styled.img`
  max-width: 100%;
  max-height: 100%;

  :hover {
    width: 3.5vw;
  }
`;
