import useFetchData from "../hooks/fetch-data";
import { createContext } from "react";
import axios from "axios";

// export const BASE_URL = "http://localhost:3000";
export const BASE_URL = process.env.REACT_APP_BACKEND_URL;
axios.defaults.baseURL = BASE_URL;

export const GetRecipes = createContext();

export const RecipesProvider = ({ children }) => {
  const { response } = useFetchData({
    url: "/recipes?limit=1000",
    method: "GET",
    headers: {
      accept: "*/*",
    },
  });

  return <GetRecipes.Provider value={response}>{children}</GetRecipes.Provider>;
};
export default RecipesProvider;
