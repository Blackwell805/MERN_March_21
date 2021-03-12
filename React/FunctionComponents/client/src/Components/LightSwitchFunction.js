import React, { useState } from 'react';

const LightSwitchFunction = () => {
    const [switchPosition, setSwitchPosition] = useState("On");
    const [nameInput, setNameInput] = useState("");
    const [displayName, setDisplayName] = useState("");

    const flipSwitch = () => {
        if(switchPosition === "On"){
            setSwitchPosition("Off");
        } else {
            setSwitchPosition("On");
        }
    }

    const submitHandler = e => {
        e.preventDefault();
        setDisplayName(nameInput);

        alert("Thank you for your submission!");
    }

    return (
        <div>
            <h1>Hello { displayName }</h1>
            <button onClick={ flipSwitch }>Click Me</button>
            <p>{ switchPosition }</p>
            <form onSubmit={ submitHandler }>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" onChange={ e => setNameInput(e.target.value) }/>
                </div>
                <input type="submit" value="Change Header"/>
            </form>
        </div>
    )
}

export default LightSwitchFunction;