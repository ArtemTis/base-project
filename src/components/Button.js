import React, { useState } from 'react'

const Button = (props) => {

    const [click, setClick] = useState(0);

    return (
        <button onClick={() => setClick(click + 1)}>{props.text} {click}</button>
    )
}

Button.defaultProps = {
    text: 'Btn'
}

export default Button