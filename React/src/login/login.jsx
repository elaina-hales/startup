import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

export function Login() {
  return (
    <main className="container-fluid text-center">
      <div>
        <img src="VBicon.png" alt="Vocab Battle"/>
        <h1>Welcome to Vocab Battle</h1>
        <p>To save your score, sign in below:</p>
        <form method="get" action="play.html">
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">&#128274;</span>
            <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
          </div>
          <button id="submit" className="btn btn-primary">Log in and begin game</button>
          <button id="submit" className="btn btn-secondary">Create</button>
        </form>
      </div>
    </main>
  );
}
