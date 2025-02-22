import React from "react";

const SSCExamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex flex-col items-center p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full -top-48 -left-48 animate-pulse"></div>
      <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full -bottom-32 -right-32 animate-pulse delay-300"></div>

      <main className="w-full max-w-7xl z-10">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 animate-fade-in-down">
            Master SSC Exams 2025
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your Ultimate Preparation Hub with Smart Learning Tools, Real-time Analytics, and Expert-curated Resources
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30">
            Start Free Trial
          </button>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {icon: '📚', title: 'Adaptive Learning', desc: 'AI-powered study plans that adjust to your progress'},
            {icon: '🎯', title: '10,000+ Questions', desc: 'Curated question bank with detailed solutions'},
            {icon: '📈', title: 'Performance Analytics', desc: 'Detailed insights with competitor benchmarking'},
            {icon: '🎥', title: 'Live Classes', desc: 'Daily interactive sessions with top educators'},
            {icon: '⏱️', title: 'Time Management', desc: 'Smart mock tests with time optimization tools'},
            {icon: '🤝', title: 'Doubt Support', desc: '24/7 expert assistance through chat & call'},
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
          <h2 className="text-3xl font-bold text-gray-100 mb-6">SSC CGL Syllabus Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {['Quantitative Aptitude', 'General Intelligence', 'English Language', 'General Awareness'].map((subject, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <span className="text-gray-300">{subject}</span>
                  <span className="text-cyan-400">35% Weightage</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Preparation Timeline</h3>
              <div className="space-y-3">
                {['Basic Concepts', 'Advanced Practice', 'Revision Phase', 'Mock Tests'].map((phase, i) => (
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

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            {number: '98%', label: 'Success Rate'},
            {number: '2.5M+', label: 'Questions Solved'},
            {number: '150+', label: 'Expert Educators'},
            {number: '24/7', label: 'Support'},
          ].map((stat, i) => (
            <div key={i} className="bg-cyan-500/10 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-300 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-gray-800/40 p-6 rounded-xl">
                <p className="text-gray-300 mb-4">"The mock tests and analytics helped me improve my score by 40% in just 2 months!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-100">Rahul Sharma</div>
                    <div className="text-sm text-cyan-400">AIR 24, SSC CGL 2023</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {q: 'How does the personalized study plan work?', a: 'Our AI analyzes your strengths to create dynamic study schedules'},
              {q: 'Can I access materials offline?', a: 'Yes, download PDFs and video lectures for offline access'},
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-700/50 pb-4">
                <div className="text-gray-200 font-medium mb-2">{faq.q}</div>
                <div className="text-gray-400">{faq.a}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-white/10 rounded-full" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite`
            }}></div>
        ))}
      </div>
    </div>
  );
};

export default SSCExamPage;