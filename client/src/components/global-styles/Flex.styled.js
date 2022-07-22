import React from "react";
import styled from "styled-components";
import { themes } from "../../theme/theme";

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "wrap")};
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "94vw")};
  align-items: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : themes.colors.common.backgroundColor};
  margin: 0 auto;
  padding: ${({ padding }) => (padding ? padding : "0")};
  justify-content: center;
  border-bottom: ${({ border }) => (border ? border : "0")};

  @media (max-width: 991px) {
    flex-direction: ${({ flexDirection }) =>
      flexDirection ? flexDirection : "row"};
    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "auto")};
    min-height: ${({ minHeight }) => (minHeight ? minHeight : "100%;")};
    opacity: ${(props) => props.theme.opacity};
    filter: ${(props) => props.theme.filter};
    /* min-height: ${({ minHeight }) => (minHeight ? minHeight : "100%;")}; */
  }
`;
// rgba(255,255,255, 0.5)",
export const themeDark = {
  dark: {
    // opacity: "0.2",
    // filter: "contrast(0.5)",
    // filter: "grayscale(0.7)",
    filter: "blur(3px)",
    opacity: "0.4",
  },
  light: {
    background: themes.colors.common.backgroundColor,
  },
};
