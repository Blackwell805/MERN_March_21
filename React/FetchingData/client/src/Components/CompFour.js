import React, { useContext } from 'react'
import {UserContext} from '../Contexts/UserContext';

const CompFour = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <p>The authenticated user is { user }</p>
        </div>
    )
}

export default CompFour
