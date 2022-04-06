import {
  BrowserRouter as Router,
  // Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/global-styles/Global.styled";
import LandingPage from "./components/views/LandingPage/LandingPage";
import "./App.css";

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
            <Route path="/" element={<LandingPage />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
