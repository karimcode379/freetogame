import data from './../data';
import GameItem from './GameItem';

const All = () => {
    return (
        <div>
            {/* Header hier */}
            {data.map(elt =>
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
    );
}

export default All;