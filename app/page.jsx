'use client'
import { useAuthFilter } from "./ContextAPI/AuthContext";
import { useRouter } from 'next/navigation';
import { useSpring, animated } from 'react-spring';
import { useEffect } from "react";
import { MdAccessTime } from 'react-icons/md';
import { FaKey, FaKeycdn, FaQuestion, FaQuestionCircle, FaRegQuestionCircle, FaStar } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Link from "next/link";


// Example usage
function MyComponent() {
  return (
    <div>
      <MdAccessTime /> {/* Display the time-sheet icon */}
      {/* Other components or content */}
    </div>
  );
}


const Home = () => {
  const { user } = useAuthFilter();
  const router = useRouter()

  // Extracting the first letter of the first name and last name
  const firstNameInitial = user?.displayName?.charAt(0);
  const lastNameInitial = user?.displayName?.split(" ")[1]?.charAt(0);

  const firstNameUppercase = firstNameInitial?.toUpperCase();
  const lastNameUppercase = lastNameInitial?.toUpperCase();
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  // const userSession = sessionStorage.getItem('user');
   useEffect(() => {
    // Redirect to sign-up page if user is not authenticated
    if (!user) {
      router.push('/sign-up');
      console.log(user)
    }
  }, [user, router]);

  console.log(user)
 
  // if (!user && !userSession){
  //   router.push('/sign-up')
  // }

 
  return (
    <section className="max-container">
      <header className="mx-10">
        <div className="flex gap-4 items-center py-4 px-2">
        <div className="flex flex-col justify-center items-center w-[6rem] h-[6rem] rounded-full bg-blue-500 mt-4 font-montserrat shadow-md">
          <animated.p className="text-3xl" style={props}> {firstNameUppercase} {lastNameUppercase} </animated.p>
        </div>
        <div className="">
          <p>Hello there,</p>
          <p>{user?.displayName}</p>
        </div>
        </div>
        <div className="mt-8 shadow-md">
          <h2 className="font-Montserrat pl-3">Welcome, <span className='font-semibold'>{user?.displayName}!</span> </h2>
          <p className="py-4 pl-3 font-montserrat">We&apos;re glad to you are back on your platform. if you have any questions feel free to ask or explore the features below.</p>
        </div>
      </header>
      <div className="mt-7 px-4">
        <p className='font-bold text-3xl px-4'>Info</p>
        <div className="sm:flex gap-4 w-full mt-4">
          <div className="sm:w-1/2 h-[15rem] shadow-xl p-3">
            <IconContext.Provider value={{ color: 'blue', size: '50px' }}>
            <MdAccessTime />
            </IconContext.Provider>
            <p className='font-bold text-2xl p-1 text-[#1d1d1d]'>Time Sheet</p> 
            <p className='flex flex-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi quaerat tenetur repellendus deserunt quisquam.</p>
            <Link href='/timesheet'>
            <button onClick={window.scrollTo(0,0)} className='flex flex-col justify-center items-center py-2 px-4 bg-red-500 duration-100 hover:bg-red-400 text-center mt-3'>Submit Timesheet</button>
            </Link>
          </div>
          <div className="sm:w-1/2 h-[15rem] shadow-xl p-3">
            <IconContext.Provider value={{ color: 'blue', size: '50px' }}>
            <FaRegQuestionCircle/>
            </IconContext.Provider>
            <p className='font-bold text-2xl p-1 text-[#1d1d1d]'>Questions!</p> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi quaerat tenetur repellendus deserunt quisquam.</p>
            <Link href='/questions'>
            <button onClick={window.scrollTo(0,0)} className='flex flex-col justify-center items-center py-2 px-4 bg-red-500 duration-100 hover:bg-red-400 text-center mt-3'>Drop Questions</button>
            </Link>
          </div>
        </div>
        <div className="sm:flex gap-4 w-full mt-2">
          <div className="sm:w-1/2 h-[15rem] shadow-xl p-3">
            <IconContext.Provider value={{ color: 'blue', size: '50px' }}>
             <FaStar />
             </IconContext.Provider>
            <p className='font-bold text-2xl p-1 text-[#1d1d1d]'>Reviews</p> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi quaerat tenetur repellendus deserunt quisquam.</p>
            <Link href='reviews'>
            <button onClick={window.scrollTo(0,0)} className='flex flex-col justify-center items-center py-2 px-4 bg-red-500 duration-100 hover:bg-red-400 text-center mt-3'>Reviews</button>
            </Link>
          </div>
          <div className="sm:w-1/2 h-[15rem] shadow-xl p-3">
            <IconContext.Provider value={{ color: 'blue', size: '50px' }}>
             <FaKey />
             </IconContext.Provider>
            <p className='font-bold text-2xl p-1 text-[#1d1d1d]'>Forgotten password</p> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi quaerat tenetur repellendus deserunt quisquam.</p>
            <Link href='password-reset'>
            <button onClick={window.scrollTo(0,0)} className='flex flex-col justify-center items-center py-2 px-4 bg-red-500 duration-100 hover:bg-red-400 text-center mt-3'>Change Password</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-7'>
  <p className='font-bold text-3xl px-4 mx-2'>Announcement</p>
  <div className='mx-auto mt-3 shadow-lg p-6 bg-white rounded-lg'>
    <p className='font-semibold text-xl mb-3'>Dear Team,</p>
    <p className='text-gray-700'>
      I trust you&apos;re all having a productive week. As we approach the end of the current work cycle, I'd like to emphasize the importance of timely timesheet submissions.
    </p>
    <p className='text-gray-700'>
      Submit your timesheet for the week ending on <strong>[date]</strong> by Sunday at 12:00 AM (midnight).
    </p>
    <p className='text-gray-700'>Thank you for your cooperation!</p>
    <p className='text-blue-500 font-bold'>Mr Akeem</p>
    <p className='text-gray-500'>CCSupport Team</p>
  </div>
  <div className="mt-10">
  <p className='font-bold text-3xl px-4 mx-2'>Feedback</p>
  <div className="bg-white p-6 shadow-lg rounded-lg">
    <label className="block mb-2 text-black font-semibold">Your Feedback:</label>
    <textarea
      className="w-full h-32 p-3 mb-4 bg-gray-100 rounded-md resize-none focus:outline-none focus:ring focus:border-blue-500"
      placeholder="Write your feedback here..."
    ></textarea>

    <button
      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md border-2 hover:border-red-500 focus:outline-none focus:ring focus:border-blue-700"
    >
      Submit Feedback
    </button>
  </div>
</div>

</div>

    </section>
  )
}

export default Home
{/* <button onClick={() => {
        signOut(auth)'
        sessionStorage.removeItem('user')
        }}>
        Log out
      </button> */}
//       <label for="careHome">Select Care Home:</label>
// <select id="careHome" name="careHome">
//   <option value="homeA">Care Home A</option>
//   <option value="homeB">Care Home B</option>
//   <option value="homeC">Care Home C</option>
//   <!-- Add more options as needed -->
// </select>
