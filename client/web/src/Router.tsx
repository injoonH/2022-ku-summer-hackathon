import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AppLayout } from "@/layouts";
import { Home, NewsPage, MeetingPage, NotFound } from "@/pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/home" replace={true} />} />
        <Route path="/" element={<AppLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="card-news" element={<NewsPage />} />
          <Route path="meeting" element={<MeetingPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
