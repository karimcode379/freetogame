import RecentlyFour from './../components/RecentlyFour';
import TopFourPC from '../components/TopFourPC';
import TopFourBrowser from '../components/TopFourBrowser';
import { Link } from "react-router-dom";
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <h2>Recently Added</h2>
            <RecentlyFour />
            <button className="buttonShowMore">
                <Link to="/recently">SHOW MORE</Link>
            </button>
            <h2>Top 4 Games for PC in June 2021</h2>
            <TopFourPC />
            <button className="buttonShowMore">
                <Link to="/all">SHOW MORE</Link>
            </button>
            <h2>Top 4 Games for Browser in June 2021</h2>
            <TopFourBrowser />
            <button className="buttonShowMore">
                <Link to="/all">SHOW MORE</Link>
            </button>
        </div>
    )
}

export default Home;