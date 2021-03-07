import React, { Component } from 'react'
import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="drinks">
                <div className="imgDiv" style={{backgroundImage: "url(/img/bg-bons-drinks.jpg)"}}>
                    <h1 className="h1 titulo">Bons Drinks</h1>
                 </div>
            </div>
        )
    }
}
