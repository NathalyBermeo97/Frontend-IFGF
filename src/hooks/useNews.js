import { useEffect } from "react";
import { useState } from "react";
import News from "../api/news";

export const useNews = () => {
  const [news, setNews] = useState([]);

  //console.log({news})
  useEffect(() => {
    const getNews = () => {
      News.get()
        .then(response => setNews(response.data));
    };
    getNews();
  }, []);

  const updateNews = async (id, newNews) => {
    try{
      // const newNews = news.map(newsItem => newsItem._id === id ? data : newsItem)
      const response = await News.update(id, newNews)
      console.log('message', response)
      //if(response && response.data.message === 'Noticia actualizada correctamente'){
        //const newNews = news.map(newsItem => newsItem._id === id ? data : newsItem)
        //console.log({newNews, news})
        // setNews(newNews)
      //}
      return response
    }catch(e){
      console.log('Something went wrong', e)
    }
  }

  return {news, setNews, updateNews};
};
