import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 100%;
  width: 94%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.container};
  margin: 0 auto;

  /* justify-content: center; */
`;
