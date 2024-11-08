import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <>
      <main className="container-fluid text-center">
        <div>
          <img src="VBicon.png" alt="Vocab Battle"/>
          <h1>Welcome to Vocab Battle</h1>
          <p>To save your score, sign in below:</p>
        </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>@</span>
            <input className='form-control' type='text' placeholder="Username" aria-label="Username"  value={userName} onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>🔒</span>
            <input className='form-control' type='password' placeholder="Password" aria-label="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button className="btn btn-primary" variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
            Log in and begin game
          </Button>
          <Button className="btn btn-secondary" variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
            Create
          </Button>
      </main>
      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}