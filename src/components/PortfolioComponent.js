import React, { useState } from 'react';
import { getAllPortfolio } from '../Data';
import classes from './Portfolio.module.css';

import { useInView } from 'react-intersection-observer';

const PortfolioComponent = () => {
  const [setClass, setSetClass] = useState(false);
  const [src, setSrc] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '200px',
  });

  const imgLoad = () => {
    if (!inView) {
      return;
    }

    setTimeout(() => {
      setSetClass(true);
      setSrc(true);
    }, 500);
  };
  imgLoad();

  const classImg = setClass ? 'portfolio-img' : 'portfolio-img__lazy';
  return (
    <>
      <section className={classes['portfolio-section']}>
        <h1 className={classes['header-secondary']}>Portfolio</h1>
        <div className={classes.wrap}>
          {getAllPortfolio().map((el) => (
            <div className={classes.portfolio} key={el.id}>
              <img src={src ? el.image : el.imagemin} alt={el.description} className={classes[classImg]} ref={ref} />
              <p className={classes['portfolio-title']}>{el.title}</p>
              <p className={classes['portfolio-description']}>{el.description}</p>
              <a href={el.link} className="btn">
                Launch Demo
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PortfolioComponent;
