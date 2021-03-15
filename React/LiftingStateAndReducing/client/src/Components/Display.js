import React from 'react'

const Display = props => {
    const { userList } = props;
    return (
        <ul>
            {
                userList.map( (user, i) => {
                        if(user.name === "Michael Choi"){
                            return <li key={i}>holy shit it's michael choi</li>
                        }
                        else {                           
                            return (
                                <li key={i}>
                                    <ul>
                                        <li>Name: { user.name }</li>
                                        <li>Email: { user.email }</li>
                                        <li>Password: { user.password }</li>
                                    </ul>
                                </li>
                            )
                        }
                    }
                )
            }
        </ul>
    )
}

export default Display
