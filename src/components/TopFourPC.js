import GameItemTop4PC from './GameItem_Top4PC';
import React, { useState, useEffect } from 'react';

const TopFourPC = (props) => {

    const [data2, setData] = useState(null);



    const data = props.data;
    let two = data.filter(obj => obj.id === 516);
    let three = data.filter(obj => obj.id === 57);
    let four = data.filter(obj => obj.id === 1);
    const topFourPC = two.concat(three).concat(four);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const getDataHandler = () => {
            fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=475`, options)
                .then(response => response.json())
                .then(data2 => {
                    setData(data2)
                })
                .catch(err => console.error(err));
        }
        getDataHandler();
    }, [])

    return (
        <main className="top4PCGrid">
            {data2 && <GameItemTop4PC
                key={data2.id}
                id={data2.id}
                thumbnail={data2.screenshots[0].image}
                title={data2.title}
                short_description={data2.short_description}
                platform={data2.platform}
                genre={data2.genre}
            />}
            {data && topFourPC.map(elt =>
                <GameItemTop4PC
                    key={elt.id}
                    id={elt.id}
                    thumbnail={elt.thumbnail}
                    title={elt.title}
                    short_description={elt.short_description}
                    platform={elt.platform}
                    genre={elt.genre}
                />
            )}
        </main>);
}

export default TopFourPC;