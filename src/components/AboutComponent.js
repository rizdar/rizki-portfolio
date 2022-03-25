import React from 'react';
import classes from './About.module.css';

const About = () => {
  return (
    <section className={classes['section-about']}>
      <div className={classes.container}>
        <div className={classes.about}>
          <div className={classes['about-img-box']} role="img" aria-label="my photo"></div>
          <div className={classes['about-text-box']}>
            <h2 className={classes['heading-secondary']}>About Me</h2>
            <div className={classes['icon-wrap']}>
              <div className={classes.icon}>
                <ion-icon name="person" size="large"></ion-icon>
              </div>
              <span className={classes['about-text']}>Name : Rizki Darmawan S.Kom</span>
            </div>

            <div className={classes['icon-wrap']}>
              <div className={classes.icon}>
                <ion-icon name="calendar" size="large"></ion-icon>
              </div>
              <span className={classes['about-text']}>Born : 1996-03-30</span>
            </div>

            <div className={classes['icon-wrap']}>
              <div className={classes.icon}>
                <ion-icon name="home" size="large"></ion-icon>
              </div>
              <span className={classes['about-text']}>Address : South Tangerang, Indonesia</span>
            </div>

            <div className={classes['icon-wrap']}>
              <div className={classes.icon}>
                <ion-icon name="school" size="large"></ion-icon>
              </div>
              <span className={classes['about-text']}>Last Education : Bachelor of Computers at Pamulang University</span>
            </div>

            <div className={classes['icon-wrap']}>
              <div className={classes.icon}>
                <ion-icon name="accessibility" size="large"></ion-icon>
              </div>
              <span className={classes['about-text']}>Hobbies : Coding, Learning, Football</span>
            </div>
            <div className={classes['icon-wrap']}>
              <div className={classes.icon}>
                <ion-icon name="reader" size="large"></ion-icon>
              </div>
              <span className={classes['about-text']}>
                Summary : I learned the basics of programming from college, and many online courses I have studied and other platforms, I have the ability to make responsive websites and build rest api
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
