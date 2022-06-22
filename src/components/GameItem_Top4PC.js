import { Link } from "react-router-dom";
// import WindowsIcon from 'src/img/WindowsIcon.png';

const GameItem_Top4PC = (props) => {
    return (
        <div className="GameItem_Top4PC">
            <img src={props.thumbnail} alt="" className="thumbnail_top4PC" />
            {/* Card Body - Title, Description, Read More */}
            <div className="top4PC_cardBody">
                <h4>{props.title}</h4>
                {/* <p>{props.short_description}</p> */}
                <button className="cardButton">
                    <Link to={`/gamedetail/${props.id}`}>READ MORE</Link></button>
            </div>
            {/* Bottom Icons - Plattform + Genre */}
            <div className="bottomIcons">
                <div className="cardPlattform">
                    <img src={props.platform === "Windows" ? "a" : "b"} alt="Plattform" /></div>
                <div className="cardGenre">{props.genre}</div>
            </div>
        </div>
    );
};

export default GameItem_Top4PC;
