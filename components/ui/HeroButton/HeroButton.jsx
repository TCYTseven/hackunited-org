import React from "react";
import styles from "./HeroButton.module.css";

const Button = ({ children, link, filled = true }) => {
  return (
    <button className={filled ? styles.fill : styles.outline}>
      <a href={`${link}`}>{children}</a>
    </button>
  );
};

export default Button;
