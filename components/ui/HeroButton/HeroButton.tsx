import React from "react";
import styles from "./HeroButton.module.css";

interface ButtonProps {
  children: React.ReactNode;
  link?: string;
  filled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  link,
  filled = true,
  onClick,
}) => {
  const buttonContent = link ? (
    <a href={link} target={link.startsWith("http") ? "_blank" : "_self"}>
      {children}
    </a>
  ) : (
    children
  );

  return (
    <button
      className={filled ? styles.fill : styles.outline}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
