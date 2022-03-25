import React, { Fragment } from 'react';
import classes from './Logo.module.css';
import Card from '../layoout/Card';
import { getAllLogo } from '../Data';

const Logo = () => {
  const logoImg = getAllLogo();

  return (
    <Fragment>
      <div className={classes.logo}>
        <h1 className={classes['header-secondary']}>Tools & Skills</h1>
        <Card>
          <div className={classes.wrap}>
            {logoImg.map((el) => (
              <div className={classes.icon} key={el.id}>
                <div className={classes['icon-img']}>
                  <img src={el.image} alt={el.title} />
                  <span className={classes['icon-title']}>{el.title}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default Logo;
