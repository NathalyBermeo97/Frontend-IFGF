import { useEffect } from "react";
import { useState } from "react";
import News from "../api/news";

export const useNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = () => {
      News.get()
        .then(response => setNews(response.data));
    };
    getNews();
  }, []);

  return news;
};
