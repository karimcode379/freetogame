import vector from '../img/Home.png';
import games from '../img/Games.png';
import plus from '../img/plus.png';
import { useRef, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import redlog from '../img/logo.png';
import freetogame from '../img/Free2Game.png';
import Vorschlaege from './Vorschlaege'

const NavBar = () => {
    const [slide, setSlide] = useState(true);
    const [topWidth, setTopWidth] = useState("95vw");
    const location = useLocation();
    const [data, setData] = useState([]);
    const [result, setResult] = useState([]);
    const [vorschlaege, setVorschlaege] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate();
    const ref = useRef()

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

    const filterSearch = (e) => {
        setResult([]);
        setVorschlaege([]);
        const input = e.target.value;
        return data.filter((item) => {
            if (item.title.toLowerCase().includes(input.toLowerCase())) {
                setResult(result => [...result, item]);
                showVorschlaege();
            } else if (item.publisher.toLowerCase().includes(input.toLowerCase())) {
                setResult(result => [...result, item])
            } else if (item.developer.toLowerCase().includes(input.toLowerCase())) {
                setResult(result => [...result, item])
            } else if (item.genre.toLowerCase().includes(input.toLowerCase())) {
                setResult(result => [...result, item])
            } else if (item.platform.toLowerCase().includes(input.toLowerCase())) {
                setResult(result => [...result, item])
            }
            return null;
        });
    }

    const showVorschlaege = () => {
        setVorschlaege(result.slice(0, 5))
    }

    const clearVorschlaege = () => {
        setVorschlaege([]);
    }

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            // navigate('/all', { state: result });
            if (!(location.pathname === '/all')) {
                navigate('/all', { state: result })
            } else {
                navigate('/refresher')
                setTimeout(function () {
                    navigate('/all', { state: result })
                }, 1);
            }
        }
    }

    let menu = () => {
        setSlide(false);
        setTopWidth(false);
    }
    let notMenu = () => {
        setSlide(true);
        setTopWidth(true);
    }

    return (
        <section className="Navigation">
            <section style={{ width: topWidth ? "95vw" : "83vw" }}>
                <div>
                    <img src={redlog} alt="freetogame-logo" />
                    <img src={freetogame} alt="freetogame-letters" />
                </div>
                <form action="" className="form" ref={ref}>
                    <input type="text" name="" id="search" onChange={filterSearch} onKeyDown={keyHandler} onClick={() => setIsMenuOpen(oldState => !oldState)} />
                    {isMenuOpen && (<div className="ergebnisVorschlaege" onClick={clearVorschlaege}>{vorschlaege[0] && vorschlaege.map(elt =>
                        <Vorschlaege
                            key={elt.id}
                            id={elt.id}
                            thumbnail={elt.thumbnail}
                            title={elt.title}
                            short_description={elt.short_description}
                            platform={elt.platform}
                            genre={elt.genre}
                            data={data}
                        />
                    )}</div>)}
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
        </section >

    );
}

export default NavBar;