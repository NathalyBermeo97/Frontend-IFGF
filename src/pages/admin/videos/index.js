import { withPrivate } from "../../../hocs/withPrivate";
import React, { useEffect, useState } from "react";
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

import Videos from "../../../api/videos";
import {ConfirmModal} from "../../../components/ConfirmModal";

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
  const { videos, setVideos, updateVideos, createVideosItem,deleteVideos} = useVideos();
  const [showModal, setShowModal] = useState(false);
  const [showCreateVideosItemModal, setShowCreateVideosItemModal] =
    useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [eventId, setEventId] = useState(null);
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
      deleteVideos(id).then((data) => {
          console.log({data})
          if (data.message === SERVER_RESPONSE.DELETED_ALBUMS){

              const newVideos = videos.filter((video) => video._id !== id);
              setVideos(newVideos);
          }
      });
      setShowDeleteModal(false)
  };

  console.log({ errors });
  const onSubmit = (data) => {
    console.log(data);
      Videos.create(data).then((response) => {
          const newVideosItem = response.data;
          const callback =(prevState)=>{
              return [...prevState,newVideosItem]
          }
          setVideos(callback);
          setShowCreateVideosItemModal(false);
          reset();
          swal('Video creado exitosamente!')
      }).catch(error=>{
          console.log(error)
          swal('Error en el tipo de video, debe ser de tipo: familia,jovenes,niños!')
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
    const onConfirm = () => {
        handleDelete(eventId);
    };

    const onShowDeleteModal = (eventId) => {
        setShowDeleteModal(true);
        setEventId(eventId);
        //confirm({onOk: () => handleDelete(eventId)})
    };


  const onSubmitUpdateVideosItem = (data) => {
    const { _id: id } = data;
    updateVideos(id, data).then((newVideo) => {

        const newVideos = videos.map((video) =>
          video._id === newVideo._id ? newVideo : video
        );
        setVideos(newVideos);
        setShowModal(false);
        swal('Video editado exitosamente!')

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
        <div >
            <div className={styles.events}>
                <h1 className={styles.section}>Gestión de videos</h1>
                <div className={styles.linea}></div>
            </div>
        </div>

        <InputGroup style={{ padding: "15px" }}>
            <FormControl
                placeholder="Buscar video"
                aria-label="search_new"
                aria-describedby="basic-addon1"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
        </InputGroup>
        <div  className={styles.button}>
            <Button

                variant="info"
                size="m"
                onClick={() => setShowCreateVideosItemModal(true)}
            >
                Crear video
            </Button>
        </div>


          <ListOfVideos

            videos={filteredVideos}
            onShowModal={onShowModal}
            onShowDeleteModal={onShowDeleteModal}
          />
        <ConfirmModal
            isOpen={showDeleteModal}
            confirm={onConfirm}
            setIsOpen={setShowDeleteModal}
            item='vídeo'
        />
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

export default withPrivate(VideosPage);
