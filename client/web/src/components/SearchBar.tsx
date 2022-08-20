import React from "react";
import { FaSearch } from "react-icons/fa";

import styles from "./searchbar.module.scss";

export const SearchBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <button>
        <FaSearch />
      </button>
      <input type="text" />
    </div>
  );
};
