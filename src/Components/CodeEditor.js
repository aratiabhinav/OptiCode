import React from 'react';

function CodeEditor({ code, setCode }) {
  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here"
        rows="20"
        cols="60"
      />
    </div>
  );
}

export default CodeEditor;
