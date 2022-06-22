import { useLocation } from 'react-router-dom';
import GameItem from './../components/GameItem';
import Header from './../components/Header';

const Recently = (props) => {

    const location = useLocation();
    let data = location.state ? location.state : props.data;
    console.log(props.data);
    console.log(location.state);

    data.sort((a, b) => b.id - a.id);
    const recentlyEight = data.splice(0, 8);

    return (
        <div>
            <Header />
            {/* <main className="gameItemGrid"> */}
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
            {/* </main > */}
        </div>
    );
}

export default Recently;