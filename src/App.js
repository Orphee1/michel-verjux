import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages import
import LandingScreen from "./containers/LandingScreen";
import HomeScreen from "./containers/HomeScreen.js";
import ImageScreen from "./containers/ImageScreen";
import TextScreen from "./containers/TextScreen";
import BioScreen from "./containers/BioScreen";
import SelectedIScreen from "./containers/SelectedImageScreen";
import SelectedTScreen from "./containers/SelectedTextScreen";

// Components import
import Header from "./components/Header";
import Footer from "./components/Footer.js";

import "./App.css";

function App() {
  const [path, setPath] = useState("/");
  const [imageSelected, setImageSelected] = useState();
  const [textSelected, setTextSelected] = useState();

  console.log(path);

  return (
    <Router>
      {path !== "/" && <Header path={path} setPath={setPath} />}

      <Switch>
        <Route path="/bio">
          <BioScreen />
        </Route>
        <Route path="/text">
          <TextScreen
            textSelected={textSelected}
            setTextSelected={setTextSelected}
          />
        </Route>
        <Route path="/selected-text">
          <SelectedTScreen textSelected={textSelected} />
        </Route>
        <Route path="/selected-image">
          <SelectedIScreen imageSelected={imageSelected} />
        </Route>
        <Route path="/image">
          <ImageScreen setImageSelected={setImageSelected} />
        </Route>
        <Route path="/home">
          <HomeScreen />
        </Route>
        <Route path="/">
          <LandingScreen path={path} setPath={setPath} />
        </Route>
      </Switch>
      {path !== "/" && <Footer />}
    </Router>
  );
}

export default App;
