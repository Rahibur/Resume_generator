//Navbar contains the menubar of the application
//imported 
import React from "react";
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.png";
const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light" >
        <div className="container-fluid">
        
            <NavLink className="navbar-brand" to="/"> <img src={logo} alt="home-pic" style={{ width: '219px', height: '70px' }} /></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">Build Resume</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/starter">About Section</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/connect">Contact us</NavLink>
                </li>
              </ul>

            </div>

          </div>
      </nav>
    </header>

  )
}

export default Navbar