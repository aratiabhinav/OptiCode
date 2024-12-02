import React from 'react';
import axios from 'axios';

function ReviewButton({ code }) {
  const GEMINI_API_URL = 'AIzaSyC7hBDEmjf0Sx3eZxzi1PGzenMD9LF6Vkk'; // Assuming Gemini API

  const handleReview = async () => {
    const data = { code };

    try {
      const response = await axios.post(GEMINI_API_URL, data);
      alert('Review: ' + response.data.review);
    } catch (error) {
      alert('Error reviewing code');
    }
  };

  return (
    <div>
      <button onClick={handleReview}>Review Code</button>
    </div>
  );
}

export default ReviewButton;
