import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface NavActionProps {
  to: string;
  icon: React.ReactNode;
}

const NavAction: React.FC<NavActionProps> = ({ to, icon }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames({ [styles.active]: isActive })}
    >
      {icon}
    </NavLink>
  );
};

export default NavAction;
