import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NavBar from './NavBar';
import Main from './Main';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';
// import GitHubCards from './Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Main />
    <Skills />
    <Projects />
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
