import data from './../data';
import GameItem from './../components/GameItem';
import Recently_Header from './../components/Recently_Header';

const Recently = () => {

    const sortedRecently = data.sort((a, b) => b.id - a.id);

    return (
        <div>
            <Recently_Header />
            <div className="gameItemGrid">
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
        </div>
    );
}

export default Recently;