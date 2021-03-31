import React from 'react'

const Render = (props) => {
    if (props.name) {
        return <h1> Hey, {props.name}! </h1>;
    } else {
        return <spam> Hey, user </spam>;
    }
}

export default Render;