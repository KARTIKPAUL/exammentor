import React from "react";

const GATEExamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex flex-col items-center p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full -top-48 -left-48 animate-pulse"></div>
      <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full -bottom-32 -right-32 animate-pulse delay-300"></div>

      <main className="w-full max-w-7xl z-10">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 animate-fade-in-down">
            Crack GATE 2024 with Confidence
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive Study Plans, Expert Mentorship, and Smart Analytics for Guaranteed Success
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30">
            Start Free Trial
          </button>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {icon: '📚', title: 'Concept Clarity', desc: 'Detailed subject-wise notes and video lectures'},
            {icon: '🎯', title: '10,000+ Practice Questions', desc: 'Topic-wise MCQs with step-by-step solutions'},
            {icon: '📈', title: 'Performance Tracking', desc: 'AI-driven insights to improve weak areas'},
            {icon: '🎥', title: 'Live Doubt Sessions', desc: 'Expert-led discussions for quick clarifications'},
            {icon: '⏱️', title: 'Time Management Tools', desc: 'Smart tests to enhance speed and accuracy'},
            {icon: '🤝', title: 'Mentorship Program', desc: '1-on-1 guidance from GATE toppers'},
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </section>

        {/* Exam Syllabus Section */}
        <section className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">GATE Exam Syllabus Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {["Engineering Mathematics", "Technical Subjects", "General Aptitude", "Verbal Ability"].map((subject, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <span className="text-gray-300">{subject}</span>
                  <span className="text-cyan-400">30% Weightage</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Preparation Timeline</h3>
              <div className="space-y-3">
                {["Concept Building", "Problem Solving", "Mock Tests", "Final Revisions"].map((phase, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">{phase}</span>
                    <span className="text-gray-500 text-sm ml-auto">Week {i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-gray-800/40 p-6 rounded-xl">
                <p className="text-gray-300 mb-4">"ExamMentor’s structured learning path helped me ace GATE with a top rank!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-100">Priya Mehta</div>
                    <div className="text-sm text-cyan-400">AIR 15, GATE 2023</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default GATEExamPage;