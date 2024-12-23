import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodeEditor from "./Components/CodeEditor";
import OutputSection from "./Components/OutputSection";
import LanguageDropdown from "./Components/LanguageDropdown";
import ReviewButton from "./Components/ReviewButton";
import CompileButton from "./Components/CompileButton";
import Result from "./Components/Result";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("python3");
  const [result, setResult] = useState(""); // Result from reviewing the code

  return (
    <Router>
      <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60px', backgroundColor: '#007bff' }}>
  <h1 style={{ margin: 0, color: 'white', fontSize: '24px' }}>OptiCode</h1>
</nav>

      <div className="App">
        
        <Routes>
          {/* Input Page */}
          <Route
            path="/"
            element={
              <div className="compiler-container">
                <div className="editor-container">
                  {/* Top Right Review Button */}
                  <div className="review-button-wrapper">
                    <ReviewButton
                      code={code}
                      language={language}
                      setresult={setResult}
                    />
                  </div>
                  <LanguageDropdown setLanguage={setLanguage} />
                  <CodeEditor code={code} setCode={setCode} />
                  <CompileButton
                    code={code}
                    language={language}
                    setOutput={setOutput}
                  />
                </div>
                <div className="output-container">
                  <OutputSection output={output} />
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
