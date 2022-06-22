import data from './../data';
import GameList from './../components/GameList';
/*import Header from './../components/Header';*/
import AllGames_Header from './../components/AllGames_Header';


const All = () => {
    return (
        <div>
            <AllGames_Header />
            <div className="gameItemGrid">
                {
                    data.map(elt =>
                        <GameItem
                            key={elt.id}
                            id={elt.id}
                            thumbnail={elt.thumbnail}
                            title={elt.title}
                            short_description={elt.short_description}
                            platform={elt.platform}
                            genre={elt.genre}
                        />)
                }
            </div>
        </div >
            <GameList />
        </div>
    );
};

export default All;