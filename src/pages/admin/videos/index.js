import { withPrivate } from "../../../hocs/withPrivate";
import { useEffect, useState } from "react";
import { useVideos } from "../../../hooks/useVideos";
import { ListGroup, Button, FormControl, InputGroup } from "react-bootstrap";
import { UpdateVideosItemModal } from "../../../components/UpdateVideosItemModal";
import styles from "./styles.module.css";
import { CreateVideosItemModal } from "../../../components/CreateVideosItemModal";
import { ERROR_MESSAGES, SERVER_RESPONSE } from "../../../constants/inidex";
import { ListOfVideos } from "../../../components/ListOfVideos";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

const videosItemSchema = yup.object().shape({
  title: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("título"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  description: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("descripción"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  type: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("tipo"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  url: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("url"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
});

const VideosPage = () => {
  const { videos, setVideos, updateVideos, createVideosItem } = useVideos();
  const [showModal, setShowModal] = useState(false);
  const [showCreateVideosItemModal, setShowCreateVideosItemModal] =
    useState(false);
  const [keyword, setKeyword] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    const filteredVideos = videos.filter((ni) =>
      ni.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredVideos(filteredVideos);
  }, [keyword, videos]);

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
    resolver: yupResolver(videosItemSchema),
  });

  const updateVideosItemForm = useForm({
    resolver: yupResolver(videosItemSchema),
  });

  const onShowModal = (videosItem) => {
    updateVideosItemForm.reset(videosItem);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    const newVideos = videos.filter((ni) => ni._id !== id);
    setVideos(newVideos);
  };

  console.log({ errors });
  const onSubmit = (data) => {
    console.log(data);
    createVideosItem(data).then((message) => {
      if (message === SERVER_RESPONSE.NEWS_ITEM_CREATED) {
        //UPDATE THIS WITH THE NEW RESPONSE RATHER THAN THE MESSAGE
        setVideos((prevState) => [
          ...prevState,
          { _id: Math.floor(Math.random() * 1000000000000), ...data },
        ]);
        setShowCreateVideosItemModal(false);
        reset();
      }
    });
    {
      /*setVideos((prevState) => [
            ...prevState,
            { _id: Math.floor(Math.random() * 1000000000000), ...data },
        ]);
        setShowCreateVideosItemModal(false);
        reset();*/
    }
  };

  const onSubmitUpdateVideosItem = (data) => {
    const { _id: id } = data;
    updateVideos(id, data).then((message) => {
      if (message === "Video actualizado correctamente") {
        const newVideos = videos.map((newsItem) =>
          newsItem._id === data._id ? data : newsItem
        );
        setVideos(newVideos);
        setShowModal(false);
      }
    });

    {
      /* const newVideos = videos.map((videosItem) =>
            videosItem._id === data._id ? data : videosItem
        );
        setVideos(newVideos);
        setShowModal(false);*/
    }
  };

  return (
    <>
      <div className={styles.newsHeader}>
        <h2>Videos</h2>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => setShowCreateVideosItemModal(true)}
        >
          Crear
        </Button>
      </div>

      <InputGroup className="mb-3" style={{ padding: "15px" }}>
        <FormControl
          placeholder="Buscar video"
          aria-label="search_new"
          aria-describedby="basic-addon1"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </InputGroup>

      <ListGroup as="ol" numbered>
        {filteredVideos.map((videosItem) => (
          <ListOfVideos
            key={videosItem._id}
            videosItem={videosItem}
            onShowModal={onShowModal}
            handleDelete={handleDelete}
          />
        ))}
      </ListGroup>

      <UpdateVideosItemModal
        show={showModal}
        setShowModal={setShowModal}
        register={updateVideosItemForm.register}
        handleSubmit={updateVideosItemForm.handleSubmit}
        onSubmit={onSubmitUpdateVideosItem}
        errors={updateVideosItemForm.formState.errors}
      />

      <CreateVideosItemModal
        showModal={showCreateVideosItemModal}
        setShowModal={setShowCreateVideosItemModal}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        clearErrors={clearErrors}
      />
    </>
  );
};

export default VideosPage;
