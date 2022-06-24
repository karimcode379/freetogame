import AllGamesHeader from './../components/AllGames_Header';
import React, { useRef, useState, useEffect } from 'react';
import GameItem from './../components/GameItem';
import { useLocation } from 'react-router-dom';

const All = () => {

    const [data, setData] = useState([]);
    const ref = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpen2, setIsMenuOpen2] = useState(false);
    const [isMenuOpen3, setIsMenuOpen3] = useState(false);
    const location = useLocation();
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isMenuOpen2 && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen2(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen2])

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isMenuOpen3 && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen3(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen3])

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
    }, [location.state]);

    const sortBy = (e) => {
        setIsMenuOpen3(false);
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
    }


    const sortAZ = () => {
        setIsMenuOpen(false);
        setShowData((showData[0] ? showData : data).slice().sort((a, b) => a.title.localeCompare(b.title)));
    }

    const genreFilter = (e) => {
        setIsMenuOpen2(false);
        setShowData(data.slice().filter(elt => elt.genre === e.target.value))
    }

    const plattformFilterBrowser = () => {
        setIsMenuOpen(false);
        setShowData(data.slice().filter(elt => elt.platform === 'Web Browser'))
    }

    const plattformFilterWindows = () => {
        setIsMenuOpen(false);
        setShowData(data.slice().filter(elt => elt.platform === 'PC (Windows)'))
    }

    const allPlattforms = () => {
        setIsMenuOpen(false);
        setShowData(data.slice())
    }


    return (
        <div>
            <AllGamesHeader />
            <div className="question_container">
                <div className="allAround">
                    <div className="question">
                        <p>PLATTFORM</p>
                        <div onClick={() => setIsMenuOpen(oldState => !oldState)}>
                            {!isMenuOpen ? "V" : "Ʌ"}
                        </div>
                    </div>
                    {isMenuOpen && (
                        <div
                            className="question_dropdown_container"
                            ref={ref}
                        >
                            <div>
                                <div className="dropDownItem" onClick={allPlattforms}>
                                    All Plattforms
                                </div>
                                <div className="dropDownItem" onClick={plattformFilterWindows}>
                                    Windows (PC)
                                </div>
                                <div className="dropDownItem" onClick={plattformFilterBrowser}>
                                    Browser (Web)
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="allAround">
                    <div className="question">
                        <p>GENRE/TAG</p>
                        <div onClick={() => setIsMenuOpen2(oldState => !oldState)}>
                            {!isMenuOpen2 ? "V" : "Ʌ"}
                        </div>
                    </div>
                    {isMenuOpen2 && (
                        <div
                            className="question_dropdown_container scrollContainer"
                            ref={ref}
                        >
                            <button className="dropDownItem" value="ARPG" onClick={genreFilter}>
                                ARPG
                            </button>
                            <button className="dropDownItem" value="Card" onClick={genreFilter}>
                                Card
                            </button>
                            <button
                                className="dropDownItem"
                                value="Fantasy"
                                onClick={genreFilter}
                            >
                                Fantasy
                            </button>
                            <button
                                className="dropDownItem"
                                value="Fighting"
                                onClick={genreFilter}
                            >
                                Fighting
                            </button>
                            <button className="dropDownItem" value="MMO" onClick={genreFilter}>
                                MMO
                            </button>
                            <button
                                className="dropDownItem"
                                value="MMOARPG"
                                onClick={genreFilter}
                            >
                                MMOARPG
                            </button>
                            <button
                                className="dropDownItem"
                                value="MMORPG"
                                onClick={genreFilter}
                            >
                                MMORPG
                            </button>
                            <button className="dropDownItem" value="MOBA" onClick={genreFilter}>
                                MOBA
                            </button>
                            <button
                                className="dropDownItem"
                                value="Racing"
                                onClick={genreFilter}
                            >
                                Racing
                            </button>
                            <button
                                className="dropDownItem"
                                value="Shooter"
                                onClick={genreFilter}
                            >
                                Shooter
                            </button>
                            <button
                                className="dropDownItem"
                                value="Social"
                                onClick={genreFilter}
                            >
                                Social
                            </button>
                            <button
                                className="dropDownItem"
                                value="Sports"
                                onClick={genreFilter}
                            >
                                Sports
                            </button>
                            <button
                                className="dropDownItem"
                                value="Strategy"
                                onClick={genreFilter}
                            >
                                Strategy
                            </button>
                        </div>
                    )}
                </div>
                <div className="allAround">
                    <div className="question">
                        <p>SORT BY</p>
                        <div onClick={() => setIsMenuOpen3(oldState => !oldState)}>
                            {!isMenuOpen3 ? "V" : "Ʌ"}
                        </div>
                    </div>
                    {isMenuOpen3 && (
                        <div
                            className="question_dropdown_container"
                            ref={ref}
                        >
                            <button className="dropDownItem" value="relevance" onClick={sortBy}>
                                Relevance
                            </button>
                            <button
                                className="dropDownItem"
                                value="release-date"
                                onClick={sortBy}
                            >
                                Release-Date
                            </button>
                            <button
                                className="dropDownItem"
                                value="popularity"
                                onClick={sortBy}
                            >
                                Popularity
                            </button>
                            <button
                                className="dropDownItem"
                                value="alphabetical"
                                onClick={sortAZ}
                            >
                                Alphabetical
                            </button>
                        </div>
                    )}
                </div>
                <div>
                    <div className="question" id="blackBox"></div>
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