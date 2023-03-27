import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="container">
        <h1>404 - NotFound</h1>
        <Link to="/" className="btn btn-dark">
          Volver al inicio
        </Link>
      </div>
    </>
  );
};

export default NotFound;
