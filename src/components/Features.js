import React from 'react';
import classes from './Features.module.css';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <section className={classes.features}>
      <div className={classes[inView ? 'section-feature' : 'section-feature_none']} ref={ref}>
        <div className={classes.feature}>
          <div className={classes['feature-icon']}>
            <ion-icon name="battery-charging-outline" size="large"></ion-icon>
          </div>
          <p className={classes['feature-title']}>Modern technology</p>
          <p className={classes['feature-text']}>I use modern and latest technology to create web applications, and I also like to learn new things</p>
        </div>

        <div className={classes.feature}>
          <div className={classes['feature-icon']}>
            <ion-icon name="school" size="large"></ion-icon>
          </div>
          <p className={classes['feature-title']}>Bachelor of Computer Science</p>
          <p className={classes['feature-text']}>I have degree related to computer and digital world, i learned basic programming from campus</p>
        </div>

        <div className={classes.feature}>
          <div className={classes['feature-icon']}>
            <ion-icon name="happy-outline" size="large"></ion-icon>
          </div>

          <p className={classes['feature-title']}>Good personality</p>
          <p className={classes['feature-text']}>I am a person who always thinks positive, has responsibility and is also friendly</p>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
