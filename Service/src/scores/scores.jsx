import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scores.css';

export function Scores() {
  const [scores, setScores] = React.useState([]);

  React.useEffect(() => {
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      setScores(JSON.parse(scoresText));
    }
  }, []);

  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }

  return (
    <main className='container-fluid text-center'>
      <h2>Leaderboard</h2>
      <table className='table table-columns'>
        <thead className='table-light'>
          <tr>
            <th>Place</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody id='scores'>{scoreRows}</tbody>
      </table>
    </main>
  );
}