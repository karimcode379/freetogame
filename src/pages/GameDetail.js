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

    }, [id])

    return (
        <div>
            {data &&
                <div className="GameDetailContainer">
                    <img src={data.thumbnail} alt="" className="GameDetailHero" />
                    <div className="Flexbasis">
                        <div className="LeftFlexbasis">
                            <h5>{data.title}</h5>
                            <img src={data.thumbnail} alt="" className="GameDetailThumbnail" />
                            <h6>Plattform: {data.platform}</h6>
                            <div className="GameDetailBottomIcons">
                                <div className="cardGenre">{data.genre}</div>
                                <button className="ButtonPlayNow">
                                    <a href={data.game_url} target="_blank" rel="noreferrer">PLAY NOW</a>
                                </button>
                            </div>
                        </div>
                        <div className="RightFlexbasis">
                            <h2 className="GameDetailAbout">About</h2>
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <div>
                        <img src={data.screenshots[0].image} alt="" className="GameDetailScreenshot" />
                        <img src={data.screenshots[1].image} alt="" className="GameDetailScreenshot" />
                    </div>
                    <div>
                        <div className="GameDetailGrid">
                            <div className="GridItem1">Additional Information</div>
                            <p className="GridItem2">Please note this free-to-play game may or may not offer optional in-game purchases.</p>
                            <div className="GridItem3"><span>Developer</span> {data.developer}</div>
                            <div className="GridItem4"><span>Publisher</span> {data.publisher}</div>
                            <div className="GridItem5"><span>Release Date</span> {data.release_date}</div>
                            {data.minimum_system_requirements &&
                                <div className="GameDetailGridRight">
                                    <div className="GridItem6">Minimum System Requirements &#40;Windows&#41;</div>
                                    <div className="GridItem7">
                                        <span>OS</span>
                                        <div>{data.minimum_system_requirements.os}</div>
                                    </div>
                                    <div className="GridItem8">
                                        <span>Processor</span>
                                        <div>{data.minimum_system_requirements.processor}</div>
                                    </div>
                                    <div className="GridItem9">
                                        <span>Memory</span>
                                        <div>{data.minimum_system_requirements.memory}</div>
                                    </div>
                                    <div className="GridItem10">
                                        <span>Graphics</span>
                                        <div>{data.minimum_system_requirements.os}</div>
                                    </div>
                                    <div className="GridItem11">
                                        <span>Storage</span>
                                        <div>{data.minimum_system_requirements.storage}</div>
                                    </div>
                                    <div className="GridItem12">
                                        <span>Additional Notes</span>
                                        <div>Specifications may change during development</div>
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