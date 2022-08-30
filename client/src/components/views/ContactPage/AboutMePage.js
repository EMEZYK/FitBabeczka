import React from "react";
import {
  AboutMeWrapper,
  PhotoAbout,
  TextContainer,
  Greeting,
  DescriptionAbout,
  Page,
} from "./AboutMePage.styled";

const AboutMePage = () => {
  return (
    <Page>
      <AboutMeWrapper
        direction="row"
        padding="0px 40px"
        border="12px solid #956682"
        flex-wrap="wrap"
      >
        <PhotoAbout src={"/photos/adminPhoto.png"} alt="photo-about" />
        <TextContainer>
          <Greeting data-testid="greeting">Hej! Jestem Ewelina</Greeting>
          <DescriptionAbout>
            Serdecznie witam Cię na mojej kulinarnej stronie i zapraszam do
            wspólnego pieczenia! <br /> <br />
            Jeśli tak jak ja, uwielbiasz przygotowywać różnego rodzaju
            słodkości, a jednocześnie chcesz zadbać o swoje zdrowie, to ten blog
            skierowany jest właśnie do Ciebie. Znajdziesz tu mnóstwo przepisów
            na wypieki (ciasta, babeczki, desery i wiele innych), w których
            najbardziej toksyczne dla organizmu składniki, staram się zastąpić
            zdrowymi zamienikami.
            <br />
            <br />
            Kilka słów o mnie: Pasję do tworzenia słodkich wypieków odnalazłam w
            sobie już w dzieciństwie. Z czasem, coraz większą uwagę zaczęłam
            zwracać na aspekt zdrowotny moich słodkości. Stąd pojawił się pomysł
            na FitBabeczkę. W międzyczasie w moim życiu zrodziła się nowa pasja
            - programowanie. Cieszę się, że właśnie w tym miejscu, mogę połączyć
            oba moje zainteresowania i podzielić się z Tobą efektami mojej
            pracy.
            <br />
            <br />
            Masz pytania? Napisz do mnie na adres: ewelinamezykmail@gmail.com.
            <br />
            <br />
            Piecz, delektuj się słodkościami i żyj zdrowo!
          </DescriptionAbout>
        </TextContainer>
      </AboutMeWrapper>
    </Page>
  );
};

export default AboutMePage;
