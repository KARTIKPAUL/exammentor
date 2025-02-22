import React from "react";
import { FaCoins, FaChartLine, FaUserFriends, FaWallet, FaShieldAlt, FaHandHoldingUsd } from "react-icons/fa";

const AffiliatePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Affiliate Program</h1>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Earn up to 30% recurring commissions by sharing ExamMentor with your audience
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-full text-lg font-semibold transition-transform hover:scale-105 flex items-center gap-2">
              <FaCoins className="w-5 h-5" />
              Start Earning Now
            </button>
            <button className="border border-blue-300 hover:bg-blue-900/50 px-8 py-3 rounded-full text-lg font-semibold transition-all">
              How It Works
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
          <FaWallet className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-2">$250K+</h3>
          <p className="text-gray-600">Paid to Affiliates</p>
        </div>
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
          <FaUserFriends className="text-4xl text-purple-600 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-2">1.2K+</h3>
          <p className="text-gray-600">Active Affiliates</p>
        </div>
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
          <FaChartLine className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-2">45 Days</h3>
          <p className="text-gray-600">Average First Payout</p>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: FaUserFriends, title: "1. Sign Up", text: "Create your affiliate account in minutes" },
              { icon: FaHandHoldingUsd, title: "2. Share Links", text: "Use your unique referral links" },
              { icon: FaCoins, title: "3. Earn Commissions", text: "Get paid for every conversion" },
              { icon: FaWallet, title: "4. Get Paid", text: "Withdraw earnings monthly" },
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
                <step.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commission Structure */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Commission Tiers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { level: "Starter", rate: "20%", requirements: "0-10 referrals/mo", color: "blue" },
            { level: "Pro", rate: "25%", requirements: "11-50 referrals/mo", color: "purple" },
            { level: "Elite", rate: "30%", requirements: "50+ referrals/mo", color: "green" },
          ].map((tier, index) => (
            <div key={index} className={`bg-${tier.color}-100 p-8 rounded-2xl relative overflow-hidden`}>
              <div className={`absolute top-0 left-0 w-full h-2 bg-${tier.color}-600`}></div>
              <h3 className="text-2xl font-bold mb-4">{tier.level}</h3>
              <div className="text-4xl font-bold mb-4 text-gray-800">{tier.rate}</div>
              <p className="text-gray-600 mb-6">per successful referral</p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-medium">Requirements:</p>
                <p className="text-gray-600">{tier.requirements}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaShieldAlt, title: "Reliable Tracking", text: "Advanced analytics and real-time reporting" },
              { icon: FaWallet, title: "Flexible Payouts", text: "PayPal, Wire Transfer, or Crypto" },
              { icon: FaChartLine, title: "Marketing Tools", text: "Banners, links, and campaign resources" },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <feature.icon className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Earning?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Join thousands of successful affiliates helping students worldwide while earning great commissions
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
            Get Started Now
          </button>
          <p className="text-sm text-gray-500 mt-4">No upfront costs - 24/7 Support</p>
        </div>
      </div>
    </div>
  );
};

export default AffiliatePage;