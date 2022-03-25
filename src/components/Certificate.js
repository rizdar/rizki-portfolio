import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import classes from './Certificate.module.css';
import { getAllCertificate } from '../Data';
import { useInView } from 'react-intersection-observer';

const Certificate = () => {
  const images = getAllCertificate();

  const [width, setWidth] = useState(0);

  const carousel = useRef();

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className={classes['section-certificate']}>
      <h1 className={classes['header-secondary']}>Certificate</h1>
      <div className={classes[inView ? 'certificate_visible' : 'certificate']} ref={ref}>
        <motion.div ref={carousel} className={classes.carousel} whileInView={{ cursor: 'grabbing' }}>
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className={classes['inner-carousel']}>
            {images.map((image, index) => {
              return (
                <motion.div className={classes.item} key={image.image} whileInView={{ slideIndex: index }}>
                  <img src={image.image} alt={image.title} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificate;
