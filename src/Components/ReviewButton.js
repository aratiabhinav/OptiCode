// import React from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// function ReviewButton({ code,language,result,setresult }) {
//   const navigate = useNavigate();
//   const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC7hBDEmjf0Sx3eZxzi1PGzenMD9LF6Vkk'; // Assuming Gemini API
  
//   const handleReview = async () => {
//     const payload = { contents: [{ parts: [{ text: "compress the code and give the summery of the given code in "+language+"language"+code }] }] };
//     const data = { code };


//     try {
//       const response = await axios.post(GEMINI_API_URL, payload);
//       setresult(response.data.candidates[0].content.parts[0].text);
//       navigate('/result');
//       // console.log(response.data.candidates[0].content.parts[0].text);
//       // alert('Review: ' + response.data.candidates[0].content.parts[0].text);
//     } catch (error) {
//       setresult('Failed to review code.'+error);
//       // alert('Error reviewing code'+error);

//       navigate('/result');
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleReview} className='aplo'>Review Code</button>
//       <div></div>
//     </div>
//   );
// }

// export default ReviewButton;



// import React from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function ReviewButton({ code, language, setresult }) {
//   const GEMINI_API_URL =
//     'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC7hBDEmjf0Sx3eZxzi1PGzenMD9LF6Vkk';
  
//   const navigate = useNavigate();

//   const handleReview = async () => {
//     const payload = {
//       contents: [
//         {
//           parts: [
//             {
//               text: `Summarize the following ${language} code and compress it:\n${code}`,
//             },
//           ],
//         },
//       ],
//     };

//     try {
//       const response = await axios.post(GEMINI_API_URL, payload);
//       const reviewText = response.data.candidates[0].content.parts[0].text;
//       setresult(reviewText); // Update the result state
//       navigate('/result');   // Navigate to the result page
//     } catch (error) {
//       console.error('Error reviewing code:', error);
//       setresult('Failed to review code.');
//       navigate('/result');
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleReview}>Review Code</button>
//     </div>
//   );
// }

// export default ReviewButton;



import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ReviewButton({ code, language, setresult }) {
  const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC7hBDEmjf0Sx3eZxzi1PGzenMD9LF6Vkk'; // Use your API key here

  const navigate = useNavigate();

  const handleReview = async () => {
    const payload = {
      contents: [
        { parts: [{ text: `Summarize and review the following code in ${language}:\n${code}` }] },
      ],
    };

    try {
      const response = await axios.post(GEMINI_API_URL, payload);

      // Check for review and summary
      const reviewText = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No review available';
      // const summaryText = response?.data?.candidates?.[0]?.content?.parts?.[1]?.text || 'No summary available';

      // Log and set both review and summary
      console.log('Review:', reviewText);
      // console.log('Summary:', summaryText);

      // Set the result with both review and summary
      // setresult(`Review:\n${reviewText}\n\nSummary:\n${summaryText}`);
      setresult(`Review:\n${reviewText}`);

      navigate('/result'); // Navigate to the result page
    } catch (error) {
      console.error('Error reviewing code:', error);
      setresult('Failed to review code due to an error.');
      navigate('/result'); // Navigate to the result page on error
    }
  };

  return (
    <div>
      <button onClick={handleReview} className="aplo">Review Code</button>
    </div>
  );
}

export default ReviewButton;
