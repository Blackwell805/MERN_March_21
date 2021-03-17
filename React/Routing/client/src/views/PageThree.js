import React, { isValidElement } from 'react'
import { navigate } from '@reach/router';

const PageThree = props => {
    const { active } = props;

    const submitHandler = e => {
        e.preventDefault();
        let isValid = true;
        // all kinds of logic to determine and validate

        if(isValid) {
            navigate('/');
        }
    }

    return (
        <div>
            <h1>This is the third page</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium impedit quae incidunt aperiam officiis, quasi corporis?</p>
            <p>{ active }</p>

            <form onSubmit={ submitHandler }>
                <input type="submit" value="Submit!"/>
            </form>
            {/* <button onClick={ () => setActive("PageOne") }>Go to Page 1</button> */}

            <button onClick={ () => navigate("/about/25")}>Go to About</button>
        </div>
    )
}

export default PageThree
