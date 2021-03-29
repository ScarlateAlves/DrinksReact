import React, { Children } from 'react'

function   Button (props)  {
    return (
        <div className="caixasDiv" >
            <button type="submit" className="botao" >
            {props.children}
            </button>
        </div>
    )
}

export default Button
