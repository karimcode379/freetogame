import LogoIcon from '../img/LogoIcon.png';
import AllGamesImg_Header from '../img/AllGamesImg_Header.png';
import Search from '../img/Search.png';

const AllGames_Header = (data) => {


    console.log(data);
    return (
        <header>
            <nav>
                <img src={LogoIcon} alt="Logo Free2Game" className="Logo" />
                <input type="text"></input>
                <input type="submit" value="🔍"></input>
            </nav>
            <h1>ALL GAMES</h1>
            <img src={AllGamesImg_Header} alt="Header" className="Hero" />
        </header>
    );
}

export default AllGames_Header;