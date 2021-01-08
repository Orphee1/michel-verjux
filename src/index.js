import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";
import { AppProvider } from "./context/GlobalContext";
import { DataProvider } from "./context/DataContext";
import { FilterProvider } from "./context/filter_context";

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <AppProvider>
        <DataProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </DataProvider>
      </AppProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
