import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useUserContext();
  console.log(rest);
  return (
    <Route
      {...rest}
      render={() => {
        return myUser ? children : <Redirect to="/home"></Redirect>;
      }}
    ></Route>
  );
};

export default PrivateRoute;
