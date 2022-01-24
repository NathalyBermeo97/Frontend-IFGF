import { withPrivate } from "../../../hocs/withPrivate";
import React, { useEffect, useState } from "react";
import { useEvents } from "../../../hooks/useEvents";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { UpdateEventsItemModal } from "../../../components/UpdateEventsItemModal";
import styles from "./styles.module.css";
import { CreateEventsItemModal } from "../../../components/CreateEventsItemModal";
import {ERROR_MESSAGES, SERVER_RESPONSE} from "../../../constants/inidex";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { ListOfEvents_ } from "../../../components/ListOfEvents_";
import Events from "../../../api/events";

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
  number: yup.number().required(ERROR_MESSAGES.REQUIRED("costo")),
});

const EventsPage = () => {
  const { events, setEvents, updateEvents, createEventsItem,deleteEvents} = useEvents();
  const [showModal, setShowModal] = useState(false);
  const [showCreateEventsItemModal, setShowCreateEventsItemModal] =
    useState(false);
  const [keyword, setKeyword] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

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
    setShowModal(true);
  };
  const onInsModal = (event) => {
    updateEventsItemForm.reset(event);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    deleteEvents(id).then((data) => {
      console.log({data})
      if (data.message === SERVER_RESPONSE.DELETED_ALBUMS){

        const newEvents = events.filter((event) => event._id !== id);
        setEvents(newEvents);
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
    formData.append("location",data.location);
    formData.append("schedule",data.schedule);
    formData.append("cost",data.cost);
    formData.append("number",data.number);
    formData.append("file",data.file[0]);


    Events.create(formData).then((response) => {
      const newEventsItem = response.data;
      const callback =(prevState)=>{
        return [...prevState,newEventsItem]
      }
      setEvents(callback);
      setShowCreateEventsItemModal(false);
      reset();
      alert('Evento creado exitosamente!')
    }).catch(error=>{
      console.log(error)
      alert('Error al crear un evento!')
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
    updateEvents(id, data).then((returnedEvent) => {
      const newEvents = events.map((event) =>
        event._id === returnedEvent._id ? returnedEvent : event
      );
      setEvents(newEvents);
      setShowModal(false);
    });
    {
      /*const newEvents = events.map((eventsItem) =>
      eventsItem._id === data._id ? data : eventsItem
    );
    setEvents(newEvents);
    setShowModal(false);*/
    }
  };

  return (
    <>
      <div >
        <div className={styles.events}>
          <h1 className={styles.section}>Gestión de eventos</h1>
          <div className={styles.linea}></div>
        </div>
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
      <div  className={styles.button}>
        <Button

            variant="info"
            size="m"
            onClick={() => setShowCreateEventsItemModal(true)}
        >
          Crear evento
        </Button>
      </div>

      <ListOfEvents_
        events={filteredEvents}
        onShowEditModal={onShowModal}
        handleDelete={handleDelete}

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
    </>
  );
};

export default withPrivate(EventsPage);
