import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookie from "js-cookie";

// Pages import
import LandingScreen from "./containers/LandingScreen";
import HomeScreen from "./containers/HomeScreen.js";
import ImageScreen from "./containers/ImageScreen";
import TextScreen from "./containers/TextScreen";
import BioScreen from "./containers/BioScreen";
import SelectedIScreen from "./containers/SelectedImageScreen";
import SelectedTScreen from "./containers/SelectedTextScreen";
import LoginScreen from "./containers/LoginScreen";
import PostTextScreen from "./containers/PostTextScreen";
import PostImageScreen from "./containers/PostImageScreen";

// Components import
import Header from "./components/Header";
import Footer from "./components/Footer.js";

import "./App.css";

function App() {
  const [path, setPath] = useState("/");
  console.log(path);

  const token = Cookie.get("token");
  const [user, setUser] = useState({ token: token });
  const [modalLogin, setModalLogin] = useState(false);
  const [post, setPost] = useState("");
  //   console.log(user);
  console.log(post);

  return (
    <Router>
      {modalLogin && (
        <LoginScreen
          setModalLogin={setModalLogin}
          setUser={setUser}
          user={user}
        />
      )}
      {path !== "/" && (
        <Header
          setPath={setPath}
          setModalLogin={setModalLogin}
          setUser={setUser}
          setPost={setPost}
        />
      )}

      <Switch>
        {post === "text" && <PostTextScreen setPost={setPost} />}
        {post === "image" && <PostImageScreen setPost={setPost} />}

        {/* <Route path="/publish">
          <PostTextScreen setPost={setPost} />
        </Route> */}
        <Route path="/bio">
          <BioScreen />
        </Route>
        <Route path="/text">
          <TextScreen />
        </Route>
        <Route path="/selected-text/:id">
          <SelectedTScreen />
        </Route>
        <Route path="/selected-image/:id">
          <SelectedIScreen />
        </Route>
        <Route path="/image">
          <ImageScreen />
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
