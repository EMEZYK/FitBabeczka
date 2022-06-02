import styled from "styled-components";
import { Typography } from "../../ui/Typography/Typography.styled";

export const Header = styled.div`
  display: flex;
  min-height: 55vh;
  width: 100%;
  /* align-items: flex-end; */
  align-items: center;
  justify-content: right;
  background: url(/photos/landingPhoto.jpg) top;
  background-size: cover;
  background-position: 50% 60%;

  .wrapper-about {
    width: 25vw;
    min-height: 55%;
    margin: 0 1rem 0 4.2rem;
    /* margin: 0 0 0 4.2rem; */
    padding: 0.3rem 0.6rem;
    color: #000;
    font-size: clamp(0.5rem, 2vw, 1rem);
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(8px);
    border: 10px solid hsla(0, 0%, 100%, 0.3);
    /* box-shadow: 0 0 5px 7px rgba(255, 255, 255, 0.6); */

    @media (max-width: 1280px) {
      margin: 0 0 0 1rem;
    }
  }
`;

export const IntroductionHeading = styled(Typography)`
  font-size: ${({ theme }) => theme.fontsize.desktop.xl}px;
  font-weight: ${({ theme }) => theme.weight.bold};
  text-align: left;
  margin: 0 0 1rem 0;
`;

export const ShortDescription = styled(Typography)`
  text-align: left;
`;

export const Heading = styled(Typography)`
  font-size: ${({ theme }) => theme.fontsize.desktop.xxxl}px;
  letter-spacing: 0.1rem;
  font-weight: ${({ theme }) => theme.weight.normal};
  padding: 0.4rem 1rem;
  margin: 2rem 0;
  font-family: "Kaushan Script", cursiv;
`;
