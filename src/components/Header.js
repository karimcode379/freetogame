import Home_Header from '../img/Home_Header.png';
import LogoIcon from '../img/LogoIcon.png';
import Search from '../img/Search.png';

const Header = (data) => {

    console.log(LogoIcon);

    console.log(data);
    return (
        <header>
            {/* <nav>
                <img src={LogoIcon} alt="Logo Free2Game" className="Logo" />
                <input type="text"></input>
                <input type="submit" value="🔍"></input>
            </nav> */}
            <h1>FIND & TRACK THE BEST FREE-TO-PLAY GAMES!</h1>
            <img src={Home_Header} alt="Header" className="Hero" />
        </header>
    );
}

export default Header;