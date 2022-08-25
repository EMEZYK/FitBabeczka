import styled from "styled-components";
import { Button } from "../Button/Button.styled";
import { theme } from "../../../theme/theme";

export const InputSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 20vw;
  height: 2.2rem;
  margin: 1rem 0 2rem;
  border: 1.4px solid #754279;
  border-radius: 0.2rem;

  @media (max-width: 1280px) {
    width: 30vw;
  }

  @media (max-width: 876px) {
    width: 40vw;
  }

  @media (max-width: 600px) {
    width: 60vw;
  }
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 80%;
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : theme.fontsize.desktop.m}px;
  border: 0;
  padding: 0 0.2rem;
  background-color: #fff;
`;

export const InputIcon = styled.svg`
  height: 100%;
  width: 100%;

  &:hover {
    filter: brightness(100);
  }
`;

export const LoopButton = styled(Button)`
  height: 100%;
  min-width: 20%;
  padding: 0;
  border-left: 1px solid #754279;
  background-color: ${({ bgc }) =>
    bgc ? bgc : theme.colors.button.searchButton};

  &:hover {
    background-color: ${({ bgcHover }) =>
      bgcHover ? bgcHover : theme.colors.button.secondary};
  }
`;
