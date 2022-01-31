import { withPrivate } from "../../../hocs/withPrivate";
import React, { useEffect, useState } from "react";
import { useAlbums } from "../../../hooks/useAlbums";
import { ListGroup, Button, FormControl, InputGroup } from "react-bootstrap";
import { UpdateAlbumsItemModal } from "../../../components/UpdateAlbumsItemModal";
import styles from "./styles.module.css";
import { CreateAlbumsItemModal } from "../../../components/CreateAlbumsItemModal";
import { ERROR_MESSAGES, SERVER_RESPONSE } from "../../../constants/inidex";
import { ListOfAlbums } from "../../../components/ListOfAlbums";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import Albums from "../../../api/albums";
import {ConfirmModal} from "../../../components/ConfirmModal";
import swal from "sweetalert";


const albumsItemSchema = yup.object().shape({
  title: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("título"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  description: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("descripción"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
});

const AlbumsPage = () => {
  const { albums, setAlbums, updateAlbums, createAlbumsItem,deleteAlbums } = useAlbums();
  const [showModal, setShowModal] = useState(false);
  const [showCreateAlbumsItemModal, setShowCreateAlbumsItemModal] =
    useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventId, setEventId] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  useEffect(() => {
    const filteredAlbums = albums.filter((ni) =>
      ni.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredAlbums(filteredAlbums);
  }, [keyword, albums]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      title: "",
      description: ""
    },
    resolver: yupResolver(albumsItemSchema),
  });

  const updateAlbumsItemForm = useForm({
    resolver: yupResolver(albumsItemSchema),
  });

  const onShowModal = (albumsItem) => {
    updateAlbumsItemForm.reset(albumsItem);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    deleteAlbums(id).then((data) => {
      console.log({data})
      if (data.message === SERVER_RESPONSE.DELETED_ALBUMS){

        const newAlbums = albums.filter((album) => album._id !== id);
        setAlbums(newAlbums);
      }

    });
    setShowDeleteModal(false)
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
    console.log("data",data.file);
    console.log(data);

    const formData = new FormData();
    formData.append("title",data.title);
    formData.append("description",data.description);
    formData.append("file",data.file[0]);

    Albums.create(formData).then((response) => {
      const newAlbumsItem = response.data;
      const callback =(prevState)=>{
        return [...prevState,newAlbumsItem]
      }
      setAlbums(callback);
      setShowCreateAlbumsItemModal(false);
      reset();
      swal('Foto creada exitosamente!')
    }).catch(error=>{
      console.log(error)
      swal('Error al subir una foto!')
    });
  };

  const onSubmitUpdateAlbumsItem = (data) => {
    const { _id: id } = data;
    updateAlbums(id, data).then((newAlbum) => {

      const newAlbums = albums.map((album) =>
          album._id === newAlbum._id ? newAlbum : album
      );
      setAlbums(newAlbums);
      setShowModal(false);

    });
    swal('Foto editada correctamente')
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
      <div >
        <div className={styles.events}>
          <h1 className={styles.section}>Gestión de álbum de fotos</h1>
          <div className={styles.linea}></div>
        </div>
      </div>

      <InputGroup style={{ padding: "15px" }}>
        <FormControl
            placeholder="Buscar foto"
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
            onClick={() => setShowCreateAlbumsItemModal(true)}
        >
          Crear foto
        </Button>
      </div>

      <ListOfAlbums
        albums={filteredAlbums}
        onShowModal={onShowModal}
        onShowDeleteModal={onShowDeleteModal}
      />
      <ConfirmModal
          isOpen={showDeleteModal}
          confirm={onConfirm}
          setIsOpen={setShowDeleteModal}
          item='foto'
      />

      <UpdateAlbumsItemModal
        show={showModal}
        setShowModal={setShowModal}
        register={updateAlbumsItemForm.register}
        handleSubmit={updateAlbumsItemForm.handleSubmit}
        onSubmit={onSubmitUpdateAlbumsItem}
        errors={updateAlbumsItemForm.formState.errors}
      />

      <CreateAlbumsItemModal
          showModal={showCreateAlbumsItemModal}
          setShowModal={setShowCreateAlbumsItemModal}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
          clearErrors={clearErrors}
      />
    </>
  );
};

export default withPrivate(AlbumsPage);
