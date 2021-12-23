import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Navbaradmin from "../../../components/Navbaradmin";
import MenuAdmin from "../../../components/MenuAdmin";
const url = "https://backend-ifgf.herokuapp.com/api/donations";

class Donations extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalEliminar: false,
    form: {
      name: "",
      lastname: "",
      description: "",
      type: "",
      delivery: "",
      direction: "",
      dateDelivery: "",
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

  seleccionarDonacion = (donations) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        name: donations.name,
        lastname: donations.lastname,
        description: donations.description,
        type: donations.type,
        delivery: donations.delivery,
        direction: donations.direction,
        dateDelivery: donations.dateDelivery,
        imgURL: donations.imgURL,
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
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Descripción</th>
                      <th>Tipo</th>
                      <th>Delivery</th>
                      <th>Direccion</th>
                      <th>Fecha</th>
                      <th>imagen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((donations) => {
                      return (
                        <tr>
                          <th>{donations.name}</th>
                          <th>{donations.lastName}</th>
                          <th>{donations.description}</th>
                          <th>{donations.type}</th>
                          <th>{donations.delivery}</th>
                          <th>{donations.direction}</th>
                          <th>{donations.dateDelivery}</th>
                          <th>{donations.imgURL}</th>
                          <td>
                            <button className="btn btn-primary">
                              <FontAwesomeIcon icon={faCheck} />
                            </button>
                            {"   "}
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                this.seleccionarDonacion(donations);
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

                <Modal isOpen={this.state.modalEliminar}>
                  <ModalBody>
                    Estás seguro que deseas eliminar la donacion{" "}
                    {form && form.title}
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
export default Donations;
