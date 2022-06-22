import AllGamesImg_Header from '../img/AllGamesImg_Header.png';
const AllGames_Header = (data) => {


    console.log(data);
    return (
        <header>
            <h1>ALL GAMES</h1>
            <img src={AllGamesImg_Header} alt="Header" className="Hero" />
        </header>
    );
}

export default AllGames_Header;