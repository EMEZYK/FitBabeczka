import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import { FlexWrapper } from "../../../global-styles/Flex.styled";
import { Button } from "../../../ui/Button/Button.styled";

export const EditProfileWrapper = styled(FlexWrapper)`
  background-color: hsl(0 20% 88%);
  min-height: 70vh;
  max-width: 30vw;
  border-radius: 4px;

  @media (max-width: 1280px) {
    max-width: 90%;
  }
`;

export const Title = styled.h2`
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : theme.fontsize.desktop.xxl}px;
  margin: 1rem 0;
`;

export const EditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 80%;
  min-height: 20vh;
  padding: 1rem;
`;

export const LabelName = styled.label`
  text-align: left;
  margin: 1rem 0 0 0;
`;

export const SaveButton = styled(Button)`
  min-width: 8rem;
  margin: 2rem 0 0 0;
  padding: 0.8rem 0;
  align-self: center;
  color: #000;
  background-color: ${({ theme }) => theme.colors.button.secondary};
  border: 1px solid ${({ theme }) => theme.colors.button.border};
  letter-spacing: 0.2px;

  :hover {
    background-color: ${({ theme }) => theme.colors.button.active};
    letter-spacing: 1px;
  }
`;
