import React, { useState, useEffect } from 'react';
import GameItem from './GameItem';

const TopFourBrowser = (props) => {

    const data = props.data;
    let one = data.filter(obj => obj.id == 365);
    let two = data.filter(obj => obj.id == 353);
    let three = data.filter(obj => obj.id == 458);
    let four = data.filter(obj => obj.id == 358);
    const topFourBrowser = one.concat(two).concat(three).concat(four);

    return (
        <div className="top4BrowserGrid">
            {topFourBrowser.map(elt =>
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
        </div>
    );
}

export default TopFourBrowser;