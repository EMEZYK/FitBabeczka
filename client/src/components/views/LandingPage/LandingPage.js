import { FlexWrapper } from "../../global-styles/Flex.styled";
import FooterComponent from "../../ui/Footer/Footer";
import CategoriesWrapperComponent from "../../ui/CategoryWrapper/CategoryWrapper";
import AllDishesComponent from "../../ui/AllDishes/AllDishes";
import useFetchData from "../../../hooks/fetch-data";
import {
  Header,
  IntroductionHeading,
  ShortDescription,
  Heading,
} from "./LandinPage.styled";

const LandingPage = ({ categories, categoriesLoadingError }) => {
  const defaultParams = {
    url: "/recipes?limit=8",
    // url: "/recipes?sort=-dateCreated&limit=8",
    method: "GET",
    headers: {
      accept: "*/*",
    },
  };

  let params = defaultParams;

  const { response, error } = useFetchData({
    url: params.url,
    method: params.method,
  });

  const renderRecipes = () => {
    if (!error) {
      return <AllDishesComponent recipes={response.filteredData} />;
    } else if (error) {
      return <div>cannot load recipes</div>;
    }
  };

  return (
    <>
      <FlexWrapper>
        <Header>
          <div className="wrapper-about">
            <IntroductionHeading>
              Sprawdzone przepisy na zdrowe słodkości
            </IntroductionHeading>
            <ShortDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </ShortDescription>
          </div>
        </Header>
        <CategoriesWrapperComponent
          categories={categories}
          categoriesLoadingError={categoriesLoadingError}
        />
        <Heading>Najnowsze przepisy</Heading>
        {renderRecipes()}
        <FooterComponent />
      </FlexWrapper>
    </>
  );
};

export default LandingPage;
