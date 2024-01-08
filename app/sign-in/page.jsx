'use client'
import { useState } from 'react';
import { useAuthFilter } from '../ContextAPI/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignIn = () => {
  const { signIn } = useAuthFilter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const res = await signIn(email, password);
      console.log({ res });
      sessionStorage.setItem('user', true);
      setEmail('');
      setPassword('');
      router.push('/');
      setTimeout(() => {
        setError('');
      }, 5000);
    } catch (e) {
      // Handle specific error related to wrong password
      if (e.code === 'auth/wrong-password') {
        setError('Invalid email or password');
      } else {
        setError(e.message);
        setTimeout(() => {
        setError('');
      }, 5000);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        {error && (
          <p className="text-red-500 mb-4">
            <strong>{error && 'Invalid Email or Password'}</strong>
          </p>
        )}
        <button
          onClick={handleSignIn}
          className="w-full p-3 bg-blue-500 rounded text-white hover:bg-blue-600"
        >
          Sign In
        </button>
        <p className="font-semibold mt-2">
          Create an Account<Link href="/sign-up" className="text-red-500 font-semibold"> SiGN UP
          </Link>
        </p>
        <Link href='/password-reset' className='flex flex-col flex-end mt-2 text-red-500'>Forgot Password?</Link>
      </div>
    </div>
  );
};

export default SignIn;
