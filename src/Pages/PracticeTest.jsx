import React from "react";

const exams = [
  { name: "UPSC", color: "bg-red-500" },
  { name: "SSC", color: "bg-blue-500" },
  { name: "Banking", color: "bg-green-500" },
  { name: "JEE", color: "bg-yellow-500" },
  { name: "NEET", color: "bg-purple-500" },
  { name: "GATE", color: "bg-pink-500" },
];

const PracticeTests = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
          Practice Tests for Competitive Exams
        </h1>
        <p className="text-gray-300 mb-12">
          Select an exam category and start practicing with our subject-wise tests to enhance your preparation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {exams.map((exam, index) => (
            <div key={index} className={`p-6 rounded-xl shadow-lg ${exam.color} hover:scale-105 transition-all duration-300`}>
              <h2 className="text-2xl font-semibold">{exam.name} Practice Tests</h2>
              <p className="text-gray-200 mt-2">Attempt subject-wise mock tests to improve accuracy and speed.</p>
              <button className="mt-4 bg-black/30 px-4 py-2 rounded-lg hover:bg-black/50 transition-all">
                Start Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeTests;