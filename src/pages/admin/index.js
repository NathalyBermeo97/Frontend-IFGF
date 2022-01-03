import { withPrivate } from "../../hocs/withPrivate";
import { useState } from "react";
import { useNews } from "../../hooks/useNews";
import { ListGroup, Button } from "react-bootstrap";
import { UpdateNewsItemModal } from "../../components/UpdateNewsItemModal";
import styles from "./styles.module.css";
import { CreateNewsItemModal } from "../../components/CreateNewsItemModal";
import { ERROR_MESSAGES, SERVER_RESPONSE } from "../../constans/inidex";
import { ListOfNews } from "../../components/ListOfNews";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

const newsItemSchema = yup.object().shape({
  title: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("título"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  description: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("descripción"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
});

const Admin = () => {
  const { news, setNews, updateNews, createNewsItem } = useNews();
  const [showModal, setShowModal] = useState(false);
  const [showCreateNewsItemModal, setShowCreateNewsItemModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: yupResolver(newsItemSchema),
  });

  const updateNewsItemForm = useForm({
    resolver: yupResolver(newsItemSchema),
  });

  const onShowModal = (newsItem) => {
    updateNewsItemForm.reset(newsItem);
    setShowModal(true);
  };

  console.log({ errors });
  const onSubmit = (data) => {
    console.log(data);
    {
      /*createNewsItem(data).then((message) => {
            if (message === SERVER_RESPONSE.NEWS_ITEM_CREATED) {
                //UPDATE THIS WITH THE NEW RESPONSE RATHER THAN THE MESSAGE
                setNews((prevState) => [
                    ...prevState,
                    { _id: Math.floor(Math.random() * 1000000000000), ...data },
                ]);
                setShowCreateNewsItemModal(false);
                reset();
            }
        });*/
    }
    setNews((prevState) => [
      ...prevState,
      { _id: Math.floor(Math.random() * 1000000000000), ...data },
    ]);
    setShowCreateNewsItemModal(false);
    reset();
  };

  const onSubmitUpdateNewsItem = (data) => {
    const { _id: id } = data;
      {/*updateNews(id, data).then((message) => {
      if (message === "Noticia actualizada correctamente") {
        const newNews = news.map((newsItem) =>
          newsItem._id === data._id ? data : newsItem
        );
        setNews(newNews);
        setShowModal(false);
      }
    });*/}

    const newNews = news.map((newsItem) =>
    newsItem._id === data._id ? data : newsItem
    );
    setNews(newNews);
    setShowModal(false);
  };


  return (
    <>
      <div className={styles.newsHeader}>
        <h2>Noticias</h2>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => setShowCreateNewsItemModal(true)}
        >
          Crear
        </Button>
      </div>
      <ListGroup as="ol" numbered>
        {news.map((newsItem) => (
          <ListOfNews
            key={newsItem._id}
            newsItem={newsItem}
            onShowModal={onShowModal}
          />
        ))}
      </ListGroup>

      <UpdateNewsItemModal
        show={showModal}
        setShowModal={setShowModal}
        register={updateNewsItemForm.register}
        handleSubmit={updateNewsItemForm.handleSubmit}
        onSubmit={onSubmitUpdateNewsItem}
        errors={updateNewsItemForm.formState.errors}
      />

      <CreateNewsItemModal
        showModal={showCreateNewsItemModal}
        setShowModal={setShowCreateNewsItemModal}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        clearErrors={clearErrors}
      />
    </>
  );
};

export default (Admin);
