import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";

import styles from "./styles.module.scss";

export const AppLayout: React.FC = () => {
  return (
    <>
      <main className={styles.main}>
        <Outlet />
      </main>
      {/* <Navigation /> */}
    </>
  );
};
