import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
      <main className='container-fluid bg-secondary text-center'>
        <div>
          {authState !== AuthState.Unknown && <h1>Welcome to Simon</h1>}
          {authState === AuthState.Authenticated && (
            <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
          )}
          {authState === AuthState.Unauthenticated && (
            <Unauthenticated
              userName={userName}
              onLogin={(loginUserName) => {
                onAuthChange(loginUserName, AuthState.Authenticated);
              }}
            />
          )}
        </div>
      </main>
  );
}



<main className="container-fluid text-center">
      <div>
        <img src="VBicon.png" alt="Vocab Battle"/>
        <h1>Welcome to Vocab Battle</h1>
        <p>To save your score, sign in below:</p>
        <form method="get">
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