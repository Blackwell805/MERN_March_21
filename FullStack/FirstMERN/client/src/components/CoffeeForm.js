import React from 'react'
import FormInput from './FormInput'

const CoffeeForm = props => {
    const { coffee, coffeeErrors, submitHandler, typingChangeHandler, checkChangeHandler } = props;



    return (
        <>
        <form onSubmit={submitHandler}>
            <FormInput
                label="name"
                labelDisplay="Name: "
                type="text"
                changeHandler={ typingChangeHandler }
                value={ coffee.name }
                error={ coffeeErrors.name }
            />
            <FormInput
                label="beanType"
                labelDisplay="Bean Type: "
                type="text"
                changeHandler={ typingChangeHandler }
                value={ coffee.beanType }
                error={ coffeeErrors.beanType }
            />
            <FormInput
                label="withMilk"
                labelDisplay="Milk: "
                type="checkbox"
                changeHandler={ checkChangeHandler }
                value={ coffee.withMilk }
                error={ coffeeErrors.withMilk }
            />
            <FormInput
                label="withSugar"
                labelDisplay="Sugar: "
                type="checkbox"
                changeHandler={ checkChangeHandler }
                value={ coffee.withSugar }
                error={ coffeeErrors.withSugar }
            />
            <FormInput 
                type="submit"
                value="Coffeecoffeecoffee"
            />
        </form>
        </>
    )
}

export default CoffeeForm
