import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages import
import HomeScreen from "./containers/HomeScreen/HomeScreen.js";
import ImageScreen from "./containers/ImageScreen/ImageScreen";
import TextScreen from "./containers/TextScreen/TextScreen";
import BioScreen from "./containers/BioScreen/BioScreen";

// Components import
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.js";

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
