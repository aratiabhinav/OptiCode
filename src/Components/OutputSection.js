// import React from 'react';

// function OutputSection({ output }) {
//   return (
//     <div>
//       <h3>Output:</h3>
//       <pre>{output}</pre>
//     </div>
//   );
// }

// export default OutputSection;

import React from "react";

function OutputSection({ output }) {
  return (
    <div className="output-wrapper">
      <h3 className="output-header">Output:</h3>
      <div className="output-area">
        <pre className="output-content">{output}</pre>
      </div>
    </div>
  );
}

export default OutputSection;
