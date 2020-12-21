import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookie from "js-cookie";
import "./main.css"

// Pages import
import { BiblioScreen, BioScreen, ErrorScreen, HomeScreen, LandingScreen, ImageScreen, 
        SelectedIScreen, SelectedTScreen,
        TextScreen} from "./containers";

// Components import
import {Footer, Header, ModalLogin, SideBar} from "./components";

function App() {
       
  const token = Cookie.get("token");
  const [user, setUser] = useState({ token: token });
  const [modalLogin, setModalLogin] = useState(false);

const toggleModalLogin = () => {
        setModalLogin(!modalLogin)
}
  
  return (
    <Router>
                 <Header
        toggleModalLogin={toggleModalLogin}
              setUser={setUser}
            />
<SideBar />
      {modalLogin && (
        <ModalLogin
          toggleModalLogin={toggleModalLogin}
          setUser={setUser}
          user={user}
        />
      )}
        <Switch>
          <Route path="/bio/">
            <BioScreen />
          </Route>
          <Route path="/biblio/"  >
                  <BiblioScreen />
          </Route>
          <Route path="/text/">
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
          <Route exact path="/">
            <LandingScreen />
          </Route>
          <Route path="*">
            <ErrorScreen />
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
