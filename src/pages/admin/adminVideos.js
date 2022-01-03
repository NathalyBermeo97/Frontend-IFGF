import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { withPrivate } from "../../hocs/withPrivate";
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Modal,
  Button,
  TextField,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
const baseUrl = "https://backend-ifgf.herokuapp.com/api/videos/";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
}));

function AdminVideos() {
  const styles = useStyles();
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [consolaSeleccionada, setConsolaSeleccionada] = useState({
    title: "",
    description: "",
    type: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsolaSeleccionada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(consolaSeleccionada);
  };

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  const peticionPost = async () => {
    await axios.post(baseUrl, consolaSeleccionada).then((response) => {
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    });
  };

  const peticionPut = async () => {
    await axios
      .put(baseUrl + consolaSeleccionada._id, consolaSeleccionada)
      .then((response) => {
        let dataNueva = data;
        dataNueva.map((consola) => {
          if (consolaSeleccionada._id === consola._id) {
            consola.title = consolaSeleccionada.title;
            consola.description = consolaSeleccionada.description;
            consola.type = consolaSeleccionada.type;
            consola.url = consolaSeleccionada.url;
          }
        });
        setData(dataNueva);
        abrirCerrarModalEditar();
      });
  };

  const peticionDelete = async () => {
    await axios.delete(baseUrl + consolaSeleccionada._id).then((response) => {
      setData(
        data.filter((consola) => consola._id !== consolaSeleccionada._id)
      );
      abrirCerrarModalEliminar();
    });
  };

  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  const seleccionarConsola = (consola, caso) => {
    setConsolaSeleccionada(consola);
    caso === "Editar" ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  };

  useEffect(async () => {
    await peticionGet();
  }, []);

  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Agregar Nueva Consola</h3>
      <TextField
        name="title"
        className={styles.inputMaterial}
        label="Titulo"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="description"
        className={styles.inputMaterial}
        label="Descripcion"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="type"
        className={styles.inputMaterial}
        label="Tipo"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="url"
        className={styles.inputMaterial}
        label="Url"
        onChange={handleChange}
      />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => peticionPost()}>
          Insertar
        </Button>
        <Button onClick={() => abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  );

  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar Consola</h3>
      <TextField
        name="title"
        className={styles.inputMaterial}
        label="Titulo"
        onChange={handleChange}
        value={consolaSeleccionada && consolaSeleccionada.title}
      />
      <br />
      <TextField
        name="description"
        className={styles.inputMaterial}
        label="Descripcion"
        onChange={handleChange}
        value={consolaSeleccionada && consolaSeleccionada.description}
      />
      <br />
      <TextField
        name="type"
        className={styles.inputMaterial}
        label="Tipo"
        onChange={handleChange}
        value={consolaSeleccionada && consolaSeleccionada.type}
      />
      <br />
      <TextField
        name="url"
        className={styles.inputMaterial}
        label="Url"
        onChange={handleChange}
        value={consolaSeleccionada && consolaSeleccionada.url}
      />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => peticionPut()}>
          Editar
        </Button>
        <Button onClick={() => abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  );

  const bodyEliminar = (
    <div className={styles.modal}>
      <p>
        Estás seguro que deseas eliminar el video {" "}
        <b>{consolaSeleccionada && consolaSeleccionada.title}</b> ?{" "}
      </p>
      <div align="right">
        <Button color="secondary" onClick={() => peticionDelete()}>
          Sí
        </Button>
        <Button onClick={() => abrirCerrarModalEliminar()}>No</Button>
      </div>
    </div>
  );

  return (
    <div className="App">
      <br />
      <Button onClick={() => abrirCerrarModalInsertar()}>Insertar</Button>
      <br />
      <br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Titulo</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Url</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((consola) => (
              <TableRow key={consola._id}>
                <TableCell>{consola.title}</TableCell>
                <TableCell>{consola.description}</TableCell>
                <TableCell>{consola.type}</TableCell>
                <TableCell>{consola.url}</TableCell>
                <TableCell>
                  <Edit
                    className={styles.iconos}
                    onClick={() => seleccionarConsola(consola, "Editar")}
                  />

                  <Delete
                    className={styles.iconos}
                    onClick={() => seleccionarConsola(consola, "Eliminar")}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={modalInsertar} onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
      </Modal>

      <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>

      <Modal open={modalEliminar} onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
      </Modal>
    </div>
  );
}

export default withPrivate(AdminVideos);
