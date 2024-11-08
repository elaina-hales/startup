import React from 'react';
// import Button from 'react-bootstrap/Button';
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
      <p>To save your score, sign in below:</p>
      <div className='input-group mb-3'>
        <span className='input-group-text'>@</span>
        <input className='form-control' type='text' placeholder="Username" aria-label="Username"  value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div className='input-group mb-3'>
        <span className='input-group-text'>🔒</span>
        <input className='form-control' type='password' placeholder="Password" aria-label="Password" onChange={(e) => setPassword(e.target.value)} />
      </div>
        <button className="btn btn-primary" onClick={() => loginUser()} disabled={!userName || !password}>
          Log in and begin game
        </button>
        <button className="btn btn-secondary" onClick={() => createUser()} disabled={!userName || !password}>
          Create
        </button>
      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}