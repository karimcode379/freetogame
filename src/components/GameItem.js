import { Link } from "react-router-dom";
// import WindowsIcon from 'src/img/WindowsIcon.png';

const GameItem = (props) => {
  return (
    <div className="GameItem">
      <img src={props.thumbnail} alt="" className="thumbnail" />
      {/* nächstes div ist für den sichtbaren border-bottom */}
      <div className="cardBody">
        <h3>{props.title}</h3>
        <p>{props.short_description}</p>
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

export default GameItem;
