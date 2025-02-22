import React from "react";

const PricingPage = () => {
  const plans = [
    {
      name: "Starter Pack",
      price: "₹999",
      duration: "/month",
      features: [
        "📚 Access to core study materials",
        "📅 Weekly practice tests",
        "📧 Priority email support",
        "📊 Basic performance analytics",
        "📱 Mobile app access"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Pro Preparation",
      price: "₹1999",
      duration: "/month",
      features: [
        "🚀 Everything in Starter",
        "💬 Daily live doubt sessions",
        "🎯 Personalized study planner",
        "📈 Advanced analytics dashboard",
        "🧑🏫 Weekly mentor check-ins",
        "📝 5 full-length mock tests"
      ],
      popular: true,
      color: "purple"
    },
    {
      name: "Premium Suite",
      price: "₹2999",
      duration: "/month",
      features: [
        "🌟 Everything in Pro",
        "👨🏫 1:1 Expert mentorship",
        "🔮 AI-powered predictions",
        "🏆 All-India test series",
        "📚 Premium question bank",
        "🎓 Career guidance sessions",
        "⏳ Time management tools"
      ],
      popular: false,
      color: "pink"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="w-full max-w-7xl backdrop-blur-lg rounded-[2.5rem] p-8 lg:p-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            💎 Premium Plans
          </div>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            Invest in Your Success
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Choose from flexible plans designed to maximize your exam preparation potential
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card bg-gradient-to-b from-${plan.color}-50 to-white relative hover:transform hover:scale-105 transition-all duration-300 ${
                plan.popular ? "border-2 border-purple-500 shadow-xl" : "border border-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h2 className={`text-3xl font-bold text-${plan.color}-600 mb-2`}>{plan.name}</h2>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-lg text-gray-500 ml-2">{plan.duration}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="mr-2">✅</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 font-bold rounded-xl bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-600 text-white hover:from-${plan.color}-600 hover:to-${plan.color}-700 transition-all shadow-lg hover:shadow-xl`}>
                  Start {plan.name.split(' ')[0]} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Plan Comparison</h2>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div></div>
            <div className="text-center font-bold text-blue-600">Starter</div>
            <div className="text-center font-bold text-purple-600">Pro</div>
            <div className="text-center font-bold text-pink-600">Premium</div>
            
            {[
              ["Daily Live Sessions", "❌", "✅", "✅"],
              ["Mock Tests", "3/month", "10/month", "Unlimited"],
              ["Mentor Access", "❌", "Weekly", "24/7"],
              ["AI Analytics", "Basic", "Advanced", "Premium"],
              ["Mobile App", "✅", "✅", "✅"],
            ].map((row, i) => (
              <React.Fragment key={i}>
                <div className="text-gray-600 p-2">{row[0]}</div>
                <div className="text-center p-2">{row[1]}</div>
                <div className="text-center p-2">{row[2]}</div>
                <div className="text-center p-2">{row[3]}</div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Still Hesitating?</h2>
          <p className="text-white/90 mb-8">Try our 7-day free trial with no credit card required</p>
          <div className="flex justify-center gap-4">
            <button className="cta-button bg-white text-purple-600 hover:bg-gray-100 px-8 py-4">
              Start Free Trial →
            </button>
            <button className="cta-button border-2 border-white text-white hover:bg-white/10 px-8 py-4">
              Compare Plans
            </button>
          </div>
          <p className="text-white/80 text-sm mt-4">14-day money back guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

// Add custom styles
<style jsx>{`
  .pricing-card {
    border-radius: 1.5rem;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .pricing-card:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }

  .cta-button {
    border-radius: 999px;
    font-weight: 600;
    transition: all 0.3s ease;
  }
`}</style>