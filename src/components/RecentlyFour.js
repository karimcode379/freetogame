import React, { useState, useEffect } from 'react';

import data from './../data';
import GameItem from './GameItem';

const RecentlyFour = () => {

    const sortedRecently = data.sort((a, b) => b.id - a.id);
    console.log(sortedRecently);
    const [recentlyFour, setRecentlyFour] = useState([]);

    useEffect(() => {
        getDataHandler();
    }, []);

    const getDataHandler = () => {
        for (let i = 0; i < 4; i++) {
            setRecentlyFour(recentlyFour => [...recentlyFour, sortedRecently[i]])
        }
    };
    console.log(recentlyFour)


    return (<div>
        {recentlyFour.map(elt =>
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

export default RecentlyFour;