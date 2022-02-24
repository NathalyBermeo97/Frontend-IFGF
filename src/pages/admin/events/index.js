import { withPrivate } from "../../../hocs/withPrivate";
import React, { useEffect, useState } from "react";
import { useEvents } from "../../../hooks/useEvents";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import { UpdateEventsItemModal } from "../../../components/UpdateEventsItemModal";
import styles from "./styles.module.css";
import { CreateEventsItemModal } from "../../../components/CreateEventsItemModal";
import { ERROR_MESSAGES, SERVER_RESPONSE } from "../../../constants/inidex";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { ListOfEvents } from "../../../components/ListOfEvents";
import Events from "../../../api/events";
import { ConfirmModal } from "../../../components/ConfirmModal";
import swal from "sweetalert";

const eventsItemSchema = yup.object().shape({
  title: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("título"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  description: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("descripción"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  location: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("dirección"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  schedule: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("horario"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  cost: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("costo"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  number: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("aforo permitido"))
    .matches("^[0-9]+$", ERROR_MESSAGES.MATCHNUMBER),
});

const EventsPage = () => {
  const { events, setEvents, updateEvents, createEventsItem, deleteEvents } =
    useEvents();
  const [showModal, setShowModal] = useState(false);
  const [showCreateEventsItemModal, setShowCreateEventsItemModal] =
    useState(false);
  const [keyword, setKeyword] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventId, setEventId] = useState(null);
  const [firstNewsItemTitle, setFirstNewsItemTitle] = useState("");

  useEffect(() => {
    const filteredEvents = events?.filter((ni) =>
      ni.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredEvents(filteredEvents);
  }, [keyword, events]);

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
    resolver: yupResolver(eventsItemSchema),
  });

  const updateEventsItemForm = useForm({
    resolver: yupResolver(eventsItemSchema),
  });

  const onShowModal = (event) => {
    updateEventsItemForm.reset(event);
    setFirstNewsItemTitle(event.title);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    deleteEvents(id).then((data) => {
      console.log({ data });
      if (data.message === SERVER_RESPONSE.DELETED_EVENT) {
        const newEvents = events.filter((event) => event._id !== id);
        setEvents(newEvents);
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

  const onSubmit = async (data) => {


    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("location", data.location);
    formData.append("date", data.date);
    formData.append("schedule", data.schedule);
    formData.append("cost", data.cost);
    formData.append("number", data.number);
    formData.append("file", data.file[0]);

    Events.create(formData)
      .then((response) => {
        const newEventsItem = response.data;
        const callback = (prevState) => {
          return [...prevState, newEventsItem];
        };
        setEvents(callback);
        setShowCreateEventsItemModal(false);
        reset();
        swal("Evento creado exitosamente!");
      })
      .catch((error) => {
        console.log(error);
        swal("Ya existe un registro almacenado con este título");
      });
    {
      /*setEvents((prevState) => [
      ...prevState,
      { _id: Math.floor(Math.random() * 1000000000000), ...data },
    ]);
    setShowCreateEventsItemModal(false);
    reset();*/
    }
  };

  const onSubmitUpdateEventsItem = (data) => {
    const { _id: id } = data;
    console.log({ id });
    const formData = new FormData();
    data.title !== firstNewsItemTitle && formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("file", data.file[0]);
    console.log({file: data.file[0]})

    updateEvents(id, formData)
      .then((returnedEvent) => {
        const newEvents = events.map((event) =>
          event._id === returnedEvent._id ? returnedEvent : event
        );
        setEvents(newEvents);
        setShowModal(false);
        swal("Evento editado correctamente");
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
            <h1 className={styles.section}>Gestión de eventos</h1>
            <div className={styles.linea}></div>
          </div>
        </div>
        <div className={styles.info}>
          <p>
            En esta sección se visualiza, crea, edita y elimina información
            referente a los eventos de la Iglesia IFGF
          </p>
        </div>

        <InputGroup style={{ padding: "15px" }}>
          <FormControl
            placeholder="Buscar evento"
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
            onClick={() => setShowCreateEventsItemModal(true)}
          >
            Crear evento
          </Button>
        </div>

        <ListOfEvents
          events={filteredEvents}
          onShowEditModal={onShowModal}
          onShowDeleteModal={onShowDeleteModal}
        />

        <ConfirmModal
          isOpen={showDeleteModal}
          confirm={onConfirm}
          setIsOpen={setShowDeleteModal}
          item=" el evento"
        />

        <UpdateEventsItemModal
          show={showModal}
          setShowModal={setShowModal}
          register={updateEventsItemForm.register}
          handleSubmit={updateEventsItemForm.handleSubmit}
          onSubmit={onSubmitUpdateEventsItem}
          errors={updateEventsItemForm.formState.errors}
          getValues={updateEventsItemForm.getValues}
        />

        <CreateEventsItemModal
          showModal={showCreateEventsItemModal}
          setShowModal={setShowCreateEventsItemModal}
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

export default withPrivate(EventsPage);
