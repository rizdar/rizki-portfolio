import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const btnHandler = () => {
    setClicked((value) => !value);
  };

  return (
    <div className={classes.header}>
      <Link to="/" className={classes['link-logo']}>
        <h4 className={classes.logo}>Rizki Darmawan</h4>
      </Link>

      <nav className={classes[!clicked ? 'main-nav' : 'main-nav-open']}>
        <ul className={classes['main-nav-list']} onClick={btnHandler}>
          <li>
            <NavLink to="/home" activeClassName={classes.active} className={classes['main-nav-link']}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName={classes.active} className={classes['main-nav-link']}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={classes.active} className={classes['main-nav-link']}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="btn">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <button onClick={btnHandler} className={classes['btn-mobile-nav']}>
        <div className={classes['icon-mobile-nav']}>
          <ion-icon name={clicked ? 'close-outline' : 'menu-outline'} size="large"></ion-icon>
        </div>
      </button>
    </div>
  );
};

export default Header;
