import AllGames_Header from './../components/AllGames_Header';
import React, { useState, useEffect } from 'react';
import GameItem from './../components/GameItem';



const All = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const getDataHandler = () => {
            fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=shooter&sort-by=release-date`, options)
                .then(response => response.json())
                .then(json => {
                    setData(json);
                })
                .catch(err => console.error(err));
        }
        getDataHandler();
    }, []);


    const sortAZ = () => {
        setData((data) => data.slice().sort((a, b) => a.title.localeCompare(b.title)));
        console.log(data);
    }

    return (
        <div>
            <AllGames_Header />
            <div className="gameItemGrid">
                {data.map(elt =>
                    <GameItem
                        key={elt.id}
                        id={elt.id}
                        thumbnail={elt.thumbnail}
                        title={elt.title}
                        short_description={elt.short_description}
                        platform={elt.platform}
                        genre={elt.genre}
                        data={data}
                    />
                )}
            </div >
            <button onClick={sortAZ}>A-Z</button>
        </div>
    );
};

export default All;