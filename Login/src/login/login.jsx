import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
      <main className='container-fluid text-center'>
        <div>
          <img src="VBicon.png" alt="Vocab Battle"/>
          <h1>Welcome to Vocab Battle</h1>
          <div>
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
        </div>
      </main>
  );
}