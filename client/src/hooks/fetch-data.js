import { useState, useEffect, useCallback } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const useFetchData = ({ url, method, headers = null, body = null }) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.request({
        method: method,
        url: url,
        data: body,
      }); // await axios.get("/recipes");
      setResponse(result.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, method, body]);

  useEffect(() => {
    const callData = async () => {
      await fetchData(url, method, body);
    };
    console.log("x");
    callData();
  }, [url, method, body, fetchData]);
  return { response, error, loading };
};

export default useFetchData;
