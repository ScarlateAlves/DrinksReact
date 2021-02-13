import React, { Component } from 'react'
import "./Cabecalho.css";

export default class Cabecalho extends Component {
    render() {
        return (
            <div className="bodyCabecalho">
              <nav className="navCabecalho">
                  <a className="nomesCabecalho" href="">Drinks</a>
                  <a className="nomesCabecalho" href="">Sobre Nós</a>
                  <a className="nomesCabecalho" href="">Bons Drinks</a>
                  <a className="nomesCabecalho" href="">Nosso Time</a>
                  <a className="nomesCabecalho" href="">Contato</a>
              </nav>
            </div>
        )
    }
}
