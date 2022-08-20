import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";

export const AppLayout: React.FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </>
  );
};
