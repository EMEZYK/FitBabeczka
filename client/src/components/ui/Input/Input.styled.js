import styled from "styled-components";

export const Input = styled.input`
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "2.4rem")};
  width: ${({ width }) => (width ? width : "100%")};
  text-align: left;
  padding: 0 0 0 0.6rem;
  margin: ${({ margin }) => (margin ? margin : "0")};
  border: ${({ border }) => (border ? border : "0.2px solid #aaa")};
  border-radius: 0.2rem;

  ::placeholder {
    text-transform: uppercase;
  }
`;
