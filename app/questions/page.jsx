'use client'
import React, { useState } from 'react';
import { db } from '../firebase/firebase-config'; // Import your firebase configuration

const LikelyQuestionsSection = ({ userId }) => {
  const [questions, setQuestions] = useState('');

  const handleQuestionsSubmit = async () => {
    try {
      // Assuming you have a 'likelyQuestions' collection in Firestore
      await db.collection('likelyQuestions').add({
        userId,
        questions,
        timestamp: new Date(),
      });

      // Additional logic or feedback after submitting questions
      console.log('Questions submitted successfully!');
      // Clear the textarea after submitting
      setQuestions('');
    } catch (error) {
      console.error('Error submitting questions:', error.message);
      // Handle errors or provide feedback to the user
    }
  };

  return (
    <div className="mt-7">
      <p className="font-bold text-3xl px-4">Likely Questions</p>
      <div className="mx-auto mt-3 shadow-lg px-3">
        <textarea
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          placeholder="Type your likely questions concerning your timesheet..."
          className="w-full h-40 p-4 mb-4 bg-gray-200 rounded outline-none"
        ></textarea>
        <button
          onClick={handleQuestionsSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 mb-3"
        >
          Submit Questions
        </button>
      </div>
    </div>
  );
};

export default LikelyQuestionsSection;
