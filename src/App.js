import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages import
import HomeScreen from "./containers/HomeScreen.js";
import ImageScreen from "./containers/ImageScreen";
import TextScreen from "./containers/TextScreen";
import BioScreen from "./containers/BioScreen";

// Components import
import Header from "./components/Header";
import Footer from "./components/Footer.js";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/bio">
          <BioScreen />
        </Route>
        <Route path="/text">
          <TextScreen />
        </Route>
        <Route path="/image">
          <ImageScreen />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
