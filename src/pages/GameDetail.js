import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const GameDetail = () => {

    let { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const getDataHandler = () => {
            fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
                .then(response => response.json())
                .then(data => {
                    setData(data)
                })
                .catch(err => console.error(err));
        }
        getDataHandler();

    }, [])

    return (
        <div>
            {data && <div>
                <h1>Hallo</h1>
                <h1>{data.title}</h1>
                <div>
                    <img src={data.thumbnail} alt="" />
                    <h2>Plattform: {data.plattform}</h2>
                    <div>{data.genre}</div>
                    <a href={data.game_url} target="_blank" rel="noreferrer">PLAY NOW</a>
                </div>
                <div>
                    <h2>About</h2>
                    <p>{data.description}</p>
                </div>
                <div>
                    <img src={data.screenshots[0].image} alt="" />
                    <img src={data.screenshots[1].image} alt="" />
                </div>
                <div>
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
                            <div>
                                <h2>Minimum System Requriements &#40;Windows&#41;</h2>
                                {/* Grid im nächsten div? */}
                                <div>
                                    <div>
                                        <div>OS</div>
                                        <div>{data.minimum_system_requirements.os}</div>
                                    </div>
                                    <div>
                                        <div>Processor</div>
                                        <div>{data.minimum_system_requirements.processor}</div>
                                    </div>
                                    <div>
                                        <div>Memory</div>
                                        <div>{data.minimum_system_requirements.memory}</div>
                                    </div>
                                    <div>
                                        <div>Graphics</div>
                                        <div>{data.minimum_system_requirements.os}</div>
                                    </div>
                                    <div>
                                        <div>Storage</div>
                                        <div>{data.minimum_system_requirements.storage}</div>
                                    </div>
                                    <div>
                                        <div>Additional Notes</div>
                                        <div>Specifications may change during development</div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default GameDetail;