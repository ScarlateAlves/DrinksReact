import React from 'react'
import "./card.css"

function CardImage(props) {
    return (
        <div className="containerImage">
            <img src={props.img} alt="img" className="image"/> 
            <p  className="title">{props.children}</p>
        </div>
    )
}

export default CardImage

