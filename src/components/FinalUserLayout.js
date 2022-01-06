import React from "react";
import styles from "../styles/indexHome.module.css";
import NavbarHome from "./FinalUserNavbar";
import Carousel from "../components/Carousel";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

export const FinalUserLayout = ({ children }) => {
  return (
    <body className={styles.body}>
      <NavbarHome />
      <div>
        <Container>
          {children}
        </Container>
      </div>
      <Footer />
    </body>
  );
};
