import React, { useEffect } from "react";

const Alert = ({ type, msg, setAlert }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert({ show: false, type: "", msg: "" });
    }, 3000);
    return () => clearTimeout(timeOut);
  }, []);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
