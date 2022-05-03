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
import MenuPage from "./components/views/MenuPage/MenuPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import NotFoundPage from "./components/views/NotFoundPage/NotFoundPage";
import UserHomePage from "./components/views/AdminPanel/UserHomePage";
import EditMenuPage from "./components/views/AdminPanel/ManageMenuPage";
import DishFormPage from "./components/views/AdminPanel/DishFormPage";
import NavigateContainer from "./components/ui/Navbar/NavContainer";
import AdminPanelPages from "./components/views/Navigation/AdminPanelPages";
import LandingPanelPages from "./components/views/Navigation/GeneralNavbarPages";
import CakesPage from "./components/views/CakePage/CakesPage";
import CookiesPage from "./components/views/CookiesPage/CookiesPage";
import TartsPage from "./components/views/TartsPage/TartsPage";
import MuffinsPage from "./components/views/MuffinsPage/MuffinsPage";
import DessertsPage from "./components/views/DessertsPage/DessertsPage";
import RecipePage from "./components/views/RecipePage/RecipePage";
import { theme } from "./theme/theme";
import RecipesProvider from "./context/recipes-context";

const App = () => {
  return (
    <div className="App">
      <RecipesProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router>
            <Routes>
              <Route element={<PagesWithAdminNavbar />}>
                <Route path="/user/home" element={<UserHomePage />} />
                <Route path="/user/menu" element={<EditMenuPage />} />
              </Route>
              <Route path="/" element={<PagesWithCommonNavbar />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/przepisy" element={<MenuPage />} />
                <Route path="/przepisy/:id" element={<RecipePage />} />
                <Route path="/przepisy/ciastka" element={<CookiesPage />} />
                <Route path="/przepisy/ciasta" element={<CakesPage />} />
                <Route path="/przepisy/babeczki" element={<TartsPage />} />
                <Route path="/przepisy/muffinki" element={<MuffinsPage />} />
                <Route path="/przepisy/desery" element={<DessertsPage />} />
                <Route path="/kontakt" element={<AboutMePage />} />
                <Route path="/user/login" element={<LoginPage />} />
              </Route>
              <Route path="/user/przepis" element={<DishFormPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </RecipesProvider>
    </div>
  );
};

const PagesWithAdminNavbar = () => {
  return (
    <>
      <NavigateContainer page={<AdminPanelPages />} />
      <Outlet />
    </>
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
