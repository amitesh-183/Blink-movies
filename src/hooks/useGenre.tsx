import { useEffect, useState } from "react";
import axios from "axios";
const token = import.meta.env.VITE_API_TOKEN_KEY;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

interface GenreProps {
  id: number;
  name: string;
}

const useGenre = (url: string) => {
  const [apiList, setApiList] = useState<GenreProps>([]);
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
      setApiList(response.data.genres);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return { apiList, loading };
};

export default useGenre;
