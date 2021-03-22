import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AllCoffee from '../components/AllCoffee'
import CoffeeForm from '../components/CoffeeForm'

const HomeComponent = () => {
    const [allCoffee, setAllCoffee] = useState([]);
    const [coffee, setCoffee] = useState({
        name: "",
        beanType: "",
        withMilk: false,
        withSugar: false
    });
    const [coffeeErrors, setCoffeeErrors] = useState({});

    const typingChangeHandler = e => {
        // what this needs to do is pick apart the coffee object
        // and update the part that needs to change

        // LONG WAY:
        // const newCoffee = { ...coffee };
        // newCoffee[e.target.name] = e.target.value;
        // setCoffee(newCoffee);
        
        // SHORT WAY:
        setCoffee({
            ...coffee, 
            [e.target.name]: e.target.value
        })
    }

    const checkChangeHandler = e => {
        setCoffee({
            ...coffee,
            [e.target.name]: !coffee[e.target.name]
        })
    }

    const submitHandler = e => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/coffee", coffee)
            .then(response => {
                if(response.data.message === "error") {
                    setCoffeeErrors(response.data.errors)
                } else {
                    let newCoffee = response.data.results;
                    // "LONG" WAY
                    // const coffeesCopy = [...allCoffee];
                    // coffeesCopy.push(newCoffee);
                    // setAllCoffee(coffeesCopy);
                    // "SHORT" WAY
                    setAllCoffee([...allCoffee, newCoffee]);
                    setCoffeeErrors({});
                    setCoffee({
                        name: "",
                        beanType: "",
                        withMilk: false,
                        withSugar: false
                    })
                }
            })
            .catch(err => console.log(err));

    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/coffee")
            .then(response => setAllCoffee(response.data.results))
            .catch(err => console.log("Something went wrong ", err))
    }, []);

    return (
        <div>
            <CoffeeForm
                coffee={ coffee }
                coffeeErrors={ coffeeErrors }
                typingChangeHandler={ typingChangeHandler }
                checkChangeHandler={ checkChangeHandler }
                submitHandler={ submitHandler }
            />
            <AllCoffee allCoffee={ allCoffee } />
        </div>
    )
}

export default HomeComponent
