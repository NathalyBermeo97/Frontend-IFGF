import { withPrivate } from "../../../hocs/withPrivate";
import { useEffect, useState } from "react";
import { useMessages } from "../../../hooks/useMessages";
import { ListGroup, Button, FormControl, InputGroup } from "react-bootstrap";
import { UpdateMessagesItemModal } from "../../../components/UpdateMessagesItemModal";
import styles from "./styles.module.css";
import { CreateMessagesItemModal } from "../../../components/CreateMessagesItemModal";
import { ERROR_MESSAGES, SERVER_RESPONSE } from "../../../constants/inidex";
import { ListOfMessages } from "../../../components/ListOfMessages";
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

const MessagesPage = () => {
  const { messages, setMessages, updateMessages, createMessagesItem } =
    useMessages();
  const [showModal, setShowModal] = useState(false);
  const [showCreateMessagesItemModal, setShowCreateMessagesItemModal] =
    useState(false);
  const [keyword, setKeyword] = useState("");
  const [filteredMessages, setFilteredMessages] = useState([]);

  useEffect(() => {
    const filteredMessages = messages.filter((ni) =>
      ni.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredMessages(filteredMessages);
  }, [keyword, messages]);

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

  const onShowModal = (messagesItem) => {
    updateMessagesItemForm.reset(messagesItem);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    const newNews = messages.filter((ni) => ni._id !== id);
    setMessages(newNews);
  };

  console.log({ errors });
  const onSubmit = (data) => {
    console.log(data);
    // createNewsItem(data).then((message) => {
    //   if (message === SERVER_RESPONSE.NEWS_ITEM_CREATED) {
    //     //UPDATE THIS WITH THE NEW RESPONSE RATHER THAN THE MESSAGE
    //     setNews((prevState) => [
    //       ...prevState,
    //       { _id: Math.floor(Math.random() * 1000000000000), ...data },
    //     ]);
    //     setShowCreateNewsItemModal(false);
    //     reset();
    //   }
    // });
    setMessages((prevState) => [
      ...prevState,
      { _id: Math.floor(Math.random() * 1000000000000), ...data },
    ]);
    setShowCreateMessagesItemModal(false);
    reset();
  };

  const onSubmitUpdateMessagesItem = (data) => {
    const { _id: id } = data;
    // updateNews(id, data).then((message) => {
    //   if (message === "Noticia actualizada correctamente") {
    //     const newNews = news.map((newsItem) =>
    //       newsItem._id === data._id ? data : newsItem
    //     );
    //     setNews(newNews);
    //     setShowModal(false);
    //   }
    // });
    const newMessages = messages.map((messagesItem) =>
      messagesItem._id === data._id ? data : messagesItem
    );
    setMessages(newMessages);
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.newsHeader}>
        <h2>Mensajes Biblicos</h2>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => setShowCreateMessagesItemModal(true)}
        >
          Crear
        </Button>
      </div>

      <InputGroup className="mb-3" style={{ padding: "15px" }}>
        <FormControl
          placeholder="Buscar Mensaje"
          aria-label="search_message"
          aria-describedby="basic-addon1"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </InputGroup>

      <ListOfMessages
        key={messages._id}
        messages={messages}
        onShowModal={onShowModal}
        handleDelete={handleDelete}
      />

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

export default MessagesPage;
