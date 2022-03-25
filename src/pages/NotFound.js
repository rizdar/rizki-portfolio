import React from 'react';
import classes from '../layoout/Notfound.module.css';

const NotFound = () => {
  return (
    <div className={classes.notfound}>
      <h1 className={classes['notfound-text']}>Page Not Found</h1>
    </div>
  );
};

export default NotFound;
