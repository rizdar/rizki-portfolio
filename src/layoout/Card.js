import React from 'react';
import classes from './Card.module.css';
import { useInView } from 'react-intersection-observer';

const Card = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  return (
    <div className={classes[inView ? 'card__visible' : 'card']} ref={ref}>
      {props.children}
    </div>
  );
};

export default Card;
