import React, { useState } from 'react'

// const initialUser = {
//     name: "",
//     email: "",
//     password: ""
// };

// const reducer = (state, action) => {
//     return {
//         ...state,
//         [action.type]: action.payload
//     }
// }

const Reduce = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    // const [user, setUser] = useReducer(reducer, initialUser);

    // const changeHandler = e => {
    //     const { name, value } = e.target;
    //     setUser({
    //         type: name,
    //         payload: value 
    //     })
    // }

    const userChangeHandler = e => {
        const { name: key, value } = e.target;
        console.log({
            ...user,
            [key]: value
        });

        setUser({
            ...user,
            [key]: value
        });
    }

    return (
        <div>
            <ul>
                <li>Name: { user.name }</li>
                <li>Email: { user.email }</li>
                <li>Password: { user.password }</li>
            </ul>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={ userChangeHandler }/>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange={ userChangeHandler }/>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={ userChangeHandler }/>
            </div>
        </div>
    )
}

export default Reduce
