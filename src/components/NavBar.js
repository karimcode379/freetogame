import vector from '../img/Vector 1.svg';
import games from '../img/Games.png';
import plus from '../img/Union.png';
import { useState } from 'react';



const NavBar = () => {

    const [slide, setSlide] = useState(true);
    let menu = () => {
        setSlide(false);
    }

    let notMenu = () => {
        setSlide(true);
    }
    return (
        <div className="relativeParent">
            <nav className="flexColumn">
                <section onClick={menu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
                <div className="flexColumn">
                    <img className="navImg" src={vector} alt="house" />
                    <img className="navImg navGamepad" src={games} alt="gamepad" />
                    <img className="navImg" src={plus} alt="plus" />
                </div>
            </nav>

            {/* className={slide ? "noSlideMenu" : "slideMenu"} */}
            <section className={slide ? "noSlideMenu" : "slideMenu"}>
                <section>
                    <div className="rightX" onClick={notMenu}>x</div>
                </section>
                <div className="flexColumnHide">
                    <a className="aTag flexRow " href="#"><img className="navImg smallImg" src={vector} alt=" house" />Home</a>
                    <a className="aTag flexRow" href="#"><img className="navImg navGamepad" src={games} alt=" gamepad" />All Games</a>
                    <a className="aTag flexRow" href="#"><img className="navImg smallImg" src={plus} alt=" plus" />Recently Added</a>
                </div>

            </section>

        </div >

    );
}

export default NavBar;