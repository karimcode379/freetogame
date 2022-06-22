
import data from '../data';
import GameItem_Top4PC from './GameItem_Top4PC';

/*import React, { useState, useEffect } from 'react';
import GameItem from './GameItem';*/

const TopFourPC = (props) => {

    const data = props.data;
    let one = data.filter(obj => obj.id == 475);
    let two = data.filter(obj => obj.id == 516);
    let three = data.filter(obj => obj.id == 57);
    let four = data.filter(obj => obj.id == 1);
    const topFourPC = one.concat(two).concat(three).concat(four);

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