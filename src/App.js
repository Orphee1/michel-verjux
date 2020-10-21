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
import PostBiblioScreen from "./containers/PostBiblioScreen";

// Components import
import Header from "./components/Header";
import Footer from "./components/Footer.js";

// Context import
import { ThemeContextProvider } from "./context/ThemeContext";

import "./App.css";

function App() {
  const token = Cookie.get("token");
  const [user, setUser] = useState({ token: token });
  const [modalLogin, setModalLogin] = useState(false);
  const [post, setPost] = useState("");

  return (
    <Router>
      {modalLogin && (
        <LoginScreen
          setModalLogin={setModalLogin}
          setUser={setUser}
          user={user}
        />
      )}
      <ThemeContextProvider>
        <Switch>
          {post === "text" && <PostTextScreen setPost={setPost} />}
          {post === "image" && <PostImageScreen setPost={setPost} />}
          {post === "biblio" && <PostBiblioScreen setPost={setPost} />}

          <Route path="/bio">
            <Header
              setModalLogin={setModalLogin}
              setUser={setUser}
              setPost={setPost}
            />
            <BioScreen />
            <Footer />
          </Route>
          <Route path="/text">
            <Header
              setModalLogin={setModalLogin}
              setUser={setUser}
              setPost={setPost}
            />
            <TextScreen />
            <Footer />
          </Route>
          <Route path="/selected-text/:id">
            <Header
              setModalLogin={setModalLogin}
              setUser={setUser}
              setPost={setPost}
            />
            <SelectedTScreen />
            <Footer />
          </Route>
          <Route path="/selected-image/:id">
            <Header
              setModalLogin={setModalLogin}
              setUser={setUser}
              setPost={setPost}
            />
            <SelectedIScreen />
            <Footer />
          </Route>
          <Route path="/image">
            <Header
              setModalLogin={setModalLogin}
              setUser={setUser}
              setPost={setPost}
            />
            <ImageScreen />
            <Footer />
          </Route>
          <Route path="/home">
            <Header
              setModalLogin={setModalLogin}
              setUser={setUser}
              setPost={setPost}
            />
            <HomeScreen />
            <Footer />
          </Route>
          <Route path="/">
            <LandingScreen />
          </Route>
        </Switch>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
