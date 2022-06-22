import RecentlyFour from './../components/RecentlyFour';
import TopFourPC from '../components/TopFourPC';
import TopFourBrowser from '../components/TopFourBrowser';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

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
            <Header />
            <h2>Recently Added</h2>
            {/* <section className="gameItemGrid">
                <div className="gridItem"> */}
            <RecentlyFour
                data={data}
            />
            <button className="buttonShowMore">
                <Link to="/recently" state={data}>SHOW MORE</Link>
                {/* <Link to={{ pathname: '/pathname', state: data }}>SHOW MORE</Link> */}
            </button>
            {/* </div>
            </section> */}
            <h2>Top 4 Games for PC in June 2021</h2>
            <TopFourPC
                data={data}
            />
            <button className="buttonShowMore">
                <Link to="/all" state={data}>SHOW MORE</Link>
            </button>
            <h2>Top 4 Games for Browser in June 2021</h2>
            <TopFourBrowser
                data={data}
            />
            <button className="buttonShowMore">
                <Link to="/all" state={data}>SHOW MORE</Link>
            </button>
        </div>
    )
}

export default Home;