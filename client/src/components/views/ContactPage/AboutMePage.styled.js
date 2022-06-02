import styled from "styled-components";
import { Typography } from "../../ui/Typography/Typography.styled";
import { FlexWrapper } from "../../global-styles/Flex.styled";
import { Image } from "../../ui/RecipeBox/RecipeBox.styled";

export const Page = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 576px) {
    height: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  text-align: left;
  font-size: ${({ theme }) => theme.fontsize.desktop.xxl}px;
  margin-left: 4rem;

  @media (max-width: 576px) {
    width: 100%;
    text-align: center;
    margin-left: 0;
  }
`;

export const Header = styled(Typography)`
  font-size: ${({ theme }) => theme.fontsize.desktop.xxxl}px;
  text-align: left;
  color: #956682;
  font-family: "Kaushan Script", cursiv;

  @media (max-width: 576px) {
    text-align: center;
  }
`;

export const Greeting = styled(Typography)`
  font-size: ${({ theme }) => theme.fontsize.desktop.xxl}px;
  text-align: left;
  padding: 1rem 0;
  margin: 10px 0;

  @media (max-width: 576px) {
    text-align: center;
  }
`;

export const DescriptionAbout = styled(Typography)`
  text-align: left;
  line-height: 1.5;
`;

export const PhotoAbout = styled(Image)`
  width: 25vw;
  height: 90%;

  @media (max-width: 576px) {
    width: 100%;
  }
`;
export const AboutMeWrapper = styled(FlexWrapper)`
  @media (max-width: 576px) {
    padding: 20px 0 0 0;
    margin-top: 20px;
    flex-direction: column;
  }
`;
