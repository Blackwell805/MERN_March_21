import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData = () => {
    const [characters, setCharacters] = useState([]);
    const [nextPage, setNextPage] = useState("");
    const [noData, setNoData] = useState(false);

    // const fetchData = () => {
    //     // fetch("https://rickandmortyapi.com/api/character")
    //     //     .then(response => response.json())
    //     //     .then(response => console.log(response))
    //     console.log("hi");
    //     axios.get("https://rickandmortyapi.com/api/character")
    //         .then(response => setCharacters(response.data.results))
    //         .catch(() => console.log("data did not come back for whatever reason"))
    // }

    const goToNext = () => {
        axios.get(nextPage)
            .then(response => {
                setCharacters(response.data.results);
                setNextPage(response.data.info.next);
                setNoData(false)
            })
            .catch(err => setNoData(true))
    }

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => {
                setCharacters(response.data.results);
                setNextPage(response.data.info.next);
                setNoData(false)
            })
            .catch(err => setNoData(true))
    }, []);

    return (
        <>
            {/* <button onClick={ fetchData }>Click to Fetch Data</button> */}
        {
            noData ?
            <h3>There is no data to display. Please refresh the page</h3>
            :
            <div>
                {
                    characters.map( (character, i) => 
                    <p key={i}>{ character.name }</p>
                    )
                }
                <button onClick={ goToNext }>Next Page of Characters</button>
            </div>
        }
        </>
    )
}

export default FetchData;
