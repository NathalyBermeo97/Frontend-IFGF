import { useEffect } from "react";
import { useState } from "react";
import News from "../api/news";

export const useNews = () => {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    const getNews = () => {
      News.get()
        .then(response => {
          console.log({response})
          setNews(response.data)
        }).catch(err => console.log('something went wrong', err));
    };
    getNews();
  }, []);

  const updateNews = async (id, newNewsItem) => {
    try{
      const response = await News.update(id, newNewsItem)
      return response.data.message
    }catch(e){
      console.log('Something went wrong', e)
    }
  }

  const createNewsItem = async (newNewsItem) => {
    try{
      const response = await News.create(newNewsItem)
      return response.data.message
    }catch(e){
      console.log('something went wrong', e)
    }
  }

  return {news, setNews, updateNews, createNewsItem};
};
