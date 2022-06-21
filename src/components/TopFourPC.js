import data from '../data';
import GameItem from './GameItem';

const TopFourPC = () => {

    const topFourPC = [];
    topFourPC.push(data[data.findIndex(obj => obj.id === 515)])
    topFourPC.push(data[data.findIndex(obj => obj.id === 516)])
    topFourPC.push(data[data.findIndex(obj => obj.id === 517)])
    topFourPC.push(data[data.findIndex(obj => obj.id === 519)])

    return (<main className="top4PCGrid">
        <div className="top4PC_gridItem">
            <section className="top4PC">
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
            </section>
        </div>
    </main>);
}

export default TopFourPC;