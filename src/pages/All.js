import AllGamesHeader from '../components/AllGamesHeader';
import React, { useState, useEffect } from 'react';
import GameItem from './../components/GameItem';



const All = () => {

    const [data, setData] = useState([]);
    const [showData, setShowData] = useState([]);
    const [visible, setVisibility] = useState(true);

    useEffect(() => {
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
        console.log(showData);
    }

    const genreFilter = (e) => {
        console.log(e.target.value)
        setShowData(data.slice().filter(elt => elt.genre === e.target.value))
        console.log(showData);
    }

    const plattformFilterBrowser = () => {
        setShowData(data.slice().filter(elt => elt.platform === 'Web Browser'))
        console.log(showData);
    }

    const plattformFilterWindows = () => {
        setShowData(data.slice().filter(elt => elt.platform === 'PC (Windows)'))
        console.log(showData);
    }

    const allPlattforms = () => {
        setShowData(data.slice())
        console.log(showData);
    }


    return (
        <div>
            <AllGamesHeader />
            <button onClick={sortAZ}>A-Z</button>
            <button value="Shooter" onClick={genreFilter}>Genre Filter</button>
            <button onClick={plattformFilterBrowser}>Platform Filter Browser</button>
            <button onClick={plattformFilterWindows}>Platform Filter Windows</button>
            <div className="question">
                <p>PLATTFORM</p>
                <div onClick={() => setVisibility(!visible)}>{visible ? 'V' : 'Ʌ'}</div>
            </div>
            <div style={{ display: visible ? 'none' : 'block', backgroundColor: 'darkgrey' }}>
                <div className='question'>
                    <div onClick={allPlattforms}>All Plattforms</div>
                    <div onClick={plattformFilterWindows}>Windows (PC)</div>
                    <div onClick={plattformFilterBrowser}>Browser (Web)</div>
                </div>
            </div>
            <div className="question">
                <p>GENRE/TAG</p>
                <div onClick={() => setVisibility(!visible)}>{visible ? 'V' : 'Ʌ'}</div>
            </div>
            <div style={{ display: visible ? 'none' : 'block', backgroundColor: 'darkgrey' }}>
                <div className='question'>
                    <button value="Shooter" onClick={genreFilter}>Genre Filter</button>
                </div>
            </div>
            <div className="question">
                <p>SORT BY</p>
                <div onClick={() => setVisibility(!visible)}>{visible ? 'V' : 'Ʌ'}</div>
            </div>
            <div style={{ display: visible ? 'none' : 'block', backgroundColor: 'darkgrey' }}>
                <div className='question'>
                    <button value="relevance" onClick={sortBy}>Relevance</button>
                    <button value="release-date" onClick={sortBy}>Release-Date</button>
                    <button value="popularity" onClick={sortBy}>Popularity</button>
                    <button value="alphabetical" onClick={sortAZ}>Alphabetical</button>
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