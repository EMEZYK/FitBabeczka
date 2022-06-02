import React from "react";
import {
  AboutMeWrapper,
  PhotoAbout,
  TextContainer,
  Header,
  Greeting,
  DescriptionAbout,
  Page,
} from "./AboutMePage.styled";

const AboutMePage = () => {
  return (
    <Page>
      <AboutMeWrapper
        direction="row"
        width="84%"
        padding="0px 40px"
        border="12px solid #956682"
        flex-wrap="wrap"
      >
        <PhotoAbout src={"/photos/adminPhoto.png"} />
        <TextContainer>
          <Header>O mnie</Header>
          <Greeting>Hej! Jestem Ewelina</Greeting>
          <DescriptionAbout>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and
            <br />
            <br />
            Scrambled it to make a type spec dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to
            make a type spec
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and
          </DescriptionAbout>
        </TextContainer>
      </AboutMeWrapper>
    </Page>
  );
};

export default AboutMePage;
