import { withPrivate } from "../../../hocs/withPrivate";
import { useState } from "react";
import { useDonations } from "../../../hooks/useDonation";
import styles from "../styles.module.css";
import {Button, Col, Container, Row} from "react-bootstrap";
import { CreateFormDonationsMoneyModal } from "../../../components/CreateFormDonationsMoneyModal";
import { ERROR_MESSAGES, SERVER_RESPONSE } from "../../../constants/inidex";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";


const donationsItemSchema = yup.object().shape({
  description: yup
      .string()
      .required(ERROR_MESSAGES.REQUIRED("título"))
      .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
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
  dateDelivery: yup
      .string()
      .required(ERROR_MESSAGES.REQUIRED("fecha de entrega"))
      .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
});

const DonationsPage = () => {
  const {donations, setDonations, createDonationsItem } = useDonations();
  const [showModal, setShowModal] = useState(false);
  const [showCreateDonationsItemModal, setShowCreateDonationsItemModal] = useState(false);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      description: "",
      type:"",
      delivery: "",
      direction:"",
      dateDelivery: "",

    },
    resolver: yupResolver(donationsItemSchema),
  });


  console.log({ errors });
  const onSubmit = (data) => {
    console.log(data);
    createDonationsItem(data).then((message) => {
      if (message === SERVER_RESPONSE.NEWS_ITEM_CREATED) {
        //     //UPDATE THIS WITH THE NEW RESPONSE RATHER THAN THE MESSAGE
        setDonations((prevState) => [
          ...prevState,
          { _id: Math.floor(Math.random() * 1000000000000), ...data },
        ]);
        setShowCreateDonationsItemModal(false);
        reset();
      }
    });
    {/*setNews((prevState) => [
      ...prevState,
      { _id: Math.floor(Math.random() * 1000000000000), ...data },
    ]);
    setShowCreateNewsItemModal(false);
    reset();*/}
  };



  return (
      <>
        <div className={styles.events}>
          <h1 className={styles.section}>DONACIÓN ECONÓMICA</h1>
          <div className={styles.linea}></div>
        </div>
        <Container className={styles.donations} >
          <Row>
            <Col xs={12}>
              <div >
                <div>
                  <h4>Haz tu donación voluntaria ECONOMICA </h4>
                </div>

                <p>
                  Puedes realizar una donación económica mediante transferencia bancaria.
                </p>
                <div>
                  <img
                      className={styles.ubicacion}
                      width="300px"
                      src="https://www.bbva.com/wp-content/uploads/2016/10/crowdfunding1.jpg"
                  />
                </div>
              </div>

              <div >
                <div>
                  <br/>
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

                <p className={styles.bancos}>Cuenta corriente</p>
                <p className={styles.bancos}>17265180</p>
              </div>

              <br/>

              <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => setShowCreateDonationsItemModal(true)}
              >
                Donar
              </Button>
            </Col>
          </Row>
        </Container>



        <CreateFormDonationsMoneyModal
            showModal={showCreateDonationsItemModal}
            setShowModal={setShowCreateDonationsItemModal}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
            clearErrors={clearErrors}
        />

      </>
  );
};

export default withPrivate(DonationsPage);
