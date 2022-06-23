import AllGames_Header from './../components/AllGames_Header';
import React, { useState, useEffect } from 'react';
import GameItem from './../components/GameItem';
import { useLocation } from 'react-router-dom';

const All = () => {

    const [data, setData] = useState([]);
    const location = useLocation();
    const [showData, setShowData] = useState([]);
    const [visible1, setVisibility1] = useState(true);
    const [visible2, setVisibility2] = useState(true);
    const [visible3, setVisibility3] = useState(true);

    useEffect(() => {
        location.state && setShowData(location.state);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const getDataHandler = () => {
            fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games`, options)
                .then(response => response.json())
                .then(json => {
                    setData(json);
                })
                .catch(err => console.error(err));
        }
        getDataHandler();
    }, []);

    const sortBy = (e) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${e.target.value}`, options)
            .then(response => response.json())
            .then(json => {
                (showData[0] ? setShowData : setData)(json);
            })
            .catch(err => console.error(err));
        console.log(data)
    }


    const sortAZ = () => {
        setShowData((showData[0] ? showData : data).slice().sort((a, b) => a.title.localeCompare(b.title)));
    }

    const genreFilter = (e) => {
        console.log(e.target.value)
        setShowData(data.slice().filter(elt => elt.genre === e.target.value))
    }

    const plattformFilterBrowser = () => {
        setShowData(data.slice().filter(elt => elt.platform === 'Web Browser'))
    }

    const plattformFilterWindows = () => {
        setShowData(data.slice().filter(elt => elt.platform === 'PC (Windows)'))
    }

    const allPlattforms = () => {
        setShowData(data.slice())
    }


    return (
        <div>
            <AllGames_Header />
            <div className="question_container">
                <div>
                    <div className="question">
                        <p>PLATTFORM</p>
                        <div onClick={() => setVisibility1(!visible1)}>
                            {visible1 ? "V" : "Ʌ"}
                        </div>
                    </div>
                    <div className="question_dropdown_container"
                        style={{
                            display: visible1 ? "none" : "flex",
                            backgroundColor: "darkgrey",
                        }}>
                        <button onClick={allPlattforms}>All Plattforms</button>
                        <button onClick={plattformFilterWindows}>Windows (PC)</button>
                        <button onClick={plattformFilterBrowser}>Browser (Web)</button>
                    </div>
                </div>
                <div>
                    <div className="question">
                        <p>GENRE/TAG</p>
                        <div onClick={() => setVisibility2(!visible2)}>
                            {visible2 ? "V" : "Ʌ"}
                        </div>
                    </div>
                    <div
                        className="question_dropdown_container"
                        style={{
                            display: visible2 ? "none" : "flex",
                            backgroundColor: "darkgrey",
                        }}
                    >

                        <button value="ARPG" onClick={genreFilter}>
                            ARPG
                        </button>
                        <button value="Card" onClick={genreFilter}>
                            Card
                        </button>
                        <button value="Fantasy" onClick={genreFilter}>
                            Fantasy
                        </button>
                        <button value="Fighting" onClick={genreFilter}>
                            Fighting
                        </button>
                        <button value="MMO" onClick={genreFilter}>
                            MMO
                        </button>
                        <button value="MMOARPG" onClick={genreFilter}>
                            MMOARPG
                        </button>
                        <button value="MMORPG" onClick={genreFilter}>
                            MMORPG
                        </button>
                        <button value="MOBA" onClick={genreFilter}>
                            MOBA
                        </button>
                        <button value="Racing" onClick={genreFilter}>
                            Racing
                        </button>
                        <button value="Shooter" onClick={genreFilter}>
                            Shooter
                        </button>
                        <button value="Social" onClick={genreFilter}>
                            Social
                        </button>
                        <button value="Sports" onClick={genreFilter}>
                            Sports
                        </button>
                        <button value="Strategy" onClick={genreFilter}>
                            Strategy
                        </button>
                    </div>
                </div>
                <div>
                    <div className="question">
                        <p>SORT BY</p>
                        <div onClick={() => setVisibility3(!visible3)}>
                            {visible3 ? "V" : "Ʌ"}
                        </div>
                    </div>
                    <div
                        className="question_dropdown_container"
                        style={{
                            display: visible3 ? "none" : "flex",
                            backgroundColor: "darkgrey",
                        }}
                    >

                        <button value="relevance" onClick={sortBy}>
                            Relevance
                        </button>
                        <button value="release-date" onClick={sortBy}>
                            Release-Date
                        </button>
                        <button value="popularity" onClick={sortBy}>
                            Popularity
                        </button>
                        <button value="alphabetical" onClick={sortAZ}>
                            Alphabetical
                        </button>
                    </div>
                </div>
                <div>
                    <div className="question">
                    </div>
                </div>
            </div>
            <div className="gameItemGrid">
                {(showData[0] ? showData : data).map(elt =>
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
        </div>
    );
};

export default All;