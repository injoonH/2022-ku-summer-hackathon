import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import NotFound from "@/pages/NotFound";
import { Home, NotFound } from "@/pages";

const Router: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
