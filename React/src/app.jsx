import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <body>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">Vocab Battle</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="play.html">Play</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">Instructions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="scores.html">Scores</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main> App content here</main>

    <footer>
      <span className="text-reset">Created by Elaina Hales</span>
      <a href="https://github.com/elaina-hales/startup">GitHub</a>
    </footer>
  </body>
  );
}