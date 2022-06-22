import data from './../data';
import GameItem from './../components/GameItem';
import Header from './../components/Header';

const Recently = () => {

    const sortedRecently = data.sort((a, b) => b.id - a.id);

    return (
        <div>
            <Header />
            {/* <main className="gameItemGrid"> */}
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
            {/* </main > */}
        </div>
    );
}

export default Recently;