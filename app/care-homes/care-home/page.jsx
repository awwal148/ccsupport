'use client'
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Timesheet = () => {
  const [startTime, setStartTime] = useState('');
  const [selectedCareHome, setSelectedCareHome] = useState('');
  const [incidentNote, setIncidentNote] = useState('');
  const [file, setFile] = useState(null);
  const [startPeriod, setStartPeriod] = useState('AM');
  const [endTime, setEndTime] = useState('');
  const [endPeriod, setEndPeriod] = useState('AM');
  const [breakHours, setBreakHours] = useState('');
  const [shiftPeriod, setShiftPeriod] = useState('');
  const [totalHoursWorked, setTotalHoursWorked] = useState('');
  const [date, setDate] = useState(new Date());
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const calculateTotalHoursWorked = () => {
      if (startTime && startPeriod && endTime && endPeriod && breakHours) {
        const start = moment(`2022-01-01 ${startTime} ${startPeriod}`, 'YYYY-MM-DD hh:mm A');
        const end = moment(`2022-01-01 ${endTime} ${endPeriod}`, 'YYYY-MM-DD hh:mm A');
        const breakTime = parseFloat(breakHours) || 0;

        let diff = end.diff(start, 'hours'); // in hours
        diff -= breakTime;

        setTotalHoursWorked(diff >= 0 ? diff.toFixed(2) : "Invalid calculation");
      }
    };

    calculateTotalHoursWorked();
  }, [startTime, startPeriod, endTime, endPeriod, breakHours]);

    const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
   };

  const handleSubmit = () => {
    // Basic form validation
    const errors = {};

    if (!selectedCareHome) {
      errors.selectedCareHome = 'Care Home is required';
    }

    if (!hoursWorked) {
      errors.hoursWorked = 'Hours Worked is required';
    }

    if (!breakHours) {
      errors.breakHours = 'Break Hours is required';
    }

    if (!shiftPeriod) {
      errors.shiftPeriod = 'Shift Period is required';
    }

    if (!incidentNote) {
      errors.incidentNote = 'Incident Note is required';
    }

    if (Object.keys(errors).length === 0) {
      // If no errors, handle form submission logic
      console.log('Form submitted!');
    } else {
      // If errors, update the state to display validation messages
      setFormErrors(errors);
    }
  };
  return (
    <div className="mt-10 bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-black">Care Home</h1>

      {/* ... (unchanged) ... */}
      {/* Care Home Selection */}
       <div className="mb-6">
         <label className="block text-black font-semibold mb-2">Care Home Branch:</label>
         <select
           className={`sm:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 ${
             formErrors.selectedCareHome ? 'border-red-500' : ''
           }`}
           value={selectedCareHome}
           onChange={(e) => setSelectedCareHome(e.target.value)}
         >
           <option value="">Select Care Home</option>
           <option value="Care Home 1">Branch 1</option>
           <option value="Care Home 2">Branch 2</option>
           <option value="Care Home 2">Branch 3</option>
         </select>
         {formErrors.selectedCareHome && (
           <p className="text-red-500 mt-2">{formErrors.selectedCareHome}</p>
         )}
       </div>
       <div className="mb-6">
        <label className="block text-black font-semibold mb-2">Date:</label>
      <DatePicker
      selected={date}
     onChange={(date) => setDate(date)}
    dateFormat="dd/MM/yyyy"
    className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 ${
      formErrors.date ? 'border-red-500' : ''
    }`}
  />
  {formErrors.date && (
    <p className="text-red-500 mt-2">{formErrors.date}</p>
  )}
</div>

       {/* Shift Period Selection */}
      <div className="sm:w-1/2 mb-6">
        <label className="block text-black font-semibold mb-2">Shift Period:</label>
        <select
          className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 ${
            formErrors.shiftPeriod ? 'border-red-500' : ''
          }`}
          value={shiftPeriod}
          onChange={(e) => setShiftPeriod(e.target.value)}
        >
          <option value="">Select Shift Period</option>
          <option value="Long Day shift">Long Day shift</option>
          <option value="Half Day shift">Half Day shift</option>
          <option value="Waking night shift">Waking night shift</option>
        </select>
        {formErrors.shiftPeriod && (
          <p className="text-red-500 mt-2">{formErrors.shiftPeriod}</p>
        )}
      </div>
      {/* Time Inputs */}
      <div className="mb-6 sm:flex gap-3">
        <div className="sm:w-1/2">
          <label className="block text-black font-semibold mb-2">Start Time:</label>
          <input
            type="time"
            className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500`}
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <select
            className={`w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500`}
            value={startPeriod}
            onChange={(e) => setStartPeriod(e.target.value)}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>

        <div className="sm:w-1/2">
          <label className="block text-black font-semibold mb-2">End Time:</label>
          <input
            type="time"
            className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500`}
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
          <select
            className={`w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500`}
            value={endPeriod}
            onChange={(e) => setEndPeriod(e.target.value)}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>

      {/* Break Hours */}
      <div className="mb-6">
        <label className="block text-black font-semibold mb-2">Break Hours:</label>
        <input
          type="text"
          className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500`}
          placeholder="Enter break hours"
          value={breakHours}
          onChange={(e) => setBreakHours(e.target.value)}
        />
      </div>

      {/* Total Hours Worked Display */}
      <div className="mb-6">
        <label className="block text-black font-semibold mb-2">Total Hours of Pay:</label>
        <p>{totalHoursWorked}</p>
      </div>

      {/* Incident Note */}
      <div className="mb-6">
        <label className="block text-black font-semibold mb-2">Incident Note:</label>
        <textarea
          className={`w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:border-blue-500 ${
            formErrors.incidentNote ? 'border-red-500' : ''
          }`}
          placeholder="Enter incident note"
          value={incidentNote}
          onChange={(e) => setIncidentNote(e.target.value)}
        ></textarea>
        {formErrors.incidentNote && (
          <p className="text-red-500 mt-2">{formErrors.incidentNote}</p>
        )}
      </div>


      {/* File Upload */}
      <div className="mb-6">
        <label className="block text-black font-semibold mb-2">Upload Time Sheet Picture:</label>
        <input
          type="file"
          className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 ${
            formErrors.file ? 'border-red-500' : ''
          }`}
          accept="image/*"
          onChange={handleFileChange}
        />
        {formErrors.file && (
          <p className="text-red-500 mt-2">{formErrors.file}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        className="w-full tracking-widest sm:w-1/2 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default Timesheet;
