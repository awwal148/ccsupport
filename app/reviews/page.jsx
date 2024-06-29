"use client"
import React from 'react'
import { useState } from 'react'
import { shiftData } from '../constant'

export default function ShiftDetails() {
   const [shiftInfo, setShiftInfo] = useState(Array(shiftData.length).fill(false));
  const [shiftRequestInfo, setShiftRequestInfo] = useState(Array(shiftData.length).fill(false));
   const toggleInfo = (index) => {
    setShiftInfo(shiftInfo.map((info, i) => i === index ? !info : info));
  };
  const toggleRequest = (index) => {
    setShiftRequestInfo(shiftRequestInfo.map((info, i) => i === index ? !info : info));

  };
  return (
   <section className="py-8 px-4 bg-gray-100 ">
      <p className="text-3xl font-bold text-center text-gray-700 mb-9">
        Find and request available shifts in your area here
      </p>
      <div className="space-y-6 md:mx-11">
        {shiftData.map((info, index) => (
          <div key={index} className=" bg-white shadow-md rounded-lg p-6">
            <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
              <div className='flex-1' onClick={() => toggleInfo(index)}>
                <div className='flex flex-col md:flex-row md:items-center md:gap-4'>
                  <p className="text-lg font-bold">{info.shiftDate}</p>
                  <p className="text-lg font-bold">{info.shiftStart} - {info.shiftEnd}</p>
                  <p className="text-lg font-bold">{info.address}</p>
                  <p className='text-lg font-bold'>{info.postCode}</p>
                </div>
                {shiftInfo[index] && (
                  <div className="mt-4">
                    <p className='text-lg font-bold text-gray-600'>{info.jobTitle}</p>
                  </div>
                )}
              </div>
              <div className='flex-shrink-0 mt-4 md:mt-0 flex gap-4'>
                {shiftRequestInfo[index] ? (
                  <button className='py-2 px-4 bg-blue-500 text-white rounded' onClick={() => toggleRequest(index)}>{info.shiftBTN}</button>
                ) : (
                  <button className='py-2 px-4 bg-blue-400 text-white rounded' onClick={() => toggleRequest(index)}>{info.shiftRequested}</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
