import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "wrap")};
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "94%")};
  align-items: center;
  background-color: ${({ theme }) => theme.colors.common.backgroundColor};
  margin: 0 auto;
  padding: ${({ padding }) => (padding ? padding : "0")};
  justify-content: center;
  border-bottom: ${({ border }) => (border ? border : "0")};
`;
