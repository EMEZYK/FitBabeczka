import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 10vh;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.footer.primary};
  color: #ffff;

  p {
    color: white;
    font-size: 0.8rem;
    width: 100%;
  }
`;
