import { Link } from "react-router-dom";
import WindowsIcon from '../img/WindowsIcon.png';
import BrowserIcon from '../img/BrowserIcon.png';

const GameItem = (props) => {
  console.log(props.platform);
  return (
    <div className="GameItem">
      <img src={props.thumbnail} alt="Thumbnail" className="thumbnail" />
      {/* Card Body - Title, Description, Read More */}
      <div className="cardBody">
        <h3>{props.title}</h3>
        <p>{props.short_description}</p>
        <button className="cardButton">
          <Link to={`/gamedetail/${props.id}`}>READ MORE</Link></button>
      </div>
      {/* Bottom Icons - Plattform + Genre */}
      <div className="bottomIcons">
        <div className="cardPlattform">
          <img src={props.platform === "PC (Windows)" ? WindowsIcon : BrowserIcon} alt="Plattform" className="CardPlattformImg" /></div>
        <div className="cardGenre">{props.genre}</div>
      </div>
    </div>
  );
};

export default GameItem;