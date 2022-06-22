
import data from '../data';
import GameItem_Top4Browser from './GameItem_Top4Browser';

/*import React, { useState, useEffect } from 'react';
import GameItem from './GameItem';*/


const TopFourBrowser = (props) => {

    const data = props.data;
    let one = data.filter(obj => obj.id == 365);
    let two = data.filter(obj => obj.id == 353);
    let three = data.filter(obj => obj.id == 458);
    let four = data.filter(obj => obj.id == 358);
    const topFourBrowser = one.concat(two).concat(three).concat(four);

    return (
        <div className="top4BrowserGrid">

            {topFourPC.map(elt =>
                <GameItem_Top4Browser

            /*{topFourBrowser.map(elt =>
                <GameItem*/

                    key={elt.id}
                    id={elt.id}
                    thumbnail={elt.thumbnail}
                    title={elt.title}

                    //short_description={elt.short_description}

                    //short_description={elt.short_description}

                    platform={elt.platform}
                    genre={elt.genre}
                />
            )}

        </div >);

        </div>
    );

}

export default TopFourBrowser;