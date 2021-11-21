import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import imageError from "../../assets/images/error-404.svg";

const ErrorPage = () => {
  useEffect(() => {
    document.title = `Voltox Page not found`;
  });
  return (
    <div className="error">
      <div className="error-image">
        <img alt="error-404-image" src={imageError} />
      </div>
      <div className="error-content">
        <h1>page not found</h1>
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
