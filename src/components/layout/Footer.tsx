//chatFooter
import React from "react";
import styles from "./Footer.module.css";

const Footer = React.memo(({ children }: { children: React.ReactNode }) => {
  return <footer className={styles.footer}>{children}</footer>;
});

export default Footer;
