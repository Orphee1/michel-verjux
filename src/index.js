import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { DataProvider } from "./context/DataContext";
import { FilterProvider } from "./context/filter_context";
import { ToggleProvider } from "./context/toggle_context";
import { UserProvider } from "./context/user_context";

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    //     redirectUri={window.location.origin}
    redirectUri="https://michel-verjux.com/home"
    //     redirectUri={process.env.REACT_APP_AUTH0_REDIRECT_URI}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ToggleProvider>
        <DataProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </DataProvider>
      </ToggleProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
