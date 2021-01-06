import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./context/GlobalContext";
import { DataProvider } from "./context/DataContext";
import { FilterProvider } from "./context/filter_context";

ReactDOM.render(
  <AppProvider>
    <DataProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </DataProvider>
  </AppProvider>,

  document.getElementById("root")
);
