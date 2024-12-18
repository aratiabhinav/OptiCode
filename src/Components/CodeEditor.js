// import React from 'react';

// function CodeEditor({ code, setCode }) {
//   return (
//     <div>
//       <textarea
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         placeholder="Write your code here"
//         rows="20"
//         cols="60"
//       />
//     </div>
//   );
// }

// export default CodeEditor;



import React, { useEffect, useState } from "react";

function CodeEditor({ code, setCode }) {
  const [lineNumbers, setLineNumbers] = useState([]);

  useEffect(() => {
    // Update the line numbers based on the number of lines in the code
    const lines = code.split("\n").length || 1;
    setLineNumbers([...Array(lines).keys()]);
  }, [code]);

  return (
    <div className="code-editor-wrapper">
      <div className="line-numbers">
        {lineNumbers.map((line) => (
          <div key={line} className="line-number">
            {line + 1}
          </div>
        ))}
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here"
        className="code-area"
      />
    </div>
  );
}

export default CodeEditor;
