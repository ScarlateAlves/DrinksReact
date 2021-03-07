import React, { Component } from 'react'
import "./Contato.css"


export default class PagContato extends Component {
    render() {
        return (
            <div className="body">
                 <h1 className="tituloContato">Contato</h1>
                 <div className="corpoDois">
                  <div className="bloco">
                      <img src="img/contact-pic.jpg"></img>
                  </div>
                  <div  className="bloco">
                  {this.props.children}
                  </div>
                 </div>
            </div>
        )
    }
}
