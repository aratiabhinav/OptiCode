import React from 'react';

function OutputSection({ output }) {
  return (
    <div>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
}

export default OutputSection;
