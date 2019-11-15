import React from 'react';
import ReactDOM from 'react-dom';

import './scss/App.scss';
import './scss/Sidebar.scss';
import './scss/Home.scss';
import './scss/Explore.scss';
import './scss/Feedback.scss';
import './scss/Footer.scss';
import './scss/HowItWorks.scss';

import './css/font-awesome/css/fa-brands.css';
import './css/font-awesome/css/fa-regular.css';
import './css/font-awesome/css/fa-solid.css';
import './css/font-awesome/css/fontawesome-all.css';
import './css/font-awesome/css/fontawesome.css';


import './css/vendor.css';
import './css/base.css';
import './css/fonts.css';
import './css/micons/micons.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
