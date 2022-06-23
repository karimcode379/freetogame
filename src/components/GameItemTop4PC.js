import { Link } from "react-router-dom";
import WindowsIcon from './../img/WindowsIcon.png';
import BrowserIcon from './../img/BrowserIcon.png';

const GameItem_Top4PC = (props) => {
    return (
        <div className="GameItem_Top4PC">
            <img src={props.thumbnail} alt="Thumbnail" className="thumbnail_top4PC" />
            {/* Card Body - Title, Description, Read More */}
            <div className="top4PC_cardBody">
                <h4 className="top4PC_h4">{props.title}</h4>
                <button className="top4PC_cardButton">
                    <Link to={`/gamedetail/${props.id}`}>READ MORE</Link></button>
            </div>
            {/* Bottom Icons - Plattform + Genre */}
            <div className="top4PC_bottomIcons">
                <div className="cardPlattform">
                    <img src={props.platform === "PC (Windows)" ? WindowsIcon : BrowserIcon} alt="Plattform" id="Top4PCCardPlattformImg" /></div>
                <div className="cardGenre">{props.genre}</div>
            </div>
        </div>
    );
};

export default GameItem_Top4PC;
