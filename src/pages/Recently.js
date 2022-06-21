import data from './../data';
import GameItem from './../components/GameItem';


const Recently = () => {

    const sortedRecently = data.sort((a, b) => b.id - a.id);

    return (
        <div>
            {sortedRecently.map(elt =>
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

export default Recently;