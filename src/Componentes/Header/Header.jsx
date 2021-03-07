import React, { Component } from 'react'
import "./Header.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

export default class Cabecalho extends Component {
    render() {
        return (
            <header className="bodyCabecalho">
              <nav className="navCabecalho">
                  <Link className="nomesCabecalho" to="/drinks">Drinks</Link>
                  <Link className="nomesCabecalho" to="/sobre">Sobre Nós</Link>
                  <Link className="nomesCabecalho titulo" to="/home">Bons Drinks</Link>
                  <Link className="nomesCabecalho" to="/nossoTime">Nosso Time</Link>
                  <Link className="nomesCabecalho" to="/contato">Contato</Link>
              </nav>
            </header>
        )
    }
}
