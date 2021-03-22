import React from 'react'


const AllCoffee = props => {
    const { allCoffee } = props;

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Bean</th>
                    <th>Milk</th>
                    <th>Sugar</th>
                    <th>Date Added</th>
                </tr>
            </thead>
            <tbody>
                {
                    allCoffee.map( (coffee, i) =>
                        <tr key={i}>
                            <td>{coffee.name}</td>
                            <td>{coffee.beanType}</td>
                            <td>{coffee.withMilk ? "Yes" : "No"}</td>
                            <td>{coffee.withSugar ? "Yes" : "No"}</td>
                            <td>{coffee.createdAt}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default AllCoffee
