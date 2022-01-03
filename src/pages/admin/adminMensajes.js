import { withPrivate } from "../../hocs/withPrivate";
import { useState } from "react";
import { useMessages } from "../../hooks/useMessages";
import { ListGroup, Button } from "react-bootstrap";
import { UpdateMessagesItemModal } from "../../components/UpdateMessagesItemModal";
import styles from "./styles.module.css";
import { CreateMessagesItemModal } from "../../components/CreateMessagesItemModal";
import { ERROR_MESSAGES, SERVER_RESPONSE } from "../../constans/inidex";
import { ListOfMessages } from "../../components/ListOfMessages";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

const messagesItemSchema = yup.object().shape({
    title: yup
        .string()
        .required(ERROR_MESSAGES.REQUIRED("título"))
        .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
    description: yup
        .string()
        .required(ERROR_MESSAGES.REQUIRED("descripción"))
        .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
});

const AdminMessages = () => {
    const { messages, setMessages, updateMessages, createMessagesItem } = useMessages();
    const [showModal, setShowModal] = useState(false);
    const [showCreateMessagesItemModal, setShowCreateMessagesItemModal] = useState(false);

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
        resolver: yupResolver(messagesItemSchema),
    });

    const updateMessagesItemForm = useForm({
        resolver: yupResolver(messagesItemSchema),
    });

    const onShowModal = (newsItem) => {
        updateMessagesItemForm.reset(newsItem);
        setShowModal(true);
    };

    console.log({ errors });
    const onSubmit = (data) => {
        console.log(data);
        createMessagesItem(data).then((message) => {
            if (message === SERVER_RESPONSE.NEWS_ITEM_CREATED) {
                //UPDATE THIS WITH THE NEW RESPONSE RATHER THAN THE MESSAGE
                setMessages((prevState) => [
                    ...prevState,
                    { _id: Math.floor(Math.random() * 1000000000000), ...data },
                ]);
                setShowCreateMessagesItemModal(false);
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

    const onSubmitUpdateMessagesItem = (data) => {
        const { _id: id } = data;
        updateMessages(id, data).then((message) => {
            if (message === "Mensaje actualizado correctamente") {
                const newMessages = messages.map((messagesItem) =>
                    messagesItem._id === data._id ? data : messagesItem
                );
                setMessages(newMessages);
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
            <div className={styles.newsHeader}>
                <h2>Mensajes</h2>
                <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => setShowCreateMessagesItemModal(true)}
                >
                    Crear
                </Button>
            </div>
            <ListGroup as="ol" numbered>
                {messages.map((newsItem) => (
                    <ListOfMessages
                        key={newsItem._id}
                        newsItem={newsItem}
                        onShowModal={onShowModal}
                    />
                ))}
            </ListGroup>

            <UpdateMessagesItemModal
                show={showModal}
                setShowModal={setShowModal}
                register={updateMessagesItemForm.register}
                handleSubmit={updateMessagesItemForm.handleSubmit}
                onSubmit={onSubmitUpdateMessagesItem}
                errors={updateMessagesItemForm.formState.errors}
            />

            <CreateMessagesItemModal
                showModal={showCreateMessagesItemModal}
                setShowModal={setShowCreateMessagesItemModal}
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                errors={errors}
                clearErrors={clearErrors}
            />
        </>
    );
};

export default withPrivate(AdminMessages);