import RecentlyFour from './../components/RecentlyFour';
import TopFourPC from '../components/TopFourPC';

const Home = () => {
    return (
        <div>
            {/* Header hier */}
            <h2>Recently Added</h2>
            <RecentlyFour />
            <h2>Top 4 Games for PC in June 2021</h2>
            <TopFourPC />
            <h2>Top 4 Games for Browser in June 2021</h2>

        </div>
    );
}

export default Home;