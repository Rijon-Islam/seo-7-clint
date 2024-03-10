import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";



const NavBar = () => {

  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [users, setUser] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((info) => setUser(info));
  }, []);




  return (


    <>




      

      {/* This is Start Nav Header */}

      <header className="theme-main-menu sticky-menu theme-menu-one">
        <div className="inner-content">
          <div className="d-flex align-items-center justify-content-between">
            {
              logo.map(l=><div className="logo"><a href="/"><img src={l.logo} alt width={127} /></a></div>)
            }
            
            <nav className="navbar navbar-expand-lg">
              <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="d-block d-lg-none"><div className="logo"><a href="/"><img src="images/logo/vCamp_01.png" alt width={127} /></a></div></li>
                  <li className="nav-item active dropdown mega-dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Home</a>
                    <ul className="dropdown-menu">

                    </ul>
                  </li>
                  <li className="nav-item dropdown mega-dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">About Us</a>
                    <ul className="dropdown-menu">

                    </ul>
                  </li>
                  <li className="nav-item dropdown mega-dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Services</a>
                    <ul className="dropdown-menu">

                    </ul>
                  </li>
                  <li className="nav-item dropdown mega-dropdown-md">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Pricing</a>
                    <ul className="dropdown-menu">

                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Contcat Us</a>

                  </li>
                  {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Blog</a>

                  </li> */}
                  <a>     <div style={{ display: 'flex', gap: '10px' }}>
                    {user ? (
                      <li>
                        <Link to="/dashboard" className="theme-btn-one border0 ripple-btn">
                          Dashboard
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="login" className="theme-btn-one border0 ripple-btn">
                          Login
                        </Link>
                      </li>
                    )}

                    {users.filter(u => u.userEmail === user?.email).length === 1 && (
                      <li>
                        <Link to="/admin/" className="theme-btn-one border0 ripple-btn">
                          Admin
                        </Link>
                      </li>
                    )}
                  </div>
                  </a>


                </ul>
                <div className="mobile-content d-block d-lg-none">
                  <form action="#" className="search-form">
                    <input type="text" placeholder="Search here.." />
                    <button><i className="bi bi-search" /></button>
                  </form>
                  <div className="address-block">
                    <h4 className="title">Our Address</h4>
                    <p>Chowrastar Mirpur- 1210, Sangu <br />River, Dhaka</p>
                    <p>Urgent issue? call us at <br /><a href="tel:310.841.5500">310.841.5500</a></p>
                  </div>
                </div> {/* /.mobile-content */}
              </div>
            </nav>
            <div className="right-widget d-flex align-items-center">
              <a href="sign-in.html" className="d-flex align-items-center login-btn">
                
              </a>
              <button className="sidebar-nav-button d-none d-lg-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src="" alt /></button>
            </div> {/* /.right-widget */}
          </div>
        </div> {/* /.inner-content */}
      </header> {/* /.theme-main-menu */}


    </>
  );
};

export default NavBar;
