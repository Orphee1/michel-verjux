import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./context/GlobalContext";
import { DataProvider } from "./context/DataContext";

ReactDOM.render(
  <AppProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </AppProvider>,

  document.getElementById("root")
);
