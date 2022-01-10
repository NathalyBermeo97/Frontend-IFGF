import { withPrivate } from "../../../hocs/withPrivate";
import { useState } from "react";
import { useDonation } from "../../../hooks/useDonation";
import styles from "../styles.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CreateClothesDonationModal } from "../../../components/CreateClothesDonationModal";
import { ERROR_MESSAGES, SERVER_RESPONSE } from "../../../constants/inidex";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

const donationsItemSchema = yup.object().shape({
  type: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("tipo"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  delivery: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("entrega"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  direction: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("dirección"))
    .min(25, ERROR_MESSAGES.MIN_STRING('dirección', 25))
    .max(60, ERROR_MESSAGES.MAX_STRING('dirección', 60))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  dateDelivery: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("fecha de entrega"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  description: yup
    .string()
});

const DonationsPage = () => {
  const { donations, setDonations, createDonation } = useDonation();
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
    setValue,
    watch
  } = useForm({
    defaultValues: {
      type: "",
      delivery: "",
      direction: "",
      dateDelivery: "",
      description: "",
    },
    resolver: yupResolver(donationsItemSchema),
  });

  const handleModalState = () => {
    setShowModal(true)
    setValue('type', 'ropa')
    setValue('delivery', 'Delivery in Church via some service')
  }

  console.log({ errors });
  const onSubmit = (data) => {
    const description = data.description.trim()
    const direction = data.direction === 'no direction no direction ' ? '' : data.direction
    // console.log('data', {...data, direction, description});
    const parsedData = {...data, direction, description}
    console.log({parsedData})
    createDonation(parsedData).then((d) => {
      console.log({d})
      // if (message === SERVER_RESPONSE.NEWS_ITEM_CREATED) {
      //   //UPDATE THIS WITH THE NEW RESPONSE RATHER THAN THE MESSAGE
      //   setDonations((prevState) => [
      //     ...prevState,
      //     { _id: Math.floor(Math.random() * 1000000000000), ...data },
      //   ]);
      //   setShowCreateDonationsItemModal(false);
      //   reset();
      // }
    });
  };

  const handleTestSubmit = (e) => {
    e.preventDefault()
    console.log(e.currentTarget.seleccionar.value)
  }

  return (
    <>
      <div className={styles.events}>
        <h1 className={styles.section}>DONACIÓN DE ROPA</h1>
        <div className={styles.linea}></div>
      </div>
      <Container className={styles.donations}>
        <Row>
          <Col xs={12}>
            <div>
              <div>
                <h4>Haz tu donación voluntaria de ROPA </h4>
              </div>

              <p>
                Hay personas que viven en absoluta pobreza que necesitan de tu
                colaboración, puedes ayudarlos donando cualquier tipo de ropa.
              </p>
              <div>
                <img
                  className={styles.ubicacion}
                  width="300px"
                  src="https://www.caritas.org.mx/wp-content/uploads/2020/08/donde-donar-ropa-usada-1024x768.jpg"
                />
              </div>
            </div>

            <div>
              <div>
                <br />
                <h4>Visita NUESTRAS INSTALACIONES</h4>
              </div>

              <p>
                Puedes visitar nuestras instalaciones para mayor información y
                para realizar cualquier tipo de pago o donación.
              </p>

              <div>
                <iframe
                  className={styles.ubicacion}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7643285934228!2d-78.45924674973766!3d-0.2980747997814547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d599082e934a23%3A0xe9afca3fb0d1c771!2sIFGF%20Quito!5e0!3m2!1ses!2sec!4v1637617369934!5m2!1ses!2sec"
                  width="300"
                  height="150"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <br />

            <Button
              variant="outline-primary"
              size="sm"
              onClick={handleModalState}
            >
              Donar
            </Button>
          </Col>
        </Row>
      </Container>

      <CreateClothesDonationModal
        showModal={showModal}
        setShowModal={setShowModal}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        clearErrors={clearErrors}
        reset={reset}
        watch={watch}
        setValue={setValue}
      />

      {/* <form onSubmit={handleTestSubmit}>
        <input type='text' name='name' placeholder="name"></input>
        <input ref={(s) => console.log({'si': s.value})} type='text' name='lastName' placeholder='lastName'></input>
        <select name="seleccionar" onChange={(e) => console.log(e.target.value)} ref={(ref) => console.log('ref', ref.value)}>
           <option value={1}>option 1</option>
           <option value={2}>option 2</option>
           <option value={3}>option 3</option>
        </select>
        <button>TEST</button>
      </form> */}
    </>
  );
};

export default withPrivate(DonationsPage);
