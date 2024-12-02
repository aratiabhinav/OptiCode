import React, { useState } from 'react';
import CodeEditor from './Components/CodeEditor';
import OutputSection from './Components/OutputSection';
import LanguageDropdown from './Components/LanguageDropdown';
import ReviewButton from './Components/ReviewButton';
import CompileButton from './Components/CompileButton';
import './App.css';

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('python3'); // Default language

  return (
    <div className="App">
      <h1>Online Code Compiler</h1>
      <div className="compiler-container">
        <div className="editor-container">
          <LanguageDropdown setLanguage={setLanguage} />
          <CodeEditor code={code} setCode={setCode} />
          <CompileButton code={code} language={language} setOutput={setOutput} />
        </div>
        <div className="output-container">
          <OutputSection output={output} />
          <ReviewButton code={code} />
        </div>
      </div>
    </div>
  );
}

export default App;
