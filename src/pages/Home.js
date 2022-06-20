import RecentlyFour from './../components/RecentlyFour';
import TopFourPC from '../components/TopFourPC';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            {/* Header hier */}
            <h2>Recently Added</h2>
            <RecentlyFour />
            <Link to="/recently">SHOW MORE</Link>
            <h2>Top 4 Games for PC in June 2021</h2>
            <TopFourPC />
            <Link to="/all">SHOW MORE</Link>
            <h2>Top 4 Games for Browser in June 2021</h2>
            <Link to="/all">SHOW MORE</Link>
        </div>
    )
}

export default Home;