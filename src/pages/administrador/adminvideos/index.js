import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Navbaradmin from "../../../components/Navbaradmin";
import MenuAdmin from "../../../components/MenuAdmin";
const url = "https://backend-ifgf.herokuapp.com/api/videos";

class Videos extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalEliminar: false,
    form: {
      title: "",
      description: "",
      type: "",
      URL: "",
    },
  };

  peticionGet = () => {
    axios
      .get(url)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPost = async () => {
    delete this.state.form.id;
    await axios
      .post(url, this.state.form)
      .then((response) => {
        this.modalInsertar();
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPut = () => {
    axios.put(url + this.state.form.id, this.state.form).then((response) => {
      this.modalInsertar();
      this.peticionGet();
    });
  };

  peticionDelete = () => {
    axios.delete(url + this.state.form.id).then((response) => {
      this.setState({ modalEliminar: false });
      this.peticionGet();
    });
  };

  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  };

  seleccionarVideo = (videos) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        title: videos.title,
        description: videos.description,
        type: videos.type,
        URL: videos.URL,
      },
    });
  };

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    const { form } = this.state;
    return (
      <div>
        <Navbaradmin />
        <div>
          <div className="row">
            <div className="col-lg-2">
              <MenuAdmin />
            </div>
            <div className="col-lg-10 ">
              <div className="App">
                <br />
                <br />
                <br />
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.setState({ form: null, tipoModal: "insertar" });
                    this.modalInsertar();
                  }}
                >
                  Agregar Video
                </button>
                <br />
                <br />
                <table className="table">
                  <thead>
                    <tr>
                      <th>Titulo</th>
                      <th>Descripción</th>
                      <th>Tipo</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((videos) => {
                      return (
                        <tr>
                          <td>{videos.title}</td>
                          <td>{videos.description}</td>
                          <td>{videos.type}</td>
                          <td>{videos.URL}</td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                this.seleccionarVideo(videos);
                                this.modalInsertar();
                              }}
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            {"   "}
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                this.seleccionarVideo(videos);
                                this.setState({ modalEliminar: true });
                              }}
                            >
                              <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <Modal isOpen={this.state.modalInsertar}>
                  <ModalHeader style={{ display: "block" }}>
                    <span
                      style={{ float: "right" }}
                      onClick={() => this.modalInsertar()}
                    >
                      x
                    </span>
                  </ModalHeader>
                  <ModalBody>
                    <div className="form-group">
                      <label htmlFor="title">Titulo</label>
                      <input
                        className="form-control"
                        type="text"
                        name="title"
                        id="title"
                        onChange={this.handleChange}
                        value={form ? form.title : ""}
                      />
                      <br />
                      <label htmlFor="description">Descripcion</label>
                      <textarea
                        className="form-control"
                        type="text"
                        name="description"
                        id="description"
                        rows="3"
                        onChange={this.handleChange}
                        value={form ? form.description : ""}
                      ></textarea>
                      <br />
                      <label htmlFor="title">Tipo</label>
                      <input
                        className="form-control"
                        type="text"
                        name="type"
                        id="type"
                        onChange={this.handleChange}
                        value={form ? form.type : ""}
                      />
                      <br />
                      <label htmlFor="imgURL">URL</label>
                      <input
                        type="url"
                        name="url"
                        id="url"
                        placeholder="Enter URL YouTube"
                        pattern="https://.*"
                        size="60"
                        required
                        onChange={this.handleChange}
                        value={form ? form.URL : ""}
                      />
                      <br />
                    </div>
                  </ModalBody>

                  <ModalFooter>
                    {this.state.tipoModal == "insertar" ? (
                      <button
                        className="btn btn-primary"
                        onClick={() => this.peticionPost()}
                      >
                        Insertar
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={() => this.peticionPut()}
                      >
                        Actualizar
                      </button>
                    )}
                    <button
                      className="btn btn-danger"
                      onClick={() => this.modalInsertar()}
                    >
                      Cancelar
                    </button>
                  </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalEliminar}>
                  <ModalBody>
                    Estás seguro que deseas eliminar el video{" "}
                    {form && form.title} ?
                  </ModalBody>
                  <ModalFooter>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.peticionDelete()}
                    >
                      Sí
                    </button>
                    <button
                      className="btn btn-dark"
                      onClick={() => this.setState({ modalEliminar: false })}
                    >
                      No
                    </button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Videos;
