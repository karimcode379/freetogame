import RecentlyAdded_Header from '../img/RecentlyAdded_Header.png';
import LogoIcon from '../img/LogoIcon.png';
import Search from '../img/Search.png';

const Recently_Header = (data) => {


    console.log(data);
    return (
        <header>
            <nav>
                <img src={LogoIcon} alt="Logo Free2Game" className="Logo" />
                <input type="text"></input>
                <input type="submit" value="🔍"></input>
            </nav>
            <h1>RECENTLY ADDED</h1>
            <img src={RecentlyAdded_Header} alt="Header" className="Hero" />
        </header>
    );
}

export default Recently_Header;