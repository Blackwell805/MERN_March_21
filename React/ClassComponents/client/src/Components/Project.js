import React, { Component } from 'react';

class Project extends Component {
    render() {
        const { title, imgSrc, imgAlt, description} = this.props;
        return (
            <div className="project">
                <h3>{ title }</h3>
                <img src={ imgSrc } alt={ imgAlt }/>
                <p>{ description }</p>
                <h3>Technologies:</h3>
            </div>
        )
    }
}

export default Project;