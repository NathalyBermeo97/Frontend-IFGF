import { withPrivate } from "../../../hocs/withPrivate";
import { useEffect, useState } from "react";
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
  const { albums, setAlbums, updateAlbums, createAlbumsItem } = useAlbums();
  const [showModal, setShowModal] = useState(false);
  const [showCreateAlbumsItemModal, setShowCreateAlbumsItemModal] =
    useState(false);
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
      description: "",
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
    const newAlbums = albums.filter((ni) => ni._id !== id);
    setAlbums(newAlbums);
  };

  console.log({ errors });

  const onSubmit = async (data) => {
    console.log(data);
    createAlbumsItem(data).then((data) => {
      if (data) {
        //UPDATE THIS WITH THE NEW RESPONSE RATHER THAN THE MESSAGE
        setAlbums((prevState) => [
          ...prevState,
          { _id: Math.floor(Math.random() * 1000000000000), ...data },
        ]);
        setShowCreateAlbumsItemModal(false);
        reset();
      }
    });
  };

  const onSubmitUpdateAlbumsItem = (data) => {
    const { _id: id } = data;
    updateAlbums(id, data).then((message) => {
      if (message === "Album actualizado correctamente") {
        const newAlbums = albums.map((newsItem) =>
          newsItem._id === data._id ? data : newsItem
        );
        setAlbums(newAlbums);
        setShowModal(false);
      }
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
        <h2>Albums de fotos </h2>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => setShowCreateAlbumsItemModal(true)}
        >
          Crear
        </Button>
      </div>

      <InputGroup className="mb-3" style={{ padding: "15px" }}>
        <FormControl
          placeholder="Buscar album"
          aria-label="search_message"
          aria-describedby="basic-addon1"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </InputGroup>

      <ListOfAlbums
        albums={filteredAlbums}
        onShowModal={onShowModal}
        handleDelete={handleDelete}
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

export default AlbumsPage;
