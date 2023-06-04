// import React from 'react'
// //import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import PersonIcon from '@mui/icons-material/Person';
// import { Link } from 'react-router-dom';
// import "./Navbar.scss";



// const Navbar = () => {
//   return (
//     <div className='navbar'>
//         <div className="wrapper">
//         <div className="left">
//             <div className="item"><Link to="/">Home</Link></div>
//             <div className="item"><Link to="/Sell" >Sell</Link></div>
//             <div className="item"><Link to="/About" >About</Link></div>
//             <div className="item"><Link to="/Contact" >Contact</Link></div>
//         </div>
//         <div className="center">
//            <Link to="/"><img src={require('../../assets/img/logo.jpg')}/></Link>
//         </div>
//         <div className="right">
//            <div className="icons">
//             <SearchIcon/>
//             <PersonIcon/>
//             <FavoriteBorderIcon/>
//             <div className="carticon"><ShoppingCartIcon/><span>0</span></div>
//            </div>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar;



import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = (e) => {
    e.currentTarget.nextElementSibling.classList.toggle('show');
  };

  const handleOutsideClick = () => {
    const dropdowns = document.getElementsByClassName('navbar-dropdown');
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
    }
  };

  return (
    <section className="navigation">
      <div className="nav-container">
      <div className="brand">
          <a href="#!">Logo</a>
        </div>
        <nav>
          <div className="nav-mobile">
            <a id="navbar-toggle" href="#!" onClick={handleToggleMenu}>
              <span></span>
            </a>
          </div>
          <ul className={`nav-list ${menuOpen ? 'show' : ''}`}>
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!" onClick={handleDropdownToggle}>
                Services
              </a>
              <ul className="navbar-dropdown">
                <li>
                  <a href="#!">Sass</a>
                </li>
                <li>
                  <a href="#!">Less</a>
                </li>
                <li>
                  <a href="#!">Stylus</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!">Portfolio</a>
            </li>
            <li>
              <a href="#!" onClick={handleDropdownToggle}>
                Category
              </a>
              <ul className="navbar-dropdown">
                <li>
                  <a href="#!">Sass</a>
                </li>
                <li>
                  <a href="#!">Less</a>
                </li>
                <li>
                  <a href="#!">Stylus</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
          </ul>
        </nav>
        </div>
        
    </section>
  );
};

export default Navbar;
