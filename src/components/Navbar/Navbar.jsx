import React,{useContext} from "react";
import "./Navbar.css";
import {Link } from "react-router-dom";
import CvContext from "../context/CvContext";

function Navbar() {
  const context = useContext(CvContext);
  const {Login} = context;
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link  to="/" className="nav-logo">
            Ganesh
            <i className="fa fa-code"></i>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
               <Link  to='/'  activeclassname="active" className="nav-links">
                Home
              </ Link>
            </li>
            <li className="nav-item">
               <Link  to='/about'  activeclassname="active" className="nav-links">
                About
              </ Link>
            </li>
            <li className="nav-item">
               <Link  to='/skills'  activeclassname="active" className="nav-links">
                Skill
              </ Link>
            </li>
            <li className="nav-item">
               <Link
                to='work'
                 activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Work
              </ Link>
            </li>
            <li className="nav-item">
               <Link
                to="/contact"
                 activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </ Link>
            </li>
            <li className="nav-item">
               <Link
                to="/login"
                 activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
               {!Login ?
                <i className="fa-solid fa-user"></i> :
               <i className="fa-solid fa-user-check"></i>}
              </ Link>
              </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;