import FooterComponent from "../../ui/Footer/Footer";
import CategoriesWrapper from "../../ui/CategoriesWrapper/CategoriesWrapper";
import AllDishes from "../../ui/AllDishes/AllDishes";
import useFetchData from "../../../hooks/fetch-data";
import {
  Header,
  IntroductionHeading,
  ShortDescription,
  Heading,
  LandingFlexWrapper,
} from "./LandinPage.styled";

const LandingPage = ({ categories, categoriesLoadingError }) => {
  const defaultParams = {
    url: "/recipes?limit=8",
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
      return (
        <AllDishes
          recipes={response.filteredData}
          data-testid="latest-recipes"
        />
      );
    } else if (error) {
      return <div>cannot load recipes</div>;
    }
  };

  return (
    <>
      <LandingFlexWrapper>
        <Header>
          <div className="wrapper-about">
            <IntroductionHeading>
              Sprawdzone przepisy na zdrowe słodkości
            </IntroductionHeading>
            <ShortDescription>
              które zachwycą Cię smakiem i aromatem. Nie rezygnuj przyjemności.
              Wypróbuj moje słodkie wypieki i poczuj radość z pieczenia!
            </ShortDescription>
          </div>
        </Header>
        <CategoriesWrapper
          categories={categories}
          categoriesLoadingError={categoriesLoadingError}
        />
        <Heading>Najnowsze przepisy</Heading>
        {renderRecipes()}
        <FooterComponent />
      </LandingFlexWrapper>
    </>
  );
};

export default LandingPage;
