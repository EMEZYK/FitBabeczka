import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
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
import NavigateContainer from "./components/ui/Navbar/NavContainer";
import AdminPanelPages from "./components/views/Navigation/AdminPanelPages";
import LandingPanelPages from "./components/views/Navigation/GeneralNavbarPages";
import RecipePage from "./components/views/OneRecipePage/OneRecipePage";
import { themes } from "./theme/theme";
import { Logout } from "./components/views/LoginPage/Logout";
import RecipesProvider from "./context/recipes-context";
import CategoryRecipesPage from "./components/views/CategoryRecipesPage/CategoryRecipesPage";
import useFetchData from "./hooks/fetch-data";
import { useState, useContext, useEffect } from "react";
import { RecipesContext } from "./context/recipes-context";
import { ThemeStore } from "./context/ThemeStore";
import ThemeOfPage from "./context/Theme";
import { useCookies } from "react-cookie";

const App = () => {
  const [token] = useCookies(["token"]);
  const [userId, setUserId] = useState();
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const { response, error } = useFetchData({
    url: "/categories",
    method: "GET",
    headers: {
      accept: "*/*",
    },
  });
  const recipes = useContext(RecipesContext);
  const categories = response;

  return (
    <div className="App">
      <RecipesProvider>
        <ThemeProvider theme={themes}>
          <ThemeStore>
            <ThemeOfPage>
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
                        <LoginPage
                          setUserId={setUserId}
                          setisLoggedIn={setisLoggedIn}
                        />
                      }
                    />
                  </Route>

                  <Route
                    path="/"
                    element={
                      <PagesWithAdminNavbar
                        auth={
                          token.token != null && token.token !== "undefined"
                        }
                        isLoggedIn={isLoggedIn}
                      />
                    }
                  >
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
                    <Route path="/user/:id" element={<RecipePage />} />

                    {categories.map((category) => (
                      <Route
                        key={category._id}
                        path={`/user${category.path}`}
                        element={
                          <CategoryRecipesPage
                            pageTitle={category.name}
                            categoryId={category._id}
                            toEdit={true}
                          />
                        }
                      />
                    ))}
                  </Route>
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Router>
            </ThemeOfPage>
          </ThemeStore>
        </ThemeProvider>
      </RecipesProvider>
    </div>
  );
};

const PagesWithAdminNavbar0 = ({ auth, setBackground, isLoggedIn }) => {
  return isLoggedIn || auth ? (
    <>
      <NavigateContainer
        page={<AdminPanelPages />}
        setBackground={setBackground}
      />
      <Outlet />
    </>
  ) : (
    <Navigate to="/user/login" />
  );
};

const PagesWithAdminNavbar = styled(PagesWithAdminNavbar0)`
  opacity: 0.2;
`;

const PagesWithCommonNavbar = ({ setBackground }) => {
  return (
    <>
      <NavigateContainer
        page={<LandingPanelPages />}
        setBackground={setBackground}
      />
      <Outlet />
    </>
  );
};

export default App;
