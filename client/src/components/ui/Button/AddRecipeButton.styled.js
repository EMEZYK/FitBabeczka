import styled from "styled-components";
import { FlexWrapper } from "../../global-styles/Flex.styled";

export const AddRecipeWrapper = styled(FlexWrapper)`
  align-items: center;
  width: 100%;
  background-color: #fff;
  align-items: center;
  /* flex-direction: row; */
`;

export const AddRecipeButton = styled.button`
  height: 10vh;
  cursor: pointer;
  border: 0;
  background-color: #fff;
  /* background-color: ${({ theme }) => theme.colors.common.backgroundColor}; */
`;
export const AddRecipeIcon = styled.img`
  max-width: 100%;
  max-height: 100%;

  :hover {
    width: 3.5vw;
  }
`;
