import { withPrivate } from "../../../hocs/withPrivate";
import React, { useEffect, useState } from "react";
import { useMessages } from "../../../hooks/useMessages";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import { UpdateMessagesItemModal } from "../../../components/UpdateMessagesItemModal";
import styles from "./styles.module.css";
import { CreateMessagesItemModal } from "../../../components/CreateMessagesItemModal";
import { ERROR_MESSAGES, SERVER_RESPONSE } from "../../../constants/inidex";
import { ListOfMessages } from "../../../components/ListOfMessages";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import Messages from "../../../api/messages";
import { ConfirmModal } from "../../../components/ConfirmModal";

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
  const {
    messages,
    setMessages,
    updateMessages,
    createMessagesItem,
    deleteMessages,
  } = useMessages();
  const [showModal, setShowModal] = useState(false);
  const [showCreateMessagesItemModal, setShowCreateMessagesItemModal] =
    useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventId, setEventId] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [firstNewsItemTitle, setFirstNewsItemTitle] = useState("");

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
    setFirstNewsItemTitle(messagesItem.title);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    deleteMessages(id).then((data) => {
      console.log({ data });
      if (data.message === SERVER_RESPONSE.DELETED_MESSAGES) {
        const newMessages = messages.filter((message) => message._id !== id);
        setMessages(newMessages);
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

    Messages.create(formData)
      .then((response) => {
        const newMessageItem = response.data;
        const callback = (prevState) => {
          return [...prevState, newMessageItem];
        };
        setMessages(callback);
        setShowCreateMessagesItemModal(false);
        reset();
        swal("Mensaje bíblico creado exitosamente!");
      })
      .catch((error) => {
        console.log(error);
        swal("Ya existe un registro almacenado con este título");
      });
  };

  const onSubmitUpdateMessagesItem = (data) => {
    const { _id: id } = data;
    const formData = new FormData();
    data.title !== firstNewsItemTitle && formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("file", data.file[0]);
    console.log({file: data.file[0]})

    updateMessages(id, formData)
      .then((newMessage) => {
        const newMessages = messages.map((message) =>
          message._id === newMessage._id ? newMessage : message
        );
        setMessages(newMessages);
        setShowModal(false);
        swal("Mensaje bíblico editado correctamente");
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
            <h1 className={styles.section}>Gestión de mensajes bíblicos</h1>
            <div className={styles.linea}></div>
          </div>
        </div>
        <div className={styles.info}>
          <p >
            En esta sección se visualiza,crea,edita y elimina información referente a los mensajes bíblicos de la Iglesia IFGF
          </p>
        </div>

        <InputGroup style={{ padding: "15px" }}>
          <FormControl
            placeholder="Buscar mensaje bíblico"
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
            onClick={() => setShowCreateMessagesItemModal(true)}
          >
            Crear mensaje bíblico
          </Button>
        </div>

        <ListOfMessages
          messages={filteredMessages}
          onShowModal={onShowModal}
          onShowDeleteModal={onShowDeleteModal}
        />
        <ConfirmModal
          isOpen={showDeleteModal}
          confirm={onConfirm}
          setIsOpen={setShowDeleteModal}
          item="el mensaje bíblico"
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
      </Container>
    </>
  );
};

export default withPrivate(MessagesPage);
