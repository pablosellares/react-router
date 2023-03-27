import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import LayoutPublic from "./layouts/LayoutPublic";

import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/BlogPost";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<LayoutPublic />} path="/">
          <Route element={<Inicio />} index></Route>
          <Route element={<Contacto />} path="/contacto"></Route>
          <Route element={<Blog />} path="/blog"></Route>
          <Route element={<BlogPost />} path="/blog/:id"></Route>
        </Route>
        <Route element={<NotFound />} path="*"></Route>
      </Routes>
    </>
  );
};

export default App;
