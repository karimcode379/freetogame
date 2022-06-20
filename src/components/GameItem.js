import { Link } from "react-router-dom";

const GameItem = (props) => {
  return (
    <div className="thumbnail">
      <img src={props.thumbnail} alt="" />
      {/* nächstes div ist für den sichtbaren border-bottom */}
      <div className="description">
        <h3>{props.title}</h3>
        <p>{props.short_description}</p>
        <button>
          <Link to={`/gamedetail/${props.id}`}>READ MORE</Link></button>
      </div>
      {/* nächstes div ist für die bottom icons */}
      <div>
        <div className="bottomIcons">
          <img src={props.platform === "Windows" ? "a" : "b"} alt="plattform" />
        </div>
        <div>{props.genre}</div>
      </div>
    </div>
  );
};

export default GameItem;
