import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/global-styles/Global.styled";
import LandingPage from "./components/views/LandingPage/LandingPage";
import "./App.css";
import AboutMePage from "./components/views/ContactPage/AboutMePage";
import AllRecipesPage from "./components/views/AllRecipesPage/AllRecipes";
import LoginPage from "./components/views/LoginPage/LoginPage";
import NotFoundPage from "./components/views/NotFoundPage/NotFoundPage";
import EditProfilePage from "./components/views/AdminPanel/EditUserPage/EditUserProfilePage";
import EditMenuPage from "./components/views/AdminPanel/ManageRecipesPage/ManageRecipesPage";
import DishFormPage from "./components/views/AdminPanel/DishFormPage";
import NavigateContainer from "./components/ui/Navbar/NavContainer";
import AdminPanelPages from "./components/views/Navigation/AdminPanelPages";
import LandingPanelPages from "./components/views/Navigation/GeneralNavbarPages";
import RecipePage from "./components/views/OneRecipePage/OneRecipePage";
import { theme } from "./theme/theme";
import { Logout } from "./components/views/LoginPage/Logout";
import RecipesProvider from "./context/recipes-context";
import CategoryRecipesPage from "./components/views/CategoryRecipesPage/CategoryRecipesPage";
import useFetchData from "./hooks/fetch-data";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { GetRecipes } from "./context/recipes-context";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState();

  const { response, error } = useFetchData({
    url: "/categories",
    method: "GET",
    headers: {
      accept: "*/*",
    },
  });
  const recipes = useContext(GetRecipes);

  const categories = response;

  return (
    <div className="App">
      <RecipesProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router>
            <Routes>
              <Route path="/" element={<PagesWithCommonNavbar />}>
                <Route
                  path="/"
                  element={
                    <LandingPage
                      categories={categories}
                      categoriesLoadingError={error}
                    />
                  }
                />
                <Route
                  path="/przepisy"
                  element={
                    <AllRecipesPage
                      categories={categories}
                      categoriesLoadingError={error}
                    />
                  }
                />
                <Route path="/:id" element={<RecipePage />} />
                {categories.map((category) => (
                  <Route
                    key={category._id}
                    path={category.path}
                    element={
                      <CategoryRecipesPage
                        pageTitle={category.name}
                        categoryId={category._id}
                      />
                    }
                  />
                ))}
                <Route path="/kontakt" element={<AboutMePage />} />
                <Route
                  path="/user/login"
                  element={
                    <LoginPage setIsAuth={setIsAuth} setUserId={setUserId} />
                  }
                />
              </Route>

              <Route path="/" element={<PagesWithAdminNavbar auth={isAuth} />}>
                <Route
                  path="/user/home"
                  element={<EditProfilePage userId={userId} />}
                />
                <Route
                  path="/user/menu"
                  element={
                    <EditMenuPage
                      setContext={recipes}
                      categories={categories}
                    />
                  }
                />
                <Route path="/user/logout" element={<Logout />} />
                <Route path="/user/przepis" element={<DishFormPage />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </RecipesProvider>
    </div>
  );
};

const PagesWithAdminNavbar = ({ auth }) => {
  return auth ? (
    <>
      <NavigateContainer page={<AdminPanelPages />} />
      <Outlet />
    </>
  ) : (
    <Navigate to="/user/login" />
  );
};

const PagesWithCommonNavbar = () => {
  return (
    <>
      <NavigateContainer page={<LandingPanelPages />} />
      <Outlet />
    </>
  );
};

export default App;
