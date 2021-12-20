import React from "react";
import { Modal } from "antd";

export const EventModal = ({ isOpen, event, setIsOpen }) => {
    
  return (
      event ? 
    <Modal visible={isOpen} onOk={() => setIsOpen(false)} onCancel={() => setIsOpen(false)} okText='Inscribirse'>
      <p>{event.description}</p>
      <p>{event.ubication}</p>
      <img src={event.imgURL}/>
    </Modal> : ''
  );
};
