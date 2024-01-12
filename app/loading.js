'use client'

const Loading = () => {
  return (
    <>
        <div className="loading flex justify-center items-center h-screen">
          <p className="text-2xl font-bold text-blue-500">
            Loading<span className="animate-pulse">.</span>
            <span className="animate-pulse">.</span>
            <span className="animate-ping">.</span>
          </p>
        </div>
    </>
  );
}

export default Loading;
