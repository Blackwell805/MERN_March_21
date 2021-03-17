import React from 'react'
import CompTwo from './CompTwo'

const CompOne = props => {
    const { someUser, changeSomeUser } = props;

    return (
        <div>
            <p>Component One</p>
            <input type="text" name="user" onChange={e => changeSomeUser(e.target.value) } value={someUser}/>
        </div>
    )
}

export default CompOne
