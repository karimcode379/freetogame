import data from '../data';
import GameItem_Top4PC from './GameItem_Top4PC';

const TopFourPC = () => {

    const topFourPC = [];
    topFourPC.push(data[data.findIndex(obj => obj.id === 515)])
    topFourPC.push(data[data.findIndex(obj => obj.id === 516)])
    topFourPC.push(data[data.findIndex(obj => obj.id === 517)])
    topFourPC.push(data[data.findIndex(obj => obj.id === 519)])

    return (<main className="top4PCGrid">


        {topFourPC.map(elt =>
            <GameItem_Top4PC
                key={elt.id}
                id={elt.id}
                thumbnail={elt.thumbnail}
                title={elt.title}
                short_description={elt.short_description}
                platform={elt.platform}
                genre={elt.genre}
            />
        )}


    </main>);
}

export default TopFourPC;