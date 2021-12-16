import React from "react";
import { Grid } from "@mui/material";
import { Button } from "@material-ui/core";
import styles from "../styles/style.module.css";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-white">
      <Grid container xs={12}>
        <Grid xs={12}>
          <img
            className={styles.image1}
            src="https://lh3.googleusercontent.com/p/AF1QipNSyoM12XEx1Q9GMJDEb_-_CR5uw89PrMTgMxb_=s1280-p-no-v1"
          />
          <h1 className={styles.name1}>IGLESIA IFGF ECUADOR</h1>
        </Grid>
      </Grid>
    </nav>
  );
};
export default Header;
