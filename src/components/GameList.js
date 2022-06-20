import data from './../data';
import GameItem from './GameItem';

const GameList = () => {
    return (
        <div>
            {data.map(elt =>
                <GameItem
                    key={elt.id}
                    id={elt.id}
                    thumbnail={elt.thumbnail}
                    title={elt.title}
                    short_description={elt.short_description}
                    platform={elt.platform}
                    genre={elt.genre}
                    data={data}
                />
            )}
        </div>
    );
}

export default GameList;