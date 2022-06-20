import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const GameDetail = () => {

    let { id } = useParams();
    console.log(id)
    const [data, setData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    useEffect(() => {
        getDataHandler();
    }, [])

    const getDataHandler = async () => {
        await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));
    }

    // console.log(data && data.screenshots[0].image)

    return (
        <div>
            <h1>{data.title}</h1>
            <div>
                <div>
                    <img src={data.thumbnail} alt="" />
                    <h2>Plattform: {data.plattform}</h2>
                    <div>{data.genre}</div>
                    <a href={data.game_url} target="_blank">PLAY NOW</a>
                </div>
                <div>
                    <h2>About</h2>
                    <p>{data.description}</p>
                </div>
                {/* /<div>
                    <img src={data.screenshots[0].image} alt="" />
                    <img src={data.screenshots[1].image} alt="" />
                </div> */}
                {/* <div>
                    <div>
                        <h2>Additional Information</h2>
                        <p>Please note this free-to-play game may or may not offer optional in-game purchases.</p>
                        <div>
                            <div>Developer</div>
                            <div>{data.developer}</div>
                            <div>Publisher</div>
                            <div>{data.publisher}</div>
                            <div>Release Date</div>
                            <div>{data.release_date}</div>
                        </div>
                    </div>
                    <div>
                        {data.minimum_system_requirements &&
                            (<h2>Minimum System Requriements</h2>)
                        }
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default GameDetail;