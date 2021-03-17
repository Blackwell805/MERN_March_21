import React from 'react'

const PageOne = props => {
    const { active } = props;
    return (
        <div>
            <h1>This is the first page</h1>
            <p>{ active }</p>
            {/* <button onClick={ () => setActive("PageTwo") }>Go to Page 2</button> */}
        </div>
    )
}

export default PageOne
