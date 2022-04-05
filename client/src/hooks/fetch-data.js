import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const useFetchData = (params) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    setLoading(true);
    try {
      const result = await axios.request(params); // await axios.get("/recipes");
      setResponse(result.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(params);
  }, []);

  return { response, error, loading };
};

export default useFetchData;
