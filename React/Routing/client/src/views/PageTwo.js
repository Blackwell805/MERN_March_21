import React, { useEffect } from 'react'

const PageTwo = props => {
    // const { setActive } = props;
    const { searchTerm } = props;

    useEffect(() => {
        if(isNaN(searchTerm)){
            // make api call to route using a string
        } else {
            // make api call to route using a number
        }
    }, [])

    return (
        <>
            
            <div>
                <h1>Welcome, user number { searchTerm }</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, sunt!</p>
                {/* <button onClick={ () => setActive("PageThree") }>Go to Page 3</button> */}
            </div>
    
        </>
    )
}

export default PageTwo
