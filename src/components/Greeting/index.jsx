import React from 'react';
const Greeting = ({ name }) => {
    return (
    <div>
    <p>Hi!</p> <p id="name">{name}</p><p>Nice to meet you!</p>;
    </div>)
}

export default Greeting;