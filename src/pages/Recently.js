import GameItem from './../components/GameItem';
import RecentlyHeader from './../components/RecentlyHeader';
import { useLocation } from 'react-router-dom';

const Recently = (props) => {

    const location = useLocation();
    let data = location.state ? location.state : props.data;

    data.sort((a, b) => b.id - a.id);
    const recentlyEight = data.splice(0, 8);

    return (
        <div>
            <RecentlyHeader />
            <div className="gameItemGrid">
                {recentlyEight.map(elt =>
                    <GameItem
                        key={elt.id}
                        id={elt.id}
                        thumbnail={elt.thumbnail}
                        title={elt.title}
                        short_description={elt.short_description}
                        platform={elt.platform}
                        genre={elt.genre}
                    />)}
            </div>
        </div>
    );
}

export default Recently;