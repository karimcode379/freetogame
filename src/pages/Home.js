import GameList from "./../components/GameList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/recently">SHOW MORE</Link>
      <Link to="/all">SHOW MORE</Link>
      <Link to="/all">SHOW MORE</Link>
    </div>
  );
};

export default Home;
