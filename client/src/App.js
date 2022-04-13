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
const theme = {
  colors: {
    nav: "#fff",
    body: "#fff",
    container: "#F4F1F4",
    footer: "#000",
  },
  mobile: "768px",
};

const App = () => {
  return (
    <div className="App">
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
              <Route path="/kontakt" element={<AboutMePage />} />
              <Route path="/user/login" element={<LoginPage />} />
            </Route>
            <Route path="/user/przepis" element={<DishFormPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
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
