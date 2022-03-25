import React, { Fragment } from 'react';
import classes from './Container.module.css';
const Container = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>{props.children}</div>
    </Fragment>
  );
};

export default Container;
