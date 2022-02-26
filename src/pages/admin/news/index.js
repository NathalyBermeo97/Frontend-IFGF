import { withPrivate } from "../../../hocs/withPrivate";
import React, { useEffect, useState } from "react";
import { useNews } from "../../../hooks/useNews";
import { Button, FormControl, InputGroup, Container } from "react-bootstrap";
import { UpdateNewsItemModal } from "../../../components/UpdateNewsItemModal";
import styles from "./styles.module.css";
import { CreateNewsItemModal } from "../../../components/CreateNewsItemModal";
import { ERROR_MESSAGES, SERVER_RESPONSE } from "../../../constants/inidex";
import { ListOfNews } from "../../../components/ListOfNews";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import News from "../../../api/news";
import swal from "sweetalert";
import { ConfirmModal } from "../../../components/ConfirmModal";

const newsItemSchema = yup.object().shape({
  title: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("título"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  description: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("descripción"))
    .max(250, ERROR_MESSAGES.MAX2_STRING("descripción", 250))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  file: yup.mixed().required(ERROR_MESSAGES.REQUIRED("imagen")),
});

const NewsPage = () => {
  const { news, setNews, updateNews, createNewsItem, deleteNews } = useNews();
  const [showModal, setShowModal] = useState(false);
  const [showCreateNewsItemModal, setShowCreateNewsItemModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventId, setEventId] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);
  const [firstNewsItemTitle, setFirstNewsItemTitle] = useState("");

  console.log({ newsFromPage: news, firstNewsItemTitle });
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
      file: "",
    },
    resolver: yupResolver(newsItemSchema),
  });

  const updateNewsItemForm = useForm({
    resolver: yupResolver(newsItemSchema),
  });

  const onShowModal = (newsItem) => {
    updateNewsItemForm.reset(newsItem);
    setFirstNewsItemTitle(newsItem.title);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    deleteNews(id).then((data) => {
      if (data.message === SERVER_RESPONSE.DELETED_NEWS) {
        const newNews = news.filter((item) => item._id !== id);
        setNews(newNews);
      }
    });
    setShowDeleteModal(false);
  };
  const onConfirm = () => {
    handleDelete(eventId);
  };

  const onShowDeleteModal = (eventId) => {
    setShowDeleteModal(true);
    setEventId(eventId);
    //confirm({onOk: () => handleDelete(eventId)})
  };

  console.log({ errors });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("file", data.file[0]);

    News.create(formData)
      .then((response) => {
        const newNewsItem = response.data;
        const callback = (prevState) => {
          return [...prevState, newNewsItem];
        };
        setNews(callback);
        setShowCreateNewsItemModal(false);
        reset();
        swal("Noticia creada exitosamente");
      })
      .catch((error) => {
        console.log(error);
        swal("Ya existe un registro almacenado con este título");
      });
  };

  const onSubmitUpdateNewsItem = async (data) => {
    const { _id: id } = data;
    const formData = new FormData();
    data.title !== firstNewsItemTitle && formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("file", data.file[0]);
    console.log({ file: data.file[0] });

    updateNews(id, formData)
      .then((newNew) => {
        const newNews = news.map((item) =>
          item._id === newNew._id ? newNew : item
        );
        setNews(newNews);
        setShowModal(false);
        swal("Noticia editada correctamente");
      })
      .catch((error) => {
        console.log(error);
        swal("Ya existe un registro almacenado con este título");
      });
  };

  return (
    <>
      <Container>
        <div>
          <div className={styles.events}>
            <h1 className={styles.section}>Gestión de noticias</h1>
            <div className={styles.linea}></div>
          </div>
        </div>
        <div className={styles.info}>
          <p>
            En esta sección se visualiza ,crea,edita y elimina información
            referente a las noticias de la Iglesia IFGF
          </p>
        </div>

        <InputGroup style={{ padding: "15px" }}>
          <FormControl
            placeholder="Buscar Noticia"
            aria-label="search_new"
            aria-describedby="basic-addon1"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </InputGroup>
        <div className={styles.button}>
          <Button
            variant="info"
            size="m"
            onClick={() => setShowCreateNewsItemModal(true)}
          >
            Crear noticia
          </Button>
        </div>

        <ListOfNews
          news={filteredNews}
          onShowModal={onShowModal}
          handleDelete={handleDelete}
          onShowDeleteModal={onShowDeleteModal}
        />
        <ConfirmModal
          isOpen={showDeleteModal}
          confirm={onConfirm}
          setIsOpen={setShowDeleteModal}
          item="la noticia"
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
      </Container>
    </>
  );
};

export default withPrivate(NewsPage);
