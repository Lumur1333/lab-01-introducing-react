import React, { useState } from 'react';
import Greeting from './components/Greeting';
import './App.css';

const App = () => {
    const [name, setName] = useState();

    return (
        <div>
            <header>
                <h1>Please type in your name!</h1>
            </header>
            <hr />
                <input
                    onChange={({ target: { value } }) => setName(value)}
                    placeholder="Enter your name"
                />

            <hr />
            <Greeting name={name} />
        </div>
    );
};


export default App;
