import RecentlyAdded_Header from '../img/RecentlyAdded_Header.png';

const Recently_Header = (data) => {
    return (
        <header>
            <h1>RECENTLY ADDED</h1>
            <img src={RecentlyAdded_Header} alt="Header" className="Hero" />
        </header>
    );
}

export default Recently_Header;