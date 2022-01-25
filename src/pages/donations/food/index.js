import { withPrivate } from "../../../hocs/withPrivate";
import { useState } from "react";
import { useDonation } from "../../../hooks/useDonation";
import styles from "../styles.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ERROR_MESSAGES } from "../../../constants/inidex";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { CreateDonationModal } from "../../../components/CreateDonationModal";

const donationsItemSchema = yup.object().shape({
  description: yup.string(),
  type: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("descripción"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  delivery: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("entrega"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  direction: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("dirección"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  date: yup
    .date()
    .typeError(ERROR_MESSAGES.DATE)
    .required(ERROR_MESSAGES.REQUIRED("fecha de entrega")),
});

const DonationsPage = () => {
  const { setDonations, createDonation } = useDonation();
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      description: "",
      type: "",
      delivery: "",
      address: "",
      date: "",
    },
    resolver: yupResolver(donationsItemSchema),
  });

  const handleModalState = () => {
    setShowModal(true);
    setValue("type", "comida");
    setValue("delivery", "Delivery in Church");
  };

  const onSubmit = (data) => {
    const description = data.description.trim();
    const address =
      data.address === "no direction no direction " ? "" : data.address;
    const date = new Date(data.date).toISOString();
    const parsedData = { ...data, address, description, date };
    createDonation(parsedData).then((newDonation) => {
      setDonations((prevState) => [...prevState, newDonation]);
      setShowModal(false);
      reset();
    });
  };

  return (
    <>
      <div className={styles.events}>
        <h1 className={styles.section}>DONACIÓN DE COMIDA</h1>
        <div className={styles.linea}></div>
      </div>
      <Container>
        <Row>
          <Col xs={6}>
            <div className={styles.info}>
              <div>
                <h4>Haz tu donación voluntaria de ALIMENTOS </h4>
              </div>

              <p>
                Hay personas que viven en absoluta pobreza que necesitan de tu
                colaboración, puedes ayudarlos donando cualquier tipo de
                alimento.
              </p>
              <div>
                <img
                  className={styles.ubicacion}
                  width="300px"
                  src="https://st.depositphotos.com/1177973/4836/i/600/depositphotos_48368247-stock-photo-volunteers-with-donation-box-with.jpg"
                />
              </div>
            </div>
          </Col>
            <Col xs={6}>

            <div className={styles.info}>
              <div>

                <h4>Visita NUESTRAS INSTALACIONES</h4>
              </div>

              <p>
                Puedes visitar nuestras instalaciones para mayor información y
                para realizar cualquier tipo de pago o donación.
              </p>

              <div>
                <br/>
                <iframe
                  className={styles.ubicacion}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7643285934228!2d-78.45924674973766!3d-0.2980747997814547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d599082e934a23%3A0xe9afca3fb0d1c771!2sIFGF%20Quito!5e0!3m2!1ses!2sec!4v1637617369934!5m2!1ses!2sec"
                  width="500"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>


          </Col>
        </Row>
        <div className={styles.button}>
          <Button
              variant="primary"
              size="sm"
              onClick={handleModalState}
          >
            Donar comida
          </Button>
        </div>
      </Container>

      <CreateDonationModal
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
        donationType={"comida"}
      />
    </>
  );
};

export default withPrivate(DonationsPage);
