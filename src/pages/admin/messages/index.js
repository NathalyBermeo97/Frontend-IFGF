import { withPrivate } from "../../../hocs/withPrivate";
import { useEffect, useState } from "react";
import { useMessages } from "../../../hooks/useMessages";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { UpdateMessagesItemModal } from "../../../components/UpdateMessagesItemModal";
import styles from "./styles.module.css";
import { CreateMessagesItemModal } from "../../../components/CreateMessagesItemModal";
import { ERROR_MESSAGES, SERVER_RESPONSE } from "../../../constants/inidex";
import { ListOfMessages } from "../../../components/ListOfMessages";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import Messages from "../../../api/messages";

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
  const { messages, setMessages, updateMessages, createMessagesItem,deleteMessages } =
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
      description: ""
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
    deleteMessages(id).then((data) => {
      console.log({data})
      if (data.message === SERVER_RESPONSE.DELETED_MESSAGES){

        const newMessages = messages.filter((message) => message._id !== id);
        setMessages(newMessages);
      }

    });
  };

  console.log({ errors });
  const onSubmit = async (data) => {
    console.log("data",data.file);
    console.log(data);

    const formData = new FormData();
    formData.append("title",data.title);
    formData.append("description",data.description);
    formData.append("file",data.file[0]);

    const response= await Messages.create(formData);

    console.log("response",response)
    createMessagesItem(data).then((data) => {
      if (data) {
        //UPDATE THIS WITH THE NEW RESPONSE RATHER THAN THE MESSAGE
        setMessages((prevState) => [
          ...prevState,
          { _id: Math.floor(Math.random() * 1000000000000), ...data },
        ]);
        setShowCreateMessagesItemModal(false);
        reset();
      }
    });

  };


  const onSubmitUpdateMessagesItem = (data) => {
    const { _id: id } = data;
    updateMessages(id, data).then((newMessage) => {

      const newMessages = messages.map((message) =>
          message._id === newMessage._id ? newMessage : message
      );
      setMessages(newMessages);
      setShowModal(false);

    });

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
          messages={filteredMessages}
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
