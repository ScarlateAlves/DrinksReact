import React, { Component } from 'react'
import "./Forms.css"
import Button from "../Button/Button";
export default class Forms extends Component {
    render() {
        return (
          <div className="form">
          <div className="caixasDiv">
            <label className="label">Nome</label>
            <input
              type="text"
              className="caixasInputs"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="caixasDiv">
            <label  className="label">Email</label>
            <input
              type="email"
              className="caixasInputs"
              placeholder="exemple@gmail.com"
            />
          </div>
          <div className="caixasDiv">
            <label  className="label">Mensagem</label>
            <textarea
              className="caixaTexto"
              placeholder="Deixe sua mensagem"
            ></textarea>
          </div>
             <Button>Enviar</Button>
        </div>
         
        )
    }
}
