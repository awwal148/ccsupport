'use client'
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuthFilter } from '../app/ContextAPI/AuthContext';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/firebase/firebase-config';
import { signOut } from 'firebase/auth';

import Link from 'next/link';

const Navbar = () => {
    const router = useRouter();
  const { user } = useAuthFilter();
  const logOut = async () => {
    await signOut(auth)
    router.push('/sign-up')
  }
    
  useEffect(() => {
    // Redirect to sign-up page if user is not authenticated
    if (!user) {
      router.push('/sign-in');
      console.log(user)
    }
  }, [user, router]);
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Time-sheet', href: '/care-homes' },
  ];

  return (
    <>
     {user && (
        <section className='w-full h-[5rem] flex justify-between items-center px-6 '>
      <div className='cursor-pointer text-blue-500'>
        <Link href='/'>
        {/* <img src={logo} alt='logo img' style={{width: '90px'}} /> */}
        CCsupport
        </Link>
      </div>

      {/* Menu */}
      <div className='flex gap-3'>
      <ul className='hidden md:flex justify-center items-center'>
        {navItems.map((item, index) => (
          <li key={index}>
             <Link href={item.href} className="block delay-[5s] text-blue-500 hover:text-black rounded-md p-2">
              {item.label}
              </Link>
          </li>
        ))}
      </ul>
      <p onClick={logOut} className='sm:text-lg flex flex-col max-sm:flex-end px-2 py-2 rounded-md bg-red-500 font-semibold border-2 hover:border-blue-500  hover:bg-transparent font-montserrat cursor-pointer'>LOGOUT</p> 
      </div>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-20'>
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
       {nav && (
            <ul className='absolute top-0 right-0 bg-white w-[60%] min-h-[600px]  shadow-lg shadow-blue-500/50 p-10 animate-slideIn lg:hidden z-10'>
              {navItems.map((item, index) => (
                <li key={index} className='my-3 text-lg'>
                  <Link href={item.href} onClick={handleClick}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
    </section>
    )}
    </>
  );
};

export default Navbar;
