import Home_Header from '../img/Home_Header.png';
import LogoIcon from '../img/LogoIcon.png';

const Header = (data) => {

    console.log(LogoIcon);

    console.log(data);
    return (
        <header>
            <nav><img src={LogoIcon} alt="Logo Free2Game" className="Logo" /></nav>
            <img src={Home_Header} alt="Header" className="Header" />
        </header>
    );
}

export default Header;