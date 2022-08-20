import React from "react";
import { FaGithubAlt } from "react-icons/fa";

import NavAction from "./NavAction";

import styles from "./styles.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <NavAction to="home" icon={<FaGithubAlt />} />
        <NavAction to="card-news" icon={<FaGithubAlt />} />
        <NavAction to="meeting" icon={<FaGithubAlt />} />
      </div>
    </nav>
  );
};

export default Navigation;
