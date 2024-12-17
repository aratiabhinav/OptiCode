// import React, { useState } from 'react';
// import CodeEditor from './Components/CodeEditor';
// import OutputSection from './Components/OutputSection';
// import LanguageDropdown from './Components/LanguageDropdown';
// import ReviewButton from './Components/ReviewButton';
// import CompileButton from './Components/CompileButton';
// import './App.css';

// function App() {
//   const [code, setCode] = useState('');
//   const [output, setOutput] = useState('');
//   const [language, setLanguage] = useState('python3'); // Default language
//   const [result,setresult]=useState('');

//   return (
//     <div className="App">
//       <h1>OptiCode</h1>
//       <div className="compiler-container">
//         <div className="editor-container">
//           <LanguageDropdown setLanguage={setLanguage} />
//           <CodeEditor code={code} setCode={setCode} />
//           <CompileButton code={code} language={language} setOutput={setOutput} />
//         </div>
//         <div className="output-container">
//           {/* <OutputSection output={output} /> */}
//           <ReviewButton code={code}  language={language} result={result} setresult={setresult}/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CodeEditor from './Components/CodeEditor';
import OutputSection from './Components/OutputSection';
import LanguageDropdown from './Components/LanguageDropdown';
import ReviewButton from './Components/ReviewButton';
import CompileButton from './Components/CompileButton';
import Result from './Components/Result';
import './App.css';

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('python3');
  const [result, setResult] = useState(''); // Result from reviewing the code

  return (
    <Router>
      <div className="App">
        <h1>OptiCode</h1>
        <Routes>
          {/* Input Page */}
          <Route
            path="/"
            element={
              <div className="compiler-container">
                <div className="editor-container">
                  <LanguageDropdown setLanguage={setLanguage} />
                  <CodeEditor code={code} setCode={setCode} />
                  <CompileButton code={code} language={language} setOutput={setOutput} />
                </div>
                <div className="output-container">
                  <OutputSection output={output} />
                  <ReviewButton
                    code={code}
                    language={language}
                    setresult={setResult}
                  />
                </div>
              </div>
            }
          />
          {/* Result Page */}
          <Route
            path="/result"
            element={<Result result={result} />} // Pass the result prop here
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
