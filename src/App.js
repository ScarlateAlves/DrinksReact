import "./App.css";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Contato from "./Componentes/Contato/Contato";
import Home from "./Componentes/Home/Home";
import Drinks from "./Componentes/Drinks/Drinks";
import NossoTime from './Componentes/NossoTime/NossoTime'
import Sobre from "./Componentes/Sobre/Sobre"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Forms from "./Componentes/Forms/Forms";

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        <Switch>
        <Route path="/drinks">
            <Drinks />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/nossoTime">
            <NossoTime />
          </Route>
          <Route path="/contato">
            <Contato>
              <Forms />
            </Contato>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
