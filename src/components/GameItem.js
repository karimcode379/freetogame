import { Link } from "react-router-dom";
import WindowsIcon from './../img/WindowsIcon.png';
import BrowserIcon from './../img/BrowserIcon.png';

const GameItem = (props) => {
  return (
    <main className="gameItemGrid">
      <div className="GameItem">
        {/* <section className="GameItem"> */}
        <img src={props.thumbnail} alt="Thumbnail" className="thumbnail" />
        {/* nächstes div ist für den sichtbaren border-bottom */}
        <div className="cardBody">
          <h3>{props.title}</h3>
          <p>{props.short_description}</p>
          <button className="cardButton">
            <Link to={`/gamedetail/${props.id}`}>READ MORE</Link></button>
        </div>
        {/* nächstes div ist für die bottom icons */}
        <div className="bottomIcons">
          <div className="cardPlattform">
            <img src={props.platform === "Windows" ? { WindowsIcon } : { BrowserIcon }} alt="Plattform" /></div>
          <div className="cardGenre">{props.genre}</div>
        </div>
        {/* </section> */}
      </div>
    </main >
  );
};

export default GameItem;
