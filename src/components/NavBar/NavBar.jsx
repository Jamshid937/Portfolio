import React from 'react'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars,faXmark,faCode } from '@fortawesome/free-solid-svg-icons'
function NavBar() {
    const [click, setClick] = React.useState(false);
    const [navBar, setNavBar] = React.useState(false)
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);


    const ScrollBar =() => {
     if(window.scrollY>=80){
    setNavBar(true)
    }else{
     setNavBar(false)
    }
    }
    window.addEventListener('scroll', ScrollBar)

    return (
      <div className={navBar ? 'navbar active' : 'navbar'} id='home' >
       <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container">
            <a exact href="#home" className="nav-logo" data-aos="fade-right">
              Frontend Developer
              <i className="fa fa-code"></i>
            </a>
            <ul className={click ? "nav-menu active" : "nav-menu" } data-aos="zoom-in">
              <li className="nav-item">
                <a
                  exact
                  href="#home"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  exact
                  href="#about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  exact
                  href="#services"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  exact
                  href="#portfolio"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  exact
                  href="#contact"
                  activeClassName="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  Contact Us
                </a>
              </li>

            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </ div>
    );
  }

export default NavBar