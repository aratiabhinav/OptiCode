import React from 'react';
import axios from 'axios';

function CompileButton({ code, language, setOutput }) {
  const JDoodle_API_URL = 'https://api.jdoodle.com/v1/execute'; // JDoodle API endpoint
  const JDoodle_CLIENT_ID = '38c0df86813c8760d7ca3043b3ec5215';
  const JDoodle_CLIENT_SECRET = 'e8d70ba321d51da4de8b7c262ca080200c4b258acf552a3f4aa00c10fb49056f';

  const handleCompile = async () => {
    const data = {
      clientId: JDoodle_CLIENT_ID,
      clientSecret: JDoodle_CLIENT_SECRET,
      script: code,
      language: language,
      versionIndex: '0', // Example for Python version
    };

    try {
      const response = await axios.post(JDoodle_API_URL, data);
      setOutput(response.data.output);
    } catch (error) {
      setOutput('Error executing the code');
    }
  };

  return (
    <div>
      <button onClick={handleCompile}>Run Code</button>
    </div>
  );
}

export default CompileButton;
