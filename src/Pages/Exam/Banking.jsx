import React from "react";

const BankingExamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex flex-col items-center p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full -top-48 -left-48 animate-pulse"></div>
      <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full -bottom-32 -right-32 animate-pulse delay-300"></div>

      <main className="w-full max-w-7xl z-10">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 animate-fade-in-down">
            Crack Banking Exams 2024
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your Ultimate Guide for IBPS, SBI, and RBI Exams with AI-driven Study Plans, Mock Tests & Expert Guidance.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30">
            Start Free Trial
          </button>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {icon: '📊', title: 'AI-Powered Analytics', desc: 'Track your performance with real-time insights'},
            {icon: '📝', title: '50+ Mock Tests', desc: 'Simulate real exam scenarios with full-length tests'},
            {icon: '📚', title: 'Comprehensive Study Material', desc: 'Covers Quant, Reasoning, English, and GK'},
            {icon: '🎥', title: 'Live Interactive Classes', desc: 'Learn from the best Banking experts'},
            {icon: '⏳', title: 'Time-Saving Strategies', desc: 'Speed-enhancing tips to maximize your score'},
            {icon: '📞', title: '24/7 Doubt Support', desc: 'Get expert guidance anytime you need'},
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
          <h2 className="text-3xl font-bold text-gray-100 mb-6">Banking Exam Syllabus Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {["Quantitative Aptitude", "Reasoning Ability", "English Language", "General Awareness"].map((subject, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <span className="text-gray-300">{subject}</span>
                  <span className="text-cyan-400">30% Weightage</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Preparation Timeline</h3>
              <div className="space-y-3">
                {["Concept Building", "Practice & Accuracy", "Revision & Tests", "Final Mock Exams"].map((phase, i) => (
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
      </main>
    </div>
  );
};

export default BankingExamPage;
