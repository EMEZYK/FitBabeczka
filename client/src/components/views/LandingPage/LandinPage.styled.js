import styled from "styled-components";
import { Typography } from "../../ui/Typography/Typography.styled";
import { FlexWrapper } from "../../global-styles/Flex.styled";
import { theme } from "../../../theme/theme";

export const LandingFlexWrapper = styled(FlexWrapper)`
  @media (max-width: 991px) {
    min-height: auto;
  }
`;
export const Header = styled.div`
  display: flex;
  min-height: 55vh;
  width: 100%;
  align-items: center;
  justify-content: right;
  background: url(/photos/landingPhoto.jpg) top;
  background-size: cover;
  background-position: 50% 60%;

  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: flex-end;
    margin: 0 auto;
  }

  .wrapper-about {
    width: 25vw;
    min-height: 55%;
    margin: 0 1rem 0 4.2rem;
    padding: 0.3rem 0.6rem;
    color: #000;
    font-size: clamp(0.5rem, 2vw, 1rem);
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(8px);
    border: 10px solid hsla(0, 0%, 100%, 0.3);

    @media (max-width: 1280px) {
      margin: 0 0 0 1rem;
    }

    @media (max-width: 992px) {
      width: 100%;
      min-height: auto;
    }
  }
`;

export const IntroductionHeading = styled(Typography)`
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : theme.fontsize.desktop.xl}px;
  font-size: clamp(1.1rem, 3vw, 1.6rem);

  font-weight: ${({ fontWeight }) =>
    fontWeight ? fontWeight : theme.weight.regular};
  text-align: left;
  margin: 0 0 1rem 0;

  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const ShortDescription = styled(Typography)`
  text-align: left;
  font-size: 1.1rem;

  @media (min-width: 768px) and (max-width: 992px) {
    padding: 0 2rem;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Heading = styled(Typography)`
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : theme.fontsize.desktop.xxxl}px;
  font-size: clamp(1.8rem, 2.5vw, 2.4rem);
  letter-spacing: 0.1rem;
  font-weight: ${({ fontWeight }) =>
    fontWeight ? fontWeight : theme.weight.regular};
  padding: 0.4rem 1rem;
  margin: 2rem 0;
  font-family: "Kaushan Script", cursiv;

  @media (max-width: 768px) {
    margin: 4rem 0 0 0;
  }
`;
