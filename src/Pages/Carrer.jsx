import React from "react";
import { FaPenFancy, FaCode, FaChartLine, FaRegSmile, FaHeart, FaRocket, FaBalanceScale } from "react-icons/fa";

const CareerPage = () => {
  const jobOpenings = [
    {
      title: "Content Writer",
      type: "Remote",
      location: "Anywhere",
      description: "Craft compelling educational content that inspires learners worldwide.",
      experience: "2+ years",
      link: "#",
      icon: <FaPenFancy className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Full Stack Developer",
      type: "Full-time",
      location: "Global",
      description: "Architect and build cutting-edge learning platforms with modern tech stack.",
      experience: "3+ years",
      link: "#",
      icon: <FaCode className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Growth Marketer",
      type: "Hybrid",
      location: "Bangalore",
      description: "Drive user acquisition and engagement through innovative strategies.",
      experience: "4+ years",
      link: "#",
      icon: <FaChartLine className="w-8 h-8 text-green-600" />
    },
  ];

  const benefits = [
    { title: "Flexible Work", description: "Remote-friendly options", icon: <FaRegSmile className="w-6 h-6" /> },
    { title: "Health First", description: "Comprehensive insurance", icon: <FaHeart className="w-6 h-6" /> },
    { title: "Growth", description: "Learning stipends", icon: <FaRocket className="w-6 h-6" /> },
    { title: "Balance", description: "Generous PTO policy", icon: <FaBalanceScale className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-down">
            Shape the Future of Education
          </h1>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join our mission to democratize learning for 10M+ students worldwide
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-full text-lg font-semibold transition-transform hover:scale-105">
              Explore Roles
            </button>
            <button className="border border-blue-300 hover:bg-blue-900/50 px-8 py-3 rounded-full text-lg font-semibold transition-all">
              Our Culture
            </button>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Current Opportunities</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobOpenings.map((job, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8 transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="mb-4 text-blue-400">{job.icon}</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400">{job.title}</h3>
              <div className="flex gap-2 mb-4">
                <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">{job.type}</span>
                <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">{job.location}</span>
              </div>
              <p className="text-gray-400 mb-4">{job.description}</p>
              <p className="text-sm text-gray-500 mb-6">Experience: {job.experience}</p>
              <a href={job.link} className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                Apply Now 
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Join Us</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-blue-400 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Culture Code</h2>
          <p className="text-xl text-gray-400 mb-12">
            We believe in radical transparency, continuous learning, and celebrating small wins. 
            Our flat hierarchy ensures every voice matters.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Ownership</h3>
              <p className="text-gray-400">Drive projects from ideation to execution with autonomy</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Collaboration</h3>
              <p className="text-gray-400">Cross-functional teamwork that breaks silos</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Growth</h3>
              <p className="text-gray-400">Continuous learning with $3k annual development budget</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Still Curious?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-xl mx-auto">
            Let's chat about how you can contribute to our educational revolution
          </p>
          <button className="bg-transparent border-2 border-blue-300 text-blue-300 hover:bg-blue-900/50 px-12 py-4 rounded-full text-lg font-semibold transition-all">
            Schedule Coffee Chat
          </button>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;