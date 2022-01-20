import { useEffect, useState } from "react";
import Events from "../api/events";
import { useAuth } from "../context/AuthContext";

export const useEvents = () => {
  const { currentUser } = useAuth();
  const [events, setEvents] = useState([]);
  const [userEvents, setUserEvents] = useState([]);

  console.log({ events });
  useEffect(() => {
    const userEvents = events.filter((event) =>
      event?.inscriptions.includes(currentUser?._id)
    );
    setUserEvents(userEvents);
  }, [events, currentUser]);

  useEffect(() => {
    const getEvents = () => {
      Events.get()
        .then((data) => {
          setEvents(data);
        })
        .catch((err) => console.log("something went wrong", err));
    };
    getEvents();
  }, []);

  const updateEvents = async (id, newEventsItem) => {
    try {
      const response = await Events.update(id, newEventsItem);
      return response.data;
    } catch (e) {
      console.log("Something went wrong", e);
    }
  };

  const createEventsItem = async (newEventsItem) => {
    try {
      const response = await Events.create(newEventsItem);
      return response.data;
    } catch (e) {
      console.log("something went wrong", e);
    }
  };

  const createInscription = async (eventId) => {
    try {
      const response = await Events.createInscription(eventId);
      return response;
    } catch (e) {
      console.log("something went wrong", e);
    }
  };

  const deleteEvents = async (newEventsItem) => {
    try {
      const response = await Events.delete(newEventsItem);
      return response.data;
    } catch (e) {
      console.log("something went wrong", e);
    }
  };

  return {
    events,
    setEvents,
    deleteEvents,
    updateEvents,
    createEventsItem,
    createInscription,
    userEvents,
  };
};
