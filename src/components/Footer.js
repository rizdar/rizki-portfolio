import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <p className={classes['footer__copyright']}>
          Build with &nbsp;
          <i className={classes['footer-icon']}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </i>
          &nbsp; in beautiful South Tangerang, Indonesia
        </p>
        <p className={classes['footer-name']}>&copy; 2022 Copyright by Rizki Darmawan</p>
        <div className={classes['footer-icons']}>
          <a className={classes['footer-icon_i']} href="https://www.instagram.com/rizdar96/">
            <ion-icon size="small" name="logo-instagram"></ion-icon>
          </a>
          <a className={classes['footer-icon_i']} href="https://github.com/rizdar">
            <ion-icon size="small" name="logo-github"></ion-icon>
          </a>
          <a className={classes['footer-icon_i']} href="https://www.linkedin.com/in/rizki-darmawan-48141221b/">
            <ion-icon size="small" name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
