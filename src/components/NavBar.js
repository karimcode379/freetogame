import vector from '../img/Home.png';
import games from '../img/Games.png';
import plus from '../img/plus.png';
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import redlog from '../img/logo.png';
import freetogame from '../img/Free2Game.png';
import GameItem from './GameItem';

const NavBar = () => {
    const [slide, setSlide] = useState(true);
    const [topWidth, setTopWidth] = useState("95vw");

    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    const [searchPara] = useState(['title', 'publisher', 'developer', 'genre', 'platform']);
    const [filterParam, setFilterParam] = useState('');

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const fetchApi = () => {
            fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
                .then(response => response.json())
                .then(json => {
                    setData(json);
                })
        }
        fetchApi();
    }, []);

    // el.text.toLowerCase().includes(input)

    const filterSearch = (games) => {
        return games.filter((item) => {
            if (item.title.toLowerCase().includes(filterParam.toLowerCase())) {
                console.log(item.title);
                return searchPara.some((newItem) => {
                    console.log(item.title, item.developer, item.genre, item.release_date, item.publisher, item.platform);
                    return (
                        item[newItem].toString().toLowerCase().indexOf(input.toLowerCase()) > -1
                    );
                });
            } else if (item.publisher == filterParam) {
                return searchPara.some((newItem) => {
                    return (
                        item[newItem].toString().toLowerCase().indexOf(input.toLowerCase()) > -1
                    );
                });
            } else if (item.developer == filterParam) {
                return searchPara.some((newItem) => {
                    console.log(newItem);
                    return (
                        item[newItem].toString().toLowerCase().indexOf(input.toLowerCase()) > -1
                    );
                });
            } else if (item.genre == filterParam) {
                console.log(item.genre)
                return searchPara.some((newItem) => {
                    return (
                        item[newItem].toString().toLowerCase().indexOf(input.toLowerCase()) > -1
                    );
                });
            } else if (item.platform == filterParam) {
                return searchPara.some((newItem) => {
                    return (
                        item[newItem].toString().toLowerCase().indexOf(input.toLowerCase()) > -1
                    );
                });
            }

        });
    }
    // console.log(input);


    let menu = () => {
        setSlide(false);
        setTopWidth(false);
    }
    let notMenu = () => {
        setSlide(true);
        setTopWidth(true);
    }

    const getInput = (ele) => {
        setInput(ele.target.value);
        setFilterParam(ele.target.value);
    }




    return (
        <section className="Navigation">
            <section style={{ width: topWidth ? "95vw" : "83vw" }}>
                <div>
                    <img src={redlog} alt="freetogame-logo" />
                    <img src={freetogame} alt="freetogame-letters" />
                </div>
                <form action="" className="form">
                    <input type="text" name="" id="search" onChange={getInput} value={input} />
                </form>
            </section>
            <div className=" nav relativeParent">
                <nav className="flexColumn">
                    <section className="burger" onClick={menu}>
                        <div className="burgerMeat"></div>
                        <div className="burgerMeat"></div>
                        <div className="burgerMeat"></div>
                    </section>
                    <div className="flexColumn">
                        <NavLink className={({ isActive }) => isActive ? "redButton" : "blackButton"} to="/home">
                            <img src={vector} alt="house" />
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "redButton" : "blackButton"} to="/all">
                            <img src={games} alt="gamepad" />
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "redButton" : "blackButton"} to="/recently">
                            <img src={plus} alt="plus" />
                        </NavLink>
                    </div>
                </nav>

                <section className={slide ? "noSlideMenu" : "slideMenu"}>
                    <section>
                        <h3 className="rightX" onClick={notMenu}>x</h3>
                    </section>
                    <div className="flexColumnHide hideSideLinks">
                        <NavLink className={({ isActive }) => isActive ? "redButtonHide" : ""} to="/home"><img src={vector} alt=" house" />Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "redButtonHide" : ""} to="/all"><img src={games} alt=" gamepad" />All Games</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "redButtonHide" : ""} to="/recently"><img src={plus} alt=" plus" />recently Added</NavLink>
                    </div>
                </section>
            </div >
            <ul className="searchSearch">
                {filterSearch(data).map((ele, i) => {
                    <GameItem
                        key={i}
                        id={ele.id}
                        thumbnail={ele.thumbnail}
                        title={ele.title}
                        short_description={ele.short_description}
                        platform={ele.platform}
                        genre={ele.genre}
                        data={data}
                    />
                })}
            </ul>
        </section >

    );
}

export default NavBar;
