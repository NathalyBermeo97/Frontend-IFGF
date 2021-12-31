import React from "react";
import { withPrivate } from "../../hocs/withPrivate";
import { useState } from "react";
import { useNews } from "../../hooks/useNews";
import { ListGroup, Badge, Button } from "react-bootstrap";
import { NewsModal } from "../../components/NewsModal";
import styles from './styles.module.css'
import News from "../../api/news";
import {CreateNewsItemModal} from '../../components/CreateNewsItemModal'

const Admin = () => {
  const { news, setNews, updateNews } = useNews();
  console.log({ newsFromAdmin: news });
  const [showModal, setShowModal] = useState(false);
  const [newsItem, setNesItem] = useState([]);
  const [newNewsItem, setNewNewsItem] = useState({});
  const [showCreateNewsItemModal, setShowCreateNewsItemModal] = useState(false)

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const onShowModal = (newsItem) => {
    setNesItem(newsItem);
    setShowModal(true);
  };

  // const handleSave = () => {
  //   const newNews = news.map(newsitem => newsitem._id === newNewsItem._id ? newNewsItem : newsitem)
  //   //console.log({newNews, newNewsItem}) 
  //   News.update(newNewsItem._id, newNews).then(res => {
  //     console.log(res)
  //     setShowModal(false)})
  //   // updateNews(newNewsItem._id, newNews).then((response) => {
  //   //   console.log(response)
  //     // if (
  //     //   response &&
  //     //   response.data.message === "Noticia actualizada correctamente"
  //     // ) {
  //     //   setNews(newNews);
  //     // }
  //   // });
  // };

  return (
    <>
      <div className={styles.newsHeader}>
        <h2>Noticias</h2>
        <Button variant='outline-primary' size='sm' onClick={() => setShowCreateNewsItemModal(true)}>Crear</Button>
      </div>
      <ListGroup as="ol" numbered>
        {news.map((newsItem) => {
          return (
            <ListGroup.Item
              key={newsItem._id}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{newsItem.title}</div>
                {newsItem.description}
              </div>
              <Button size="sm" onClick={() => onShowModal(newsItem)}>
                ver
              </Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <NewsModal
        show={showModal}
        setData={setNewNewsItem}
        //handleSave={handleSave}
        setShowModal={setShowModal}
        handleClose={handleCloseModal}
        newsItem={newsItem}
      />
      <CreateNewsItemModal 
        showModal={showCreateNewsItemModal}
        setShowModal={setShowCreateNewsItemModal}
      />
    </>
  );
};

export default withPrivate(Admin);
