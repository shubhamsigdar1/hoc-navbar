import React, { useState } from 'react'
import './navbar.css';
const Navbar = () => {
  const[toggle,setToggle]=useState(false);
  const sidebarToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className='wrapper'>
      <>
        <nav className='navBar'>
          <div className="hamburger" onClick={sidebarToggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className="navBarLogin">
            <a
              className="btnLogin"
              href="#"
            >
              <button className="btnLoginText" >
                Sign In
                <img
                  className='githubLogo'
                  src="icons/github.png"
                  alt="GitHub Icon"
                  height="15px"
                  width="15px"
                />
              </button>
            </a>
          </div>
          <ul
            className={toggle?"navBarMenu active":"navBarMenu"}>
            <li className="navBarLogoLi" >
              <a href="#">
                <img
                  src="images/Real-Dev-Squad@1x.png"
                  alt="home nav logo"
                  height="50px"
                  width="50px"
                />
              </a>
            </li>
            <li><a href="#">Welcome</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Members</a></li>
            <li><a href="#">Crypto</a></li>
            <li><a href="#">Status</a></li>
            <li className="navBarLoginLi">
              <a
                className="btnLogin"
                href="#"
              >
                <button className="btnLoginText">
                  Sign In With GitHub
                  <img
                    className="githubLogo"
                    src="icons/github.png"
                    alt="GitHub Icon"
                    height="15px"
                    width="15px"
                  />
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </>
    </div>
  )
}

export default Navbar
