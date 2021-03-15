import React, { useState } from 'react'

const HookFormCondensed = () => {
    const [user, setUser] = useState({
        firstName: {
            value: "",
            error: ""
        },
        lastName: {
            value: "",
            error: ""
        },
        email: {
            value: "",
            error: ""
        },
        password: {
            value: "",
            error: []
        },
        confirmPW: {
            value: ""
        }
    });
    
    const formChange = e => {
        const { name: key, value } = e.target;
        if(key === "confirmPW"){
            setUser({
                ...user,
                password: {
                    value: value,
                    error: validate(key, value)
                }
            })
        }
        else {
            setUser({
                ...user,
                [key]: {
                    value: value,
                    error: validate(key, value)
                }
            })
        }
    }

    const validate = (key, value) => {
        if(key === "firstName")
            return value.length < 2 ? "First Name must be at least 2 characters in length" : "";
        else if(key === "lastName")
            return value.length < 2 ? "Last Name must be at least 2 characters in length" : "";
        else if(key === "email")
            return value.length < 5 ? "Email must be at least 5 characters in length" : "";
        else if(key === "password" || key === "confirmPW"){
            let errors = [];
            if(value.length < 8)
                errors.push("Password must be at least 8 characters in length.");
            if((key === "password" && value !== user.confirmPW.value) || (key === "confirmPW" && value !== user.password.value))
                errors.push("Passwords do not match");
            return errors;

        }
    }


    return (
        <>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" onChange={ formChange }/>
                {
                    user.firstName.error ?
                    <p>{ user.firstName.error }</p>
                    :
                    ''
                }
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" onChange={ formChange }/>
                {
                    user.lastName.error ?
                    <p>{ user.lastName.error }</p>
                    :
                    ''
                }
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange={ formChange }/>
                {
                    user.email.error ?
                    <p>{ user.email.error }</p>
                    :
                    ''
                }
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={ formChange }/>
                {
                    user.password.error ?
                    user.password.error.map((error, i) => 
                        <p key={i}>{error}</p>
                    )
                    :
                    ''
                }
            </div>
            <div>
                <label htmlFor="confirmPW">Confirm: </label>
                <input type="password" name="confirmPW" onChange={ formChange }/>
            </div>
        </>
    )
}

export default HookFormCondensed
