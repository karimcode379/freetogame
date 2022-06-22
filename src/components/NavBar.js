// import vector from '../img/Vector 1.svg';
// import games from '../img/Games.png';
// import plus from '../img/Union.png';
// import { useState } from 'react';
// import { Link } from "react-router-dom";


// const NavBar = () => {

//     const [slide, setSlide] = useState(true);
//     let menu = () => {
//         setSlide(false);
//     }

//     let notMenu = () => {
//         setSlide(true);
//     }
//     return (
//         <div className="relativeParent">
//             <nav className="flexColumn">
//                 <section onClick={menu}>
//                     <div></div>
//                     <div></div>
//                     <div></div>
//                 </section>
//                 <div className="flexColumn">
//                     <Link to="/"><img className="navImg" src={vector} alt="house" /></Link>
//                     <Link to="/all"><img className="navImg navGamepad" src={games} alt="gamepad" /></Link>
//                     <Link to="/recently"><img className="navImg" src={plus} alt="plus" /></Link>
//                 </div>
//             </nav>

//             {/* className={slide ? "noSlideMenu" : "slideMenu"} */}
//             <section className={slide ? "noSlideMenu" : "slideMenu"}>
//                 <section>
//                     <div className="rightX" onClick={notMenu}>x</div>
//                 </section>
//                 <div className="flexColumnHide">
//                     <Link to="/" className="aTag flexRow "><img className="navImg smallImg" src={vector} alt=" house" />Home</Link>
//                     <Link to="/all" className="aTag flexRow"><img className="navImg navGamepad" src={games} alt=" gamepad" />All Games</Link>
//                     <Link to="/recently" className="aTag flexRow"><img className="navImg smallImg" src={plus} alt=" plus" />Recently Added</Link>
//                 </div>

//             </section>

//         </div >

//     );
// }

// export default NavBar;
