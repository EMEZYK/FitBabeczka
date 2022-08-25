import styled from "styled-components";
import { Typography } from "../../ui/Typography/Typography.styled";
import { FlexWrapper } from "../../global-styles/Flex.styled";
import { Image } from "../../ui/RecipeBox/RecipeBox.styled";
import { theme } from "../../../theme/theme";

export const Page = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 599px) {
    height: 100%;
  }
`;

export const AboutMeWrapper = styled(FlexWrapper)`
  @media (max-width: 768px) {
    padding: 1rem 0;
    margin-top: 20px;
    flex-direction: column;
    width: 95vw;
  }
`;
export const PhotoAbout = styled(Image)`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 0 3rem 0 0;
  padding: 1rem;

  @media (max-width: 767px) {
    margin: 0;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  text-align: left;
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : theme.fontsize.desktop.s}px;
  padding: 1rem;

  @media (max-width: 599px) {
    width: 100%;
    padding: 0 2rem;
  }

  @media (min-width: 600px) and (max-width: 1200px) {
    width: 80%;
  }
`;

export const Greeting = styled(Typography)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  text-align: left;
  padding: 0 0 1rem 0;
  margin: 10px 0;

  @media (max-width: 1200px) {
    text-align: center;
  }
`;

export const DescriptionAbout = styled(Typography)`
  text-align: left;
  line-height: 1.5;
  font-size: clamp(0.85rem, 2vw, 0.95rem);
`;
