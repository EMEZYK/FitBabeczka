import styled from "styled-components";
import { theme } from "../../theme/theme";

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "wrap")};
  height: ${({ height }) => (height ? height : "100%")};
  width: ${({ width }) => (width ? width : "94vw")};
  align-items: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.common.backgroundColor};
  margin: 0 auto;
  padding: ${({ padding }) => (padding ? padding : "0")};
  justify-content: center;
  border-bottom: ${({ border }) => (border ? border : "0")};

  @media (max-width: 991px) {
    flex-direction: ${({ mobileFlexDirection }) =>
      mobileFlexDirection ? mobileFlexDirection : "row"};
    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ mobileHeight }) => (mobileHeight ? mobileHeight : "auto")};
    min-height: ${({ minHeight }) => (minHeight ? minHeight : "100%;")};
    opacity: ${(props) => props.theme.opacity};
    filter: ${(props) => props.theme.filter};
    padding: ${({ mobilePadding }) =>
      mobilePadding ? mobilePadding : "0 0 1rem 0"};
  }
`;
