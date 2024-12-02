import React from 'react';

function LanguageDropdown({ setLanguage }) {
  return (
    <div>
      <label htmlFor="language">Choose Language: </label>
      <select id="language" onChange={(e) => setLanguage(e.target.value)}>
        <option value="python3">Python</option>
        <option value="java">Java</option>
        <option value="cpp">C++</option>
        <option value="javascript">JavaScript</option>
        <option value="ruby">Ruby</option>
      </select>
    </div>
  );
}

export default LanguageDropdown;
