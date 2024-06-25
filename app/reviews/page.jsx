import React from 'react'
import { shiftData } from '../constant'

export default function ShiftDetails() {
  return (
    <section className="">
      <p className="text-3xl font-bold text-center text-gray-700 mt-9">
      Find and request avaiable shifts in your area here
      </p>
      {shiftData.map((info, index) => (
        <div key={index} className="flex flex-col justify-center items-center mb-4">
          {info.shiftDate}
        </div>
      ))}
      <div>
        <p></p>
      </div>
    </section>
  )
}
