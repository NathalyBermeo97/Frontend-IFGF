import React from "react";
import { Modal } from "antd";

export const EventModal = ({ isOpen, event }) => {
  return (
      event ? 
    <Modal visible={isOpen}>
      <p>{event.description}</p>
      <p>{event.ubication}</p>
      <img src={event.imgURL}/>
    </Modal> : ''
  );
};
