import React, { Component } from 'react'

export default class LightSwitchClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            switchPosition: "On",
            name: ""
        };
    }

    flipSwitch = () => {
        if(this.state.switchPosition === "On"){
            this.setState({ switchPosition: "Off" });
        } else {
            this.setState({ switchPosition: "On" });
        }
    }

    render() {
        const { switchPosition, name } = this.state;
        return (
            <div>
                <h1>Hello { name }</h1>
                <button onClick={ this.flipSwitch }>Click Me</button>
                <p>{ switchPosition }</p>
                <input type="text" name="name" onChange={ e => this.setState({ name: e.target.value }) }/>
            </div>
        )
    }
}
