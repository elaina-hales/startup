import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login.jsx';
import { Play } from './play/play.jsx';
import { Scores } from './scores/scores.jsx';
import { About } from './about/about.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <nav className="body navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">Vocab Battle</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className='nav-link' to=''>Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to='play'>Play</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to='scores'>Scores</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to='about'>About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/play' element={<Play />} />
        <Route path='/scores' element={<Scores />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <footer>
        <span className="text-reset">Created by Elaina Hales</span>
        <a href="https://github.com/elaina-hales/startup">GitHub</a>
      </footer>
  </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid text-center'>404: Return to sender. Address unknown.</main>;
}