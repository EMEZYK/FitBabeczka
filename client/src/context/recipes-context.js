import { createContext, useEffect, useState, useMemo } from "react";
import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BACKEND_URL;
axios.defaults.baseURL = BASE_URL;

export const RecipesContext = createContext({
  recipes: [],
  setRecipes: () => {},
});

const getRecipes = () => {
  return axios({
    method: "GET",
    url: "/recipes?limit=1000",
    headers: {
      accept: "*/*",
    },
  });
};

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((response) => {
      setRecipes(response.data);
    });
  }, []);

  const value = useMemo(() => ({ recipes, setRecipes }), [recipes]);

  return (
    <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
  );
};
export default RecipesProvider;
