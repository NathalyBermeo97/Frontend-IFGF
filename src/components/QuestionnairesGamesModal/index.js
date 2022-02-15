import React from "react";
import { Button, Modal, Table } from "react-bootstrap";

export const QuestionnairesGamesModal = ({
  isOpen,
  setIsOpen,
  questionnairesGames,
}) => {
  return (
    <Modal show={isOpen} onHide={() => setIsOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Jugadores del cuestionario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {questionnairesGames?.length > 0 ? (
              questionnairesGames?.map((game) => (
                <tr key={game._id}>
                  <td>{game.user.name}</td>
                  <td>{game.user.lastname}</td>
                  <td>{game.score}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} style={{ textAlign: "center" }}>
                  Sin usuarios registrados
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsOpen(false)}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
