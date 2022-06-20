const GameItem = props => {
    return (
        <div>
            <img src={props.thumbnail} alt="" />
            {/* nächstes div ist für den sichtbaren border-bottom */}
            <div>
                <h3>{props.title}</h3>
                <p>{props.short_description}</p>
                {/* insert outer link here */}
            </div>
            {/* nächstes div ist für die bottom icons */}
            <div>
                <div>
                    <img src={props.platform === 'Windows' ? 'a' : 'b'} alt="plattform" />
                </div>
                <div>{props.genre}</div>
            </div>
        </div>
    );
}

export default GameItem;