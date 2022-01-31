import React from "react";
import styles from './style.module.css'

export const Spinner = () => {
  return (
    <div >
      <div className={styles.loader}>Loading...</div>
    </div>
  );
};
