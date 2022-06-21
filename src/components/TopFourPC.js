import React, { useState, useEffect } from 'react';
import GameItem from './GameItem';

const TopFourPC = (props) => {

    const data = props.data;
    let one = data.filter(obj => obj.id == 475);
    let two = data.filter(obj => obj.id == 516);
    let three = data.filter(obj => obj.id == 57);
    let four = data.filter(obj => obj.id == 1);
    const topFourPC = one.concat(two).concat(three).concat(four);

    return (<div className="top4PCGrid">
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
    </div>);
}

export default TopFourPC;