import React from "react";
import {
  NotFoundPageContainer,
  NotFoundPageImage,
} from "./NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <NotFoundPageImage alt="not-found-page" src="/photos/notFoundPage.jpg" />
    </NotFoundPageContainer>
  );
};

export default NotFoundPage;
