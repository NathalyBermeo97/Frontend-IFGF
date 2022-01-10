import { withPrivate } from "../../../hocs/withPrivate";
import { useEffect, useState } from "react";
import { useGames } from "../../../hooks/useGames";
import { ListGroup, Button, FormControl, InputGroup } from "react-bootstrap";
import { UpdateNewsItemModal } from "../../../components/UpdateNewsItemModal";
import { CreateGamesItemModal} from "../../../components/CreateFormGamesItemModal";
import { ERROR_MESSAGES, SERVER_RESPONSE } from "../../../constants/inidex";
import { ListOfGames } from "../../../components/ListOfGames";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import styles from "./styles.module.css";
import * as yup from "yup";

const gamesItemSchema = yup.object().shape({
    title: yup
        .string()
        .required(ERROR_MESSAGES.REQUIRED("título"))
        .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
    description: yup
        .string()
        .required(ERROR_MESSAGES.REQUIRED("descripción"))
        .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
});

const GamesPage = () => {
    const { games, setGames, updateGames, createGamesItem } = useGames();
    const [showModal, setShowModal] = useState(false);
    const [showCreateGamesItemModal, setShowCreateGamesItemModal] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [filteredGames, setFilteredGames] = useState([]);

    {/*useEffect(() => {
        const filteredGames = games.filter((ni) =>
            ni.title.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredGames(filteredGames)
    }, [keyword, games]);*/}

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
        resolver: yupResolver(gamesItemSchema),
    });

    const updateNewsItemForm = useForm({
        resolver: yupResolver(gamesItemSchema),
    });

    const onShowModal = (gamesItem) => {
        updateNewsItemForm.reset(gamesItem);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        const newGames = games.filter(ni => ni._id !== id)
        setGames(newGames)
    }

    console.log({ errors });
    const onSubmit = (data) => {
        console.log(data);
        createGamesItem(data).then((message) => {
            if (message === SERVER_RESPONSE.NEWS_ITEM_CREATED) {
                //     //UPDATE THIS WITH THE NEW RESPONSE RATHER THAN THE MESSAGE
                setGames((prevState) => [
                    ...prevState,
                    { _id: Math.floor(Math.random() * 1000000000000), ...data },
                ]);
                setShowCreateGamesItemModal(false);
                reset();
            }
        });
        {/*setNews((prevState) => [
      ...prevState,
      { _id: Math.floor(Math.random() * 1000000000000), ...data },
    ]);
    setShowCreateNewsItemModal(false);
    reset();*/}
    };

    const onSubmitUpdateGamesItem = (data) => {
        const { _id: id } = data;
        updateGames(id, data).then((message) => {
            if (message === "Cuestionario actualizado correctamente") {
                const newGames = games.map((gamesItem) =>
                    gamesItem._id === data._id ? data : gamesItem
                );
                setGames(newGames);
                setShowModal(false);
            }
        });

        {/*const newNews = news.map((newsItem) =>
      newsItem._id === data._id ? data : newsItem
    );
    setNews(newNews);
    setShowModal(false);
    */}
    };

    return (
        <>
            <div className={styles.newsHeader}>
                <h2>Cuestionarios</h2>
                <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => setShowCreateGamesItemModal(true)}
                >
                    Crear
                </Button>
            </div>

            <InputGroup className="mb-3" style={{ padding: "15px" }}>
                <FormControl
                    placeholder="Buscar cuestionario"
                    aria-label="search_new"
                    aria-describedby="basic-addon1"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </InputGroup>

            <ListGroup as="ol" numbered>
                {filteredGames
                    .map((gamesItem) => (
                        <ListOfGames
                            key={gamesItem._id}
                            newsItem={gamesItem}
                            onShowModal={onShowModal}
                            handleDelete={handleDelete}
                        />
                    ))}
            </ListGroup>

            <UpdateNewsItemModal
                show={showModal}
                setShowModal={setShowModal}
                register={updateNewsItemForm.register}
                handleSubmit={updateNewsItemForm.handleSubmit}
                onSubmit={onSubmitUpdateGamesItem}
                errors={updateNewsItemForm.formState.errors}
            />

            <CreateGamesItemModal
                showModal={showCreateGamesItemModal}
                setShowModal={setShowCreateGamesItemModal}
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                errors={errors}
                clearErrors={clearErrors}
            />
        </>
    );
};

export default withPrivate(GamesPage);
