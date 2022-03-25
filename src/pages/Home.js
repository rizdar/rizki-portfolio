import React from 'react';
import { Fragment } from 'react';
import Certificate from '../components/Certificate';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Logo from '../components/Logo';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Logo />
      <Features />
      <Certificate />
    </Fragment>
  );
};

export default Home;
