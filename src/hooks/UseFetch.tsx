import { useEffect, useState } from "react";
import axios from "axios";
const token = import.meta.env.VITE_API_TOKEN_KEY;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

interface MovieProps {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  overview: string;
}

const useFetch = (url: string) => {
  const [apiList, setApiList] = useState<MovieProps>([]);
  const [loading, setLoading] = useState(true);
  const options = {
    method: "GET",
    url: baseUrl + url,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axios.request(options);
      setApiList(response.data.results);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return { apiList, loading };
};

export default useFetch;
