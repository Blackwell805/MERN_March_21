import React, { useState } from 'react'

const HookForm = () => {
    // form fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPW, setConfirmPW] = useState("");
    
    // error fields
    const [firstNameErrors, setFirstNameErrors] = useState("");
    const [lastNameErrors, setLastNameErrors] = useState("");
    const [emailErrors, setEmailErrors] = useState("");
    const [passwordErrors, setPasswordErrors] = useState("");
    const [confirmPWErrors, setConfirmPWErrors] = useState("");

    const formChange = e => {
        const { name: key, value } = e.target;
        // let key = e.target.name;
        // let value = e.target.value;

        if(key === "firstName"){
            setFirstName(value);
            if(value.length < 2){
                setFirstNameErrors("First Name must be at least 2 characters in length!")
            } else {
                setFirstNameErrors("");
            }

        } else if(key === "lastName"){
            setLastName(value);
            if(value.length < 2){
                setLastNameErrors("Last Name must be at least 2 characters in length!")
            } else {
                setLastNameErrors("");

            }

        } else if(key === "email"){
            setEmail(value);
            if(value.length < 5){
                setEmailErrors("Email address must be at least 5 characters in length!")
            } else {
                setEmailErrors("");

            }

        } else if(key === "password"){
            setPassword(value);

            if(value !== confirmPW){
                setConfirmPWErrors("Passwords must match!");
            } else {
                setConfirmPWErrors("");

            }

            if(value.length < 8){
                setPasswordErrors("Password must be at least 8 characters in length.");
            } else {
                setPasswordErrors("");

            }

        } else if(key === "confirmPW"){
            setConfirmPW(value);

            if(value !== password){
                setConfirmPWErrors("Passwords must match!");
            } else {
                setConfirmPWErrors("");
                
            }
        }
    }


    return (
        <>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" onChange={ formChange }/>
                {
                    firstNameErrors ?
                    <p>{ firstNameErrors }</p>
                    :
                    ''
                }
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" onChange={ formChange }/>
                {
                    lastNameErrors ?
                    <p>{ lastNameErrors }</p>
                    :
                    ''
                }
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange={ formChange }/>
                {
                    emailErrors ?
                    <p>{ emailErrors }</p>
                    :
                    ''
                }
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={ formChange }/>
                {
                    passwordErrors ?
                    <p>{ passwordErrors }</p>
                    :
                    ''
                }
                {
                    confirmPWErrors ?
                    <p>{ confirmPWErrors }</p>
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

export default HookForm
