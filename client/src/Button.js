import React from 'react'

const Button = (props) => {
    return (
        <button className="btn" onClick={props.btnAction}>{props.btnContent}</button>
    )
}

export default Button