import React from 'react';
import Link from 'next/link';

const CareHomes = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 bg-gray-200 rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-red-500">Choose a Care Home</h1>
        <div className="space-y-4 text-center">
          <Link href="/care-homes/fremantle" className="block px-4 py-4 bg-blue-400 text-white rounded-md hover:bg-blue-600">
            <p className='font-semibold text-black'>FREMANTLE TRUST</p>
          </Link>
          <Link href="/care-homes/the-croft" className="block px-4 py-4 bg-blue-400 text-white rounded-md hover:bg-blue-600">
            <p className='font-semibold text-black'>THE CROFT</p>
          </Link>
          <Link href="/care-homes/care-home" className="block px-4 py-4 bg-blue-400 text-white rounded-md hover:bg-blue-600">
            <p className='font-semibold text-black'>CARE HOME</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareHomes;
