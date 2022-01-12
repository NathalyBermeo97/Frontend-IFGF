import React from "react";
import styles from "../styles/indexHome.module.css";
import NavbarHome from "./FinalUserNavbar";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

export const FinalUserLayout = ({ children }) => {
  return (
    <div className={styles.body}>
      <NavbarHome />
      <div>
        <Container>
          {children}
        </Container>
      </div>
      <Footer />
    </div>
  );
};
