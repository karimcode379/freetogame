import data from '../data';
import GameItem from './GameItem';

const TopFourBrowser = () => {

    const topFourPC = [];
    topFourPC.push(data[data.findIndex(obj => obj.id === 515)])
    topFourPC.push(data[data.findIndex(obj => obj.id === 516)])
    topFourPC.push(data[data.findIndex(obj => obj.id === 517)])
    topFourPC.push(data[data.findIndex(obj => obj.id === 519)])

    return (
        <div className="top4BrowserGrid">
            {topFourPC.map(elt =>
                <GameItem
                    key={elt.id}
                    id={elt.id}
                    thumbnail={elt.thumbnail}
                    title={elt.title}
                    short_description={elt.short_description}
                    platform={elt.platform}
                    genre={elt.genre}
                />
            )}
        </div >);
}

export default TopFourBrowser;