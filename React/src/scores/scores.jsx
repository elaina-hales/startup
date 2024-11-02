import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scores.css';

export function Scores() {
  return (
    <main className="text-center">
      <h2>Leaderboard</h2>
      <table className="table table-columns">
        <thead className="table-light">
          <tr>
            <th>Place</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Daniel Smith</td>
            <td>10</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lily Hunt</td>
            <td>9</td>
          </tr>
          <tr>
            <td>3</td>
            <td>user3</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
