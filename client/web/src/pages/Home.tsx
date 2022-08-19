import React from "react";

import styles from "@/pages/home.module.scss";

const Home: React.FC<{}> = () => {
  return (
    <div className={styles.home}>
      <span>ZOOM Link</span>
      <a href="https://kaist.zoom.us/j/83530978396?pwd=azdzaUUzY3lwUlZTREtuUVV2VzFjUT09">
        KAIST System Programming(CS230)
      </a>
      <span>Password</span>
      <span>p@sSw0rd1234</span>
    </div>
  );
};

export default Home;
