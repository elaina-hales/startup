import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export function Login() {
  return (
    <main class="container-fluid text-center">
      <div>
        <img src="VBicon.png" alt="Vocab Battle"/>
        <h1>Welcome to Vocab Battle</h1>
        <p>To save your score, sign in below:</p>
        <form method="get" action="play.html">
          <div class="input-group mb-3">
            <span class="input-group-text">@</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">&#128274;</span>
            <input type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
          </div>
          <button id="submit" class="btn btn-primary">Log in and begin game</button>
          <button id="submit" class="btn btn-secondary">Create</button>
        </form>
      </div>
    </main>
  );
}
