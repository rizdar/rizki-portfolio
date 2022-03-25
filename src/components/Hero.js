import React from 'react';
import { Link } from 'react-router-dom';
import mainImg from '../UI/img/mainImg.svg';

import classes from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <section className={classes['section-hero']}>
        <div className={classes['hero-visible']}>
          <div className={classes['hero-text-box']}>
            <h1 className={classes['sub-heading']}>Hi, I'm Rizki Darmawan</h1>
            <h1 className={classes['heading-primary']}>Junior Fullstack Developer</h1>
            <p className={classes['hero-description']}>I'm a junior full-stack web developer with modern technology, and also has a degree in Informatics Engineering.</p>
            <Link to="/contact" className="btn">
              Let's work together
            </Link>

            <div className={classes['hero-link']}>
              <a href="https://www.instagram.com/rizdar96/">
                <ion-icon size="large" name="logo-instagram"></ion-icon>
              </a>
              <a href="https://github.com/rizdar">
                <ion-icon size="large" name="logo-github"></ion-icon>
              </a>
              <a href="https://www.linkedin.com/in/rizki-darmawan-48141221b/">
                <ion-icon size="large" name="logo-linkedin"></ion-icon>
              </a>
            </div>
          </div>

          <div className={classes['hero-img-box']}>
            <img src={mainImg} alt="Man front of computer" className={classes.img} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
