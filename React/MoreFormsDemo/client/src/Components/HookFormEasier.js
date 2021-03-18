import React, { useState } from 'react'

const HookFormEasier = () => {
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

    const checkAndChangeFirstName = value => {
        // updating the value of firstName in state
        setFirstName(value);

        // checking for, and setting any errors for firstName
        if(value.length < 2) {
            setFirstNameErrors("First name must be at least 2 characters long");
        } else {
            setFirstNameErrors("");
        }
    }

    const checkAndChangeLastName = value => {
        // updating the value of lastName in state
        setLastName(value);

        // checking for, and setting any errors for lastName
        if(value.length < 2) {
            setLastNameErrors("Last name must be at least 2 characters long");
        } else {
            setLastNameErrors("");
        }
    }

    const checkAndChangeEmail = value => {
        // updating the value of email in state
        setEmail(value);

        // checking for, and setting any errors for email
        if(value.length < 5) {
            setEmailErrors("Email must be at least 5 characters long");
        } else {
            setEmailErrors("");
        }
    }

    const checkAndChangePassword = value => {
        // updating the value of password in state
        setPassword(value);

        // checking for, and setting any errors for password
        if(value.length < 8) {
            setPasswordErrors("Password must be at least 8 characters long");
        } else {
            setPasswordErrors("");
        }

        if(value !== confirmPW){
            setConfirmPWErrors("Passwords must match");
        } else {
            setConfirmPWErrors("");
        }
    }
    
    const checkAndChangeConfirmPW = value => {
        // updating the value of changePassword in state
        setConfirmPW(value);

        // checking for, and setting any errors for changePassword
        if(value.length < 8) {
            setConfirmPWErrors("ConfirmPW must be at least 8 characters long");
        } else {
            setConfirmPWErrors("");
        }

        if(value !== password){
            setConfirmPWErrors("Passwords must match");
        } else {
            setConfirmPWErrors("");
        }
    }

    return (
        <>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" onChange={ e => checkAndChangeFirstName(e.target.value) }/>
                {
                    firstNameErrors ?
                    <p>{ firstNameErrors }</p>
                    :
                    ''
                }
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" onChange={ e => checkAndChangeLastName(e.target.value) }/>
                {
                    lastNameErrors ?
                    <p>{ lastNameErrors }</p>
                    :
                    ''
                }
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange={ e => checkAndChangeEmail(e.target.value) }/>
                {
                    emailErrors ?
                    <p>{ emailErrors }</p>
                    :
                    ''
                }
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={ e => checkAndChangePassword(e.target.value) }/>
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
                <input type="password" name="confirmPW" onChange={ e => checkAndChangeConfirmPW(e.target.value) }/>
            </div>
        </>
    )
}

export default HookFormEasier
