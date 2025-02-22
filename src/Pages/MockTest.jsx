import React from "react";

const MockTestSection = ({ examName }) => {
  const mockTests = [
    { title: "Beginner Mock Test", difficulty: "Easy", duration: "30 mins" },
    { title: "Intermediate Mock Test", difficulty: "Medium", duration: "60 mins" },
    { title: "Advanced Mock Test", difficulty: "Hard", duration: "90 mins" },
  ];

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-cyan-400 text-center mb-6">
        {examName} Mock Tests
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockTests.map((test, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-all"
          >
            <h3 className="text-xl font-semibold">{test.title}</h3>
            <p className="text-sm text-gray-400">Difficulty: {test.difficulty}</p>
            <p className="text-sm text-gray-400">Duration: {test.duration}</p>
            <button className="mt-4 bg-cyan-500 px-4 py-2 rounded-lg text-white hover:bg-cyan-600">
              Start Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const MockTestsPage = () => {
  const exams = ["UPSC", "SSC", "Banking", "JEE", "NEET", "GATE"];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
        Mock Tests for All Exams
      </h1>
      <div className="space-y-12">
        {exams.map((exam, index) => (
          <MockTestSection key={index} examName={exam} />
        ))}
      </div>
    </div>
  );
};

export default MockTestsPage;
