import { withPrivate } from "../../../hocs/withPrivate";
import { useEffect, useState } from "react";
import { useEvents } from "../../../hooks/useEvents";
import { ListGroup, Button, FormControl, InputGroup } from "react-bootstrap";
import { UpdateEventsItemModal } from "../../../components/UpdateEventsItemModal";
import styles from "./styles.module.css";
import { CreateEventsItemModal } from "../../../components/CreateEventsItemModal";
import { ERROR_MESSAGES, SERVER_RESPONSE } from "../../../constants/inidex";
import { ListOfEvents } from "../../../components/ListOfEvents";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import {useInscription} from '../../../hooks/useInscription'

const eventsItemSchema = yup.object().shape({
  title: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("título"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  description: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("descripción"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  ubication: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("ubicación"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  schedule: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("horario"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  cost: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("costo"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
});

const EventsPage = () => {
  const { events, setEvents, updateEvents, createEventsItem } = useEvents();
  const [showModal, setShowModal] = useState(false);
  const [showCreateEventsItemModal, setShowCreateEventsItemModal] =
    useState(false);
  const [keyword, setKeyword] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  //console.log({ events });
  const {allInscriptions} = useInscription()
  console.log({allInscriptions})

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

  const onShowModal = (eventsItem) => {
    updateEventsItemForm.reset(eventsItem);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    const newEvents = events.filter((ni) => ni._id !== id);
    setEvents(newEvents);
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
    setEvents((prevState) => [
      ...prevState,
      { _id: Math.floor(Math.random() * 1000000000000), ...data },
    ]);
    setShowCreateEventsItemModal(false);
    reset();
  };

  const onSubmitUpdateEventsItem = (data) => {
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
    const newEvents = events.map((eventsItem) =>
      eventsItem._id === data._id ? data : eventsItem
    );
    setEvents(newEvents);
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.newsHeader}>
        <h2>Eventos</h2>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => setShowCreateEventsItemModal(true)}
        >
          Crear
        </Button>
      </div>

      <InputGroup className="mb-3" style={{ padding: "15px" }}>
        <FormControl
          placeholder="Buscar evento"
          aria-label="search_new"
          aria-describedby="basic-addon1"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </InputGroup>

      <ListGroup as="ol" numbered>
        {filteredEvents.map((eventsItem) => (
          <ListOfEvents
            key={eventsItem._id}
            eventsItem={eventsItem}
            onShowModal={onShowModal}
            handleDelete={handleDelete}
          />
        ))}
      </ListGroup>

      <UpdateEventsItemModal
        show={showModal}
        setShowModal={setShowModal}
        register={updateEventsItemForm.register}
        handleSubmit={updateEventsItemForm.handleSubmit}
        onSubmit={onSubmitUpdateEventsItem}
        errors={updateEventsItemForm.formState.errors}
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

export default EventsPage;
