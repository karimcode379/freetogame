import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/all">All Games</Link>
      <Link to="/recently">Recently</Link>
    </div>
  );
};

export default NavBar;
