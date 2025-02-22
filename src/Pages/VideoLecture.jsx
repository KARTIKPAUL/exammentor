import React from "react";

const VideoLecturePage = () => {
  const lectures = [
    { subject: "Mathematics", title: "Calculus Basics", duration: "45 min", link: "#" },
    { subject: "Physics", title: "Laws of Motion", duration: "50 min", link: "#" },
    { subject: "Chemistry", title: "Organic Reactions", duration: "40 min", link: "#" },
    { subject: "Biology", title: "Cell Structure", duration: "35 min", link: "#" },
    { subject: "History", title: "French Revolution", duration: "55 min", link: "#" },
    { subject: "Geography", title: "Climate & Weather", duration: "48 min", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-cyan-400 mb-8">Video Lectures</h1>
        <p className="text-center text-gray-300 mb-6">Explore expert-led video lectures to boost your preparation.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lectures.map((lecture, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <h2 className="text-xl font-semibold text-cyan-300">{lecture.subject}</h2>
              <p className="text-lg font-medium mt-2">{lecture.title}</p>
              <p className="text-sm text-gray-400 mt-1">Duration: {lecture.duration}</p>
              <a 
                href={lecture.link} 
                className="inline-block mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-md transition"
              >
                Watch Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoLecturePage;