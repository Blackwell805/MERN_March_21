import React from 'react'
import CompThree from './CompThree'

const CompTwo = props => {
    const { theUserBeingChanged } = props;
    return (
        <div>
            <p>Component Two - { theUserBeingChanged}</p>
        </div>
    )
}

export default CompTwo
