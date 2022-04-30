import useFetchData from "../hooks/fetch-data";
import { createContext } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const GetRecipes = createContext();
export const RecipesProvider = ({ children }) => {
  const { response } = useFetchData({
    url: "/recipes",
    method: "GET",
    headers: {
      accept: "*/*",
    },
  });

  return <GetRecipes.Provider value={response}>{children}</GetRecipes.Provider>;
};
export default RecipesProvider;
