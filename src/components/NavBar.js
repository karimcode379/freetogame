import vector from '../img/Home.png';
import games from '../img/Games.png';
import plus from '../img/plus.png';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import redlog from '../img/logo.png';
import freetogame from '../img/Free2Game.png';

const NavBar = () => {
    const [slide, setSlide] = useState(true);
    const [topWidth, setTopWidth] = useState("95vw");
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
                <form action="" className="form">
                    <input type="text" name="" id="search" />
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
