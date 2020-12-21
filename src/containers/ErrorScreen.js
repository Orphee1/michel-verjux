import React from "react";
import { Link } from "react-router-dom";

const  ErrorScreen = () => {
  return (
    <section className="d-flex fl-col center">
      <h1>Error Page</h1>

      <Link to="/home">
        <h5>Back to Home Page</h5>
      </Link>
    </section>
  );
}

export default ErrorScreen
