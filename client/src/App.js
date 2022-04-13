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
import AboutMePage from "./components/views/LandingPage/AboutMePage";
import MenuPage from "./components/views/LandingPage/MenuPage";
import LoginPage from "./components/views/LandingPage/LoginPage";
import Navbar from "./components/ui/Navbar/NavContainer";
import NotFoundPage from "./components/views/LandingPage/NotFoundPage";
import UserHomePage from "./components/views/LandingPage/UserHomePage";
import EditMenuPage from "./components/views/LandingPage/ManageMenuPage";
import DishFormPage from "./components/views/LandingPage/DishFormPage";

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
            <Route path="/" element={<PagesWithNavbar />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/przepisy" element={<MenuPage />} />
              <Route path="/kontakt" element={<AboutMePage />} />
              <Route path="/user/login" element={<LoginPage />} />
              <Route path="/user/home" element={<UserHomePage />} />
              <Route path="/user/menu" element={<EditMenuPage />} />
              <Route path="/user/przepis" element={<DishFormPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};

const PagesWithNavbar = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
