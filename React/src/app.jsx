import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login.jsx';
import { Play } from './play/play.jsx';
import { Scores } from './scores/scores.jsx';
import { About } from './about/about.jsx';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './app.css';


function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className="body">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">Vocab Battle</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className='nav-link' to=''>Home</NavLink>
                  </li>
                  {authState === AuthState.Authenticated && (
                    <li className="nav-item">
                      <NavLink className='nav-link' to='play'>Play</NavLink>
                    </li>
                  )}
                  {authState === AuthState.Authenticated && (
                    <li className="nav-item">
                      <NavLink className='nav-link' to='scores'>Scores</NavLink>
                    </li>
                  )}
                  <li className="nav-item">
                    <NavLink className='nav-link' to='about'>About</NavLink>
                  </li>
                </ul>
            </div>
          </div>
        </nav>

        <Routes>
        <Route path='/' element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            } exact />
          <Route path='/play' element={<Play userName={userName} />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
            <span className="text-reset">Created by Elaina Hales</span>
            <a href="https://github.com/elaina-hales/startup">GitHub</a>
        </footer>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossOrigin="anonymous"
        ></script>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;