import { withPrivate } from "../../hocs/withPrivate";
import { useState } from "react";
import { useAlbums} from "../../hooks/useAlbums";
import { ListGroup, Button } from "react-bootstrap";
import { UpdateAlbumsItemModal } from "../../components/UpdateAlbumsItemModal";
import styles from "./styles.module.css";
import { CreateAlbumsItemModal } from "../../components/CreateAlbumsItemModal";
import { ERROR_MESSAGES, SERVER_RESPONSE } from "../../constans/inidex";
import { ListOfAlbums } from "../../components/ListOfAlbums";
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

const AdminAlbums = () => {
    const { albums, setAlbums, updateAlbums, createAlbumsItem } = useAlbums();
    const [showModal, setShowModal] = useState(false);
    const [showCreateAlbumsItemModal, setShowCreateAlbumsItemModal] = useState(false);

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

    console.log({ errors });
    const onSubmit = (data) => {
        console.log(data);
        createAlbumsItem(data).then((message) => {
            if (message === SERVER_RESPONSE.NEWS_ITEM_CREATED) {
                //UPDATE THIS WITH THE NEW RESPONSE RATHER THAN THE MESSAGE
                setAlbums((prevState) => [
                    ...prevState,
                    { _id: Math.floor(Math.random() * 1000000000000), ...data },
                ]);
                setShowCreateAlbumsItemModal(false);
                reset();
            }
        });
        // setNews((prevState) => [
        //   ...prevState,
        //   { _id: Math.floor(Math.random() * 1000000000000), ...data },
        // ]);
        // setShowCreateNewsItemModal(false);
        // reset();
    };

    const onSubmitUpdateAlbumsItem = (data) => {
        const { _id: id } = data;
        updateAlbums(id, data).then((message) => {
            if (message === "Album actualizado correctamente") {
                const newAlbums = albums.map((albumsItem) =>
                    albumsItem._id === data._id ? data : albumsItem
                );
                setAlbums(newAlbums);
                setShowModal(false);
            }
        });
        // const newNews = news.map((newsItem) =>
        //   newsItem._id === data._id ? data : newsItem
        // );
        // setNews(newNews);
        // setShowModal(false);
    };

    return (
        <>
            <div className={styles.albumsHeader}>
                <h2>Albums</h2>
                <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => setShowCreateAlbumsItemModal(true)}
                >
                    Crear
                </Button>
            </div>
            <ListGroup as="ol" numbered>
                {albums.map((newsItem) => (
                    <ListOfAlbums
                        key={newsItem._id}
                        newsItem={newsItem}
                        onShowModal={onShowModal}
                    />
                ))}
            </ListGroup>

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

export default withPrivate(AdminAlbums);