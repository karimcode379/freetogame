import { Link } from "react-router-dom";
import WindowsIcon from './../img/WindowsIcon.png';
import BrowserIcon from './../img/BrowserIcon.png';

const GameItem_Top4Browser = (props) => {
    return (
        <div className="GameItem">
            <img src={props.thumbnail} alt="" className="thumbnail" />
            {/* Card Body - Title, Description, Read More */}
            <div className="top4Browser_cardBody">
                <h3>{props.title}</h3>
                <button className="cardButton">
                    <Link to={`/gamedetail/${props.id}`}>READ MORE</Link></button>
            </div>
            {/* Bottom Icons - Plattform + Genre */}
            <div className="bottomIcons">
                <div className="cardPlattform">
                    <img src={props.platform === "Windows" ? { WindowsIcon } : { BrowserIcon }} alt="Plattform" /></div>
                <div className="cardGenre">{props.genre}</div>
            </div>
        </div>
    );
};

export default GameItem_Top4Browser;
