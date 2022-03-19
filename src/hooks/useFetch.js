import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (initialUrl) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    if (!url) return;
    setIsLoading(true);
    setData(null);
    setError(null);

    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setIsLoading(false);
        if (data.cod >= 400) {
          console.log(data.message);
          setError(data.message);
          return;
        }
        setData(data);
      } catch (err) {
        if (err.response) {
          setError(err.response.data.message); // 👉️ {... response data here}
          setIsLoading(false)
        }
      }
    };
    fetchData();
  }, [url]);

  return { data, error, isLoading, setUrl };
};

export default useFetch;
