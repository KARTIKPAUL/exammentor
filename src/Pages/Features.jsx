import React from "react";

const FeaturesPage = () => {
  const features = [
    {
      icon: "📚",
      title: "Comprehensive Study Material",
      description: "Access 10,000+ curated resources including interactive e-books, video lectures, and expert-curated notes",
      stats: "Updated weekly with latest exam patterns",
      color: "purple"
    },
    {
      icon: "💬",
      title: "Live Doubt Clearing",
      description: "24/7 instant doubt resolution with AI assistant and weekly live sessions with top educators",
      stats: "Avg. response time: 2.7 minutes",
      color: "blue"
    },
    {
      icon: "📝",
      title: "Smart Mock Tests",
      description: "AI-powered adaptive tests with detailed analytics and all-India rank prediction",
      stats: "50,000+ tests attempted monthly",
      color: "pink"
    },
    {
      icon: "🎯",
      title: "Personalized Learning",
      description: "Dynamic study plans adapting to your progress with daily targets and weakness analysis",
      stats: "93% users improve in 30 days",
      color: "green"
    },
    {
      icon: "👨🏫",
      title: "Expert Mentorship",
      description: "1:1 guidance from top rankers and subject experts with weekly progress reviews",
      stats: "100+ mentors from IITs/NITs",
      color: "orange"
    },
    {
      icon: "📊",
      title: "Performance Analytics",
      description: "Detailed insights with comparative analysis, time management stats, and improvement roadmap",
      stats: "15+ detailed metrics tracked",
      color: "teal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="w-full max-w-7xl backdrop-blur-lg rounded-[2.5rem] p-8 lg:p-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            🚀 Why Choose ExamMentor?
          </div>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            Revolutionize Your Preparation
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the ultimate toolkit trusted by 1M+ students to crack competitive exams
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card bg-gradient-to-br from-${feature.color}-50 to-white hover:shadow-xl transition-all duration-300 group p-4 rounded-xl`}
            >
              <div className={`icon-container bg-${feature.color}-100 text-${feature.color}-600`}>
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-2">{feature.title}</h2>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-sm font-medium text-gray-500 mt-auto">
                {feature.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Student Satisfaction</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-pink-600 mb-2">10K+</div>
              <div className="text-gray-600">Practice Questions</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Learning Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Success Journey Today!</h2>
          <p className="text-white/90 mb-8">Join India's most trusted exam preparation platform</p>
          <div className="flex justify-center gap-4">
            <button className="cta-button bg-white text-purple-600 hover:bg-gray-100">
              Start Free Trial →
            </button>
            <button className="cta-button border-2 border-white text-white hover:bg-white/10">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;

// Add these custom styles
<style jsx>{`
  .feature-card {
    padding: 2rem;
    border-radius: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transition: transform 0.3s ease;
  }

  .feature-card:hover {
    transform: translateY(-5px);
  }

  .icon-container {
    width: 60px;
    height: 60px;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  .feature-card:hover .icon-container {
    transform: scale(1.1) rotate(5deg);
  }

  .cta-button {
    padding: 0.75rem 2rem;
    border-radius: 999px;
    font-weight: 600;
    transition: all 0.3s ease;
  }
`}</style>