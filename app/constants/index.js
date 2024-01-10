// export const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/women", label: "Women" },
//     { href: "/men", label: "Men" },
//     { href: "/about-us", label: "About Us" },
// ];
// import React, { useState } from 'react';

// const Timesheet = () => {

//   const [hoursWorked, setHoursWorked] = useState('');
//   const [breakHours, setBreakHours] = useState('');
//   const [shiftPeriod, setShiftPeriod] = useState('');
 

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

  

//   return (
//     <div className="mt-10 bg-white p-8 rounded-lg shadow-lg">
//       <h1 className="text-3xl font-bold mb-6 text-black">TimeSheet Form</h1>

//       {/* Care Home Selection */}
//       <div className="mb-6">
//         <label className="block text-black font-semibold mb-2">Select Care Home:</label>
//         <select
//           className={`sm:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 ${
//             formErrors.selectedCareHome ? 'border-red-500' : ''
//           }`}
//           value={selectedCareHome}
//           onChange={(e) => setSelectedCareHome(e.target.value)}
//         >
//           <option value="">Select Care Home</option>
//           <option value="Care Home 1">Care Home 1</option>
//           <option value="Care Home 2">Care Home 2</option>
//         </select>
//         {formErrors.selectedCareHome && (
//           <p className="text-red-500 mt-2">{formErrors.selectedCareHome}</p>
//         )}
//       </div>

//       {/* Work Hours and Breaks */}
//       <div className="mb-6">
//         <label className="block text-black font-semibold mb-2">Hours Worked:</label>
//         <input
//           type="text"
//           className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 ${
//             formErrors.hoursWorked ? 'border-red-500' : ''
//           }`}
//           placeholder="Enter hours worked"
//           value={hoursWorked}
//           onChange={(e) => setHoursWorked(e.target.value)}
//         />
//         {formErrors.hoursWorked && (
//           <p className="text-red-500 mt-2">{formErrors.hoursWorked}</p>
//         )}
//       </div>

//       {/* Break Hours */}
//       <div className="w-full sm:flex gap-3">
//       <div className="mb-6 sm:w-1/2">
//         <label className="block text-black font-semibold mb-2">Break Hours:</label>
//         <input
//           type="text"
//           className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 ${
//             formErrors.breakHours ? 'border-red-500' : ''
//           }`}
//           placeholder="Enter break hours"
//           value={breakHours}
//           onChange={(e) => setBreakHours(e.target.value)}
//         />
//         {formErrors.breakHours && (
//           <p className="text-red-500 mt-2">{formErrors.breakHours}</p>
//         )}
//       </div>

    //   {/* Shift Period Selection */}
    //   <div className="sm:w-1/2 mb-6">
    //     <label className="block text-black font-semibold mb-2">Shift Period:</label>
    //     <select
    //       className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 ${
    //         formErrors.shiftPeriod ? 'border-red-500' : ''
    //       }`}
    //       value={shiftPeriod}
    //       onChange={(e) => setShiftPeriod(e.target.value)}
    //     >
    //       <option value="">Select Shift Period</option>
    //       <option value="Long Day shift">Long Day shift</option>
    //       <option value="Half Day shift">Half Day shift</option>
    //       <option value="Waking night shift">Waking night shift</option>
    //     </select>
    //     {formErrors.shiftPeriod && (
    //       <p className="text-red-500 mt-2">{formErrors.shiftPeriod}</p>
    //     )}
    //   </div>
//       </div>
    //   {/* Incident Note */}
    //   <div className="mb-6">
    //     <label className="block text-black font-semibold mb-2">Incident Note:</label>
    //     <textarea
    //       className={`w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:border-blue-500 ${
    //         formErrors.incidentNote ? 'border-red-500' : ''
    //       }`}
    //       placeholder="Enter incident note"
    //       value={incidentNote}
    //       onChange={(e) => setIncidentNote(e.target.value)}
    //     ></textarea>
    //     {formErrors.incidentNote && (
    //       <p className="text-red-500 mt-2">{formErrors.incidentNote}</p>
    //     )}
    //   </div>

    //   {/* File Upload */}
    //   <div className="mb-6">
    //     <label className="block text-black font-semibold mb-2">Upload Time Sheet Picture:</label>
    //     <input
    //       type="file"
    //       className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 ${
    //         formErrors.file ? 'border-red-500' : ''
    //       }`}
    //       accept="image/*"
    //       onChange={handleFileChange}
    //     />
    //     {formErrors.file && (
    //       <p className="text-red-500 mt-2">{formErrors.file}</p>
    //     )}
    //   </div>

//       {/* Submit Button */}
//       <button
//         className="w-full tracking-widest sm:w-1/2 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
//         onClick={handleSubmit}
//       >
//         SUBMIT
//       </button>
//     </div>
//   );
// };

// export default Timesheet;
