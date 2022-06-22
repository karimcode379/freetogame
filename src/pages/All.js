<<<<<<< HEAD
import Header from './../components/Header';
import React, { useState, useEffect } from 'react';
import GameItem from './../components/GameItem';
=======
import data from './../data';
import GameList from './../components/GameList';
/*import Header from './../components/Header';*/
import AllGames_Header from './../components/AllGames_Header';
>>>>>>> main


const All = () => {

    const [data, setData] = useState([]);

    // const [azArr, setAzArr] = useState([]);

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


    const pushToAzArr = () => {
        // setData([]);
        // data.sort((a, b) => a.title.localeCompare(b.title));
        setData((data) => data.slice().sort((a, b) => a.title.localeCompare(b.title)));
        console.log(data);
        // setData(arr);
    }
    useEffect(() => {

    }, []);
    console.log(data)

    return (
        <div>
<<<<<<< HEAD
            <div>
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
                <button onClick={pushToAzArr}>A-Z</button>
            </div >
=======
            <AllGames_Header />
            <div className="gameItemGrid">
                {
                    data.map(elt =>
                        <GameItem
                            key={elt.id}
                            id={elt.id}
                            thumbnail={elt.thumbnail}
                            title={elt.title}
                            short_description={elt.short_description}
                            platform={elt.platform}
                            genre={elt.genre}
                        />)
                }
            </div>
        </div >
            <GameList />
>>>>>>> main
        </div>
    );
};

export default All;