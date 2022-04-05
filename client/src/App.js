import "./App.css";
import useFetchData from "./hooks/fetch-data";

const App = () => {
  const { response, error, loading } = useFetchData({
    url: "/recipes",
    method: "GET",
    headers: {
      accept: "*/*",
    },
  });
  console.log(response);
  const recipes = response.result;

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {error && error.message}
          {recipes && recipes.length > 0 && (
            <ul>
              {recipes.map((recipe) => (
                <li key={recipe.id}>{recipe.name}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
