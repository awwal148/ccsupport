'use client'
import React, { useEffect } from 'react';
import { useAuthFilter } from '../app/ContextAPI/AuthContext';
import { useRouter } from 'next/navigation';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const router = useRouter();
const { user } = useAuthFilter();
  useEffect(() => {
    // Redirect to sign-up page if user is not authenticated
    if (!user) {
      router.push('/sign-up');
      console.log(user)
    }
  }, [user, router]);
  return (
    <>
    {user && (
    <div className="mt-10 bg-black text-white py-8 px-2">
      <div className="container mx-auto">
        <p className="text-xl font-bold mb-4">Contact Us</p>
        <div className="flex items-center mb-4">
          <span className="mr-2">
            <FaEnvelope />
          </span>
          <p>info@example.com</p>
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-2">
            <FaPhone />
          </span>
          <p>(123) 456-78900</p>
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-2">
            <FaMapMarkerAlt />
          </span>
          <p>123 Main Street, Cityville</p>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebook />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>&copy; 2024 Complete Circle Support LTD. All rights reserved.</p>
      </div>
    </div>
    )}
    </>
  );
};

export default Footer;
