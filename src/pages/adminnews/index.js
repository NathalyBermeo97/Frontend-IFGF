import React, { Component, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Navbaradmin from "../../components/Navbaradmin";
import MenuAdmin from "../../components/MenuAdmin";
import { withPrivate } from "../../hocs/withPrivate";
import { useRouter } from "next/router";
const url = "https://backend-ifgf.herokuapp.com/api/news";

const initialState = {
  data: [],
  modalInsertar: false,
  modalEliminar: false,
  form: {
    id: "",
    title: "",
    description: "",
    imgURL: "",
  },
};

function News() {
  const [state, setState] = useState(initialState);
  const router = useRouter()
  console.log(router)

  const peticionGet = () => {
    axios
      .get(url)
      .then((response) => {
        setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const peticionPost = () => {
    axios
      .post(url, state.form)
      .then((response) => {
        modalInsertar();
        peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const peticionPut = () => {
    axios.put(url + state.form.id, state.form).then((response) => {
      modalInsertar();
      peticionGet();
    });
  };

  const peticionDelete = () => {
    axios.delete(url + state.form.id).then((response) => {
      setState({ modalEliminar: false });
      peticionGet();
    });
  };

  const modalInsertar = () => {
    setState({ modalInsertar: !state.modalInsertar });
  };

  const seleccionarNoticia = (news) => {
    setState({
      tipoModal: "actualizar",
      form: {
        title: news.title,
        description: news.description,
      },
    });
  };

  const handleChange = (e) => {
    e.persist();
    setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(state.form);
  };

  const { form } = state;
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
                  setState({ form: null, tipoModal: "insertar" });
                  modalInsertar();
                }}
              >
                Agregar Noticia
              </button>
              <br />
              <br />
              <table className="table">
                <thead>
                  <tr>
                    <th>Titulo</th>
                    <th>Descripción</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {state.data.map((news) => {
                    return (
                      <tr>
                        <td>{news.title}</td>
                        <td>{news.description}</td>
                        <th>
                          <img src={news.imgURL} />
                        </th>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              seleccionarNoticia(news);
                              modalInsertar();
                            }}
                          >
                            Editar
                          </button>
                          {"   "}
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              seleccionarNoticia(news);
                              setState({ modalEliminar: true });
                            }}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* <Modal isOpen={this.state.modalInsertar}>
                                <ModalHeader style={{display: 'block'}}>
                                    <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                                </ModalHeader>
                                <ModalBody>
                                    <div className="form-group">
                                        <label htmlFor="title">Titulo</label>
                                        <input className="form-control" type="text" name="title" id="title" onChange={this.handleChange} value={form?form.title: ''}/>
                                        <br />
                                        <label htmlFor="description">Descripcion</label>
                                        <textarea className="form-control" type="text" name="description" id="description" rows="3" onChange={this.handleChange} value={form?form.description: ''}></textarea>
                                        <br />
                                        <label htmlFor="imgURL">Imagen</label>
                                        <input type="file" name="imgURL"  accept="image/gif, image/jpeg, image/png" className="form-control"   id="imgURL" onChange={this.handleChange} value={form?form.imgURL: ''}/>
                                        <br />

                                    </div>
                                </ModalBody>

                                <ModalFooter>
                                    {this.state.tipoModal=='insertar'?
                                        <button className="btn btn-primary" onClick={()=>this.peticionPost()}>
                                            Insertar
                                        </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                                            Actualizar
                                        </button>
                                    }
                                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                                </ModalFooter>
                            </Modal>


                            <Modal isOpen={this.state.modalEliminar}>
                                <ModalBody>
                                    Estás seguro que deseas eliminar la noticia {form && form.nombre}
                                </ModalBody>
                                <ModalFooter>
                                    <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
                                    <button className="btn btn-dark" onClick={()=>this.setState({modalEliminar: false})}>No</button>
                                </ModalFooter>
                            </Modal> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default News;
