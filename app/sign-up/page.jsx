'use client'
import { useState } from 'react';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { useAuthFilter } from '../ContextAPI/AuthContext';
import { auth } from '../firebase/firebase-config';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// ... (previous imports)

const SignUp = () => {
  const { createUser } = useAuthFilter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  // Validation error states for each field
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const router = useRouter();

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Reset all previous validation errors
    setEmailError('');
    setPasswordError('');
    setFirstNameError('');
    setLastNameError('');

    // Check and set validation errors for each field
    if (!email) {
      setEmailError('Email is required.');
    }

    if (!password) {
      setPasswordError('Password is required.');
    }

    if (!firstName) {
      setFirstNameError('First Name is required.');
    }

    if (!lastName) {
      setLastNameError('Last Name is required.');
    }

    // If any validation error exists, return without signing up
    if (emailError || passwordError || firstNameError || lastNameError) {
      return;
    }

    try {
      const res = await createUser(email, password, firstName, lastName);
      console.log({ res });
      sessionStorage.setItem('user', true);
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
      router.push('/');
    } catch (e) {
      console.error(e);
      setError(e.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Sign Up</h1>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          required
        />
        {firstNameError && <p className="text-red-500 font-palanquin font-semibold">{firstNameError}</p>}

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          required
        />
        {lastNameError && <p className="text-red-500 font-palanquin font-semibold">{lastNameError}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          required
        />
        {emailError && <p className="text-red-500 font-palanquin font-semibold">{emailError}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          required
        />
        {passwordError && <p className="text-red-500 font-palanquin font-semibold">{passwordError}</p>}

        <button
          onClick={handleSignUp}
          className="w-full p-3 bg-blue-500 rounded text-white hover:bg-blue-600"
        >
          Sign Up
        </button>
        <p className='font-semibold mt-2'>You already have an account? <Link href='/sign-in' className='text-red-500 font-semibold'>Sign In</Link></p>
      </div>
      {error && <p className="text-red-500 font-palanquin font-semibold">{error}</p>}
    </div>
  );
};

export default SignUp;
