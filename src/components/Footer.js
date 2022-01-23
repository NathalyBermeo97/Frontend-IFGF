import React from "react";
import styles from "../styles/footer.module.css";
import {FacebookOutlined, YoutubeOutlined,WhatsAppOutlined} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <div className={styles.footer}>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-white text-center  mb-4">
                  <i className="fas fa-gem me-3"></i>Conócenos
                </h6>
                <div className="text-white text-center">
                  <p>
                    NUESTRA MISIÓN ES LA GENTE
                    (Conectados con Dios & Haciendo Discípulos)
                    Trayendo lo Sobrenatural de Dios a la Tierra.
                  </p>
                </div>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-white text-center fw-bold mb-4">
                  Visítanos
                </h6>
                <div className="text-white text-center">
                  <p>
                   Dirección: Av Ilaló, y, Quito 170804
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-white text-center fw-bold mb-4">
                  Contáctanos en nuestras redes sociales
                </h6>
                <div className="text-white text-center">
                  <a href='https://web.whatsapp.com/' target="_blank" rel="noopener noreferrer"><WhatsAppOutlined/></a>
                  <a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer" style={{margin:"10px"}}><FacebookOutlined/></a>
                  <a href='https://mail.google.com/' target="_blank" rel="noopener noreferrer"><YoutubeOutlined/></a>

                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4 bg-dark text-white">
          <div className={styles.footerr}>
            © 2021 IGLESIA IFGF ECUADOR. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
