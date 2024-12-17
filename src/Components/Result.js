import React from 'react';
import { useNavigate } from 'react-router-dom';

function Result({ result }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Code Review Result</h2>
      <pre>{result || 'No result to display'}</pre>
      <button onClick={() => navigate('/')}>Back to Input</button>
    </div>
  );
}

export default Result;
