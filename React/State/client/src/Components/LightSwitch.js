import React, { Component } from 'react'

export default class LightSwitch extends Component {
    constructor(){
        super();
        this.state = {
            switchPosition: "On",
            name: ""
        };
    }

    flipSwitch = () => {
        console.log("Hello");
        if(this.state.switchPosition == "On"){
            this.setState({ switchPosition: "Off"});
        } else {
            this.setState({ switchPosition: "On" });
        }
    }


    render() {
        const { switchPosition, name } = this.state;
        return (
            <>
            <h1>Hello { name }</h1>
            <button onClick={ this.flipSwitch }>Click Me</button>
            <p>{ switchPosition }</p>
            <input type="text" name="name" onChange={ e => this.setState({ name: e.target.value }) } />
            </>
        )
    }
}
