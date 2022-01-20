import { withPrivate } from "../../../hocs/withPrivate";
import { useEffect, useState } from "react";
import { useNews } from "../../../hooks/useNews";
import { ListGroup, Button, FormControl, InputGroup } from "react-bootstrap";
import { UpdateNewsItemModal } from "../../../components/UpdateNewsItemModal";
import styles from "./styles.module.css";
import { CreateNewsItemModal } from "../../../components/CreateNewsItemModal";
import { ERROR_MESSAGES, SERVER_RESPONSE } from "../../../constants/inidex";
import { ListOfNews } from "../../../components/ListOfNews";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import Albums from "../../../api/albums";
import News from "../../../api/news";

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

const NewsPage = () => {
  const { news, setNews, updateNews, createNewsItem, deleteNews } = useNews();
  const [showModal, setShowModal] = useState(false);
  const [showCreateNewsItemModal, setShowCreateNewsItemModal] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);

  console.log({ news });
  useEffect(() => {
    const filteredNews = news.filter((ni) =>
      ni.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredNews(filteredNews);
  }, [keyword, news]);

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

  const handleDelete = (id) => {
    deleteNews(id).then((data) => {
      console.log({ data });
      if (data.message === SERVER_RESPONSE.DELETED_NEWS) {
        const newNews = news.filter((item) => item._id !== id);
        setNews(newNews);
      }
    });
  };

  console.log({ errors });

  const onSubmit = async (data) => {
    console.log("data", data.file);
    console.log(data);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("file", data.file[0]);

    News.create(formData).then((response) => {
      const newNewsItem = response.data;
      const callback =(prevState)=>{
        return [...prevState,newNewsItem]
      }
      setNews(callback);
      setShowCreateNewsItemModal(false);
      reset();
    }).catch(error=>{
      console.log(error)
    });
  };

  const onSubmitUpdateNewsItem = (data) => {
    const { _id: id } = data;
    updateNews(id, data).then((newNew) => {
      const newNews = news.map((item) =>
        item._id === newNew._id ? newNew : item
      );
      setNews(newNews);
      setShowModal(false);
    });
    {
      /*const newAlbums = albums.map((albumsItem) =>
            albumsItem._id === data._id ? data : albumsItem
        );
        setAlbums(newAlbums);
        setShowModal(false);*/
    }
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

      <InputGroup className="mb-3" style={{ padding: "15px" }}>
        <FormControl
          placeholder="Buscar Noticia"
          aria-label="search_new"
          aria-describedby="basic-addon1"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </InputGroup>

      <ListOfNews
        news={filteredNews}
        onShowModal={onShowModal}
        handleDelete={handleDelete}
      />

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

export default withPrivate(NewsPage);
