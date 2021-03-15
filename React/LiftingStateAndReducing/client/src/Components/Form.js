import React, { useState } from 'react'

const Form = props => {
    const { changeHandler, submitHandler, user } = props;
    return (
        <div>
            <form onSubmit={ submitHandler }>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" onChange={ changeHandler } value={ user.name }/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" onChange={ changeHandler } value={ user.email }/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={ changeHandler } value={ user.password }/>
                </div>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default Form
