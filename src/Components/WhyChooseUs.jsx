const WhyChooseUs = () => {
  return (
    <>
      <section
        id="features"
        className="relative pt-5 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 px-15"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full">
              Why Choose Us?
            </span>
            <h3 className="text-4xl font-bold text-[#fd671c] mb-4">
              Supercharge Your Exam Preparation
            </h3>
            <p className="text-lg text-[#269ee4] max-w-2xl mx-auto">
              Discover the perfect blend of technology and education designed to
              maximize your learning potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: "📚",
                title: "Smart Study Materials",
                description: "AI-curated notes, mind maps & video resources",
                badge: "New",
              },
              {
                icon: "📈",
                title: "Progress Analytics",
                description: "Track your performance with detailed insights",
                badge: "Popular",
              },
              {
                icon: "⚡",
                title: "Quick Revision",
                description:
                  "Last-minute cheat sheets & key concept highlights",
                badge: "Hot",
              },
              {
                icon: "🎮",
                title: "Gamified Learning",
                description: "Earn badges & compete in learning challenges",
                badge: "Trending",
              },
              {
                icon: "🧑🏫",
                title: "Expert Support",
                description: "24/7 doubt solving with subject matter experts",
                badge: "24/7",
              },
              {
                icon: "📱",
                title: "Multi-Device Sync",
                description: "Seamless transition between devices",
                badge: "Sync",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-3xl text-white">
                    {feature.icon}
                  </div>
                  {feature.badge && (
                    <span className="absolute top-0 right-0 bg-orange-100 text-orange-600 px-3 py-1 text-sm font-medium rounded-full">
                      {feature.badge}
                    </span>
                  )}
                  <h4 className="text-xl font-bold text-[#fd671c] mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-[#269ee4]">{feature.description}</p>
                  <div className="mt-4 flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mt-20 text-center py-8 bg-white rounded-2xl shadow-lg">
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">500K+</div>
              <div className="text-gray-600">Active Learners</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600">Practice Tests</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 -left-20 w-48 h-48 bg-purple-100 rounded-full opacity-50 mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute bottom-20 -right-20 w-48 h-48 bg-blue-100 rounded-full opacity-50 mix-blend-multiply filter blur-xl animate-float-delayed"></div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
