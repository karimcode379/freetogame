import Home_Header from '../img/Home_Header.png';

const Header = (data) => {
    return (
        <header>
            <h1>FIND & TRACK THE BEST FREE-TO-PLAY GAMES!</h1>
            <img src={Home_Header} alt="Header" className="Hero" />
        </header>
    );
}

export default Header;