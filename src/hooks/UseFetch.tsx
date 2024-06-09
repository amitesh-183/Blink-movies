import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const token = import.meta.env.VITE_API_TOKEN_KEY as string;
const baseUrl = import.meta.env.VITE_API_BASE_URL as string;

interface MovieProps {
  id: number;
  title: string;
  name?: string;
  poster_path: string;
  overview: string;
}

interface MovieResponse {
  results: MovieProps[];
}

const useFetch = (url: string) => {
  const [apiList, setApiList] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const options: AxiosRequestConfig = {
    method: "GET",
    url: `${baseUrl}${url}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async (): Promise<void> => {
    try {
      const response: AxiosResponse<MovieResponse> = await axios.request(
        options
      );
      setApiList(response.data.results);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return { apiList, loading };
};

export default useFetch;
