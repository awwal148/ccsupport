'use client'
import { useState } from 'react';
import { auth } from '../firebase/firebase-config';
import { useAuthFilter } from '../ContextAPI/AuthContext';
import { useRouter } from 'next/navigation';

const Reset = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('')
  const router = useRouter();
  const { resetPassword } = useAuthFilter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.elements.email.value;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      setErrorMessage('Invalid email format');
      return;
    }

    try {
      await resetPassword(emailVal);
      // Additional logic after password reset
       setSuccessMessage('Password reset link sent. Check your email.');
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1 className="text-white text-2xl mb-5">Reset Password</h1>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          />
          {errorMessage && (
            <p className="text-red-500 mb-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 rounded text-white hover:bg-blue-600"
          >
            Reset Password
          </button>
          {successMessage && (
            <p className="text-green-500 mb-4">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Reset;
