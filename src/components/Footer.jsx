import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ completed, total }) => {
  return (
    <div className={styles.footer}>
      <span>
        Completed: {completed} - Total: {total}
      </span>
    </div>
  );
};

export default Footer;
