import RecentlyFour from './../components/RecentlyFour';
import TopFourPC from '../components/TopFourPC';
import TopFourBrowser from '../components/TopFourBrowser';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Home = () => {

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
            fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
                .then(response => response.json())
                .then(json => {
                    setData(json);
                })
                .catch(err => console.error(err));
        }
        getDataHandler();
    }, []);

    return (
        <div>
            {/* Header hier */}
            <h2>Recently Added</h2>
            <RecentlyFour
                data={data}
            />
            <Link to="/recently">SHOW MORE</Link>
            <h2>Top 4 Games for PC in June 2021</h2>
            <TopFourPC
                data={data}
            />
            <Link to="/all" state={data}>SHOW MORE</Link>
            <h2>Top 4 Games for Browser in June 2021</h2>
            <TopFourBrowser
                data={data}
            />
            <Link to="/all" state={data}>SHOW MORE</Link>
        </div>
    )
}

export default Home;