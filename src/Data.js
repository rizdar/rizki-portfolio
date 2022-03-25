import react from './UI/logo/react.svg';
import redux from './UI/logo/redux.svg';
import nodejs from './UI/logo/nodejs.svg';
import mongodb from './UI/logo/mongodb.svg';
import javascript from './UI/logo/javascript.svg';
import sass from './UI/logo/sass.svg';
import bootstrap from './UI/logo/bootstrap.svg';
import css from './UI/logo/css.svg';
import html from './UI/logo/html.svg';
import git from './UI/logo/git.svg';
import stackoverflow from './UI/logo/stack-overflow.svg';
import visualstudiocode from './UI/logo/visual-studio-code.svg';

//////////////////////////////////////////////////////

import htmlcss from './UI/certificate/html-css.jpg';
import responsiveweb from './UI/certificate/responsiveweb.png';
import js1 from './UI/certificate/js1.jpg';
import js2 from './UI/certificate/js2.jpg';

////////////////////////////////////
import portfolioImg from './UI/img/p1.png';
import omnifood from './UI/img/p2.png';
import natours from './UI/img/p3.png';
import guessNummber from './UI/img/p4.png';

import p1min from './UI/img/p1-min.png';
import p2min from './UI/img/p2-min.png';
import p3min from './UI/img/p3-min.png';
import p4min from './UI/img/p4-min.png';

const data = [
  {
    id: 'l1',
    title: 'React Js',
    image: react,
  },
  {
    id: 'l2',
    title: 'Redux',
    image: redux,
  },
  {
    id: 'l3',
    title: 'Express Js',
    image: nodejs,
  },
  {
    id: 'l4',
    title: 'MongoDb',
    image: mongodb,
  },
  {
    id: 'l5',
    title: 'Javascript',
    image: javascript,
  },
  {
    id: 'l6',
    title: 'Sass',
    image: sass,
  },
  {
    id: 'l7',
    title: 'Bootstrap',
    image: bootstrap,
  },
  {
    id: 'l8',
    title: 'Css',
    image: css,
  },
  {
    id: 'l9',
    title: 'Html',
    image: html,
  },
  {
    id: 'l10',
    title: 'Stackoverflow',
    image: stackoverflow,
  },
  {
    id: 'l11',
    title: 'VS Code',
    image: visualstudiocode,
  },
  {
    id: 'l12',
    title: 'Github',
    image: git,
  },
];

const certificate = [
  {
    id: 'c1',
    image: htmlcss,
  },
  {
    id: 'c2',
    image: responsiveweb,
  },
  {
    id: 'c3',
    image: js1,
  },
  {
    id: 'c4',
    image: js2,
  },
];

const portfolio = [
  {
    id: 'p1',
    image: portfolioImg,
    imagemin: p1min,
    title: 'Portfolio',
    description: 'Is a personal portfolio, built using react js',
    link: '#',
  },
  {
    id: 'p2',
    title: 'Omnifood',
    image: omnifood,
    imagemin: p2min,
    description: 'Omnifood is a landing page website part of the html and css course I took',
    link: 'https://omnifood-rizki.netlify.app/',
  },
  {
    id: 'p3',
    title: 'Natours',
    image: natours,
    imagemin: p3min,
    description: 'Natours is a landing page part of the advanced css and sass course that I took',
    link: 'https://natours-rizki.netlify.app/',
  },
  {
    id: 'p4',
    title: 'Guess Number',
    image: guessNummber,
    imagemin: p4min,
    description: 'Guss Number is a simple game using the javascript programming language ',
    link: 'https://guessnumber-rizki.netlify.app/',
  },
];

export function getAllCertificate() {
  return certificate;
}

export function getAllLogo() {
  return data;
}
export function getAllPortfolio() {
  return portfolio;
}
