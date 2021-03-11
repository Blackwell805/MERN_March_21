import React, { Component } from 'react'

export default class Children extends Component {
    render() {
        const { title, description, children } = this.props;
        return (
            <section>
                <h3>{ title }</h3>
                <p>{ description }</p>
                { children }
            </section>
        )
    }
}
