import React from "react";
import examMentorLogo from "../assets/examMentorLogo-removebg-preview.png";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Award,
  BookOpen,
  ClipboardCheck,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 border-t-8 border-blue-400">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="pb-12">
          {/* Main Sections in a Single Row */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-8">

            {/* Brand Section */}
            <div className="col-span-1 flex flex-col">
              <div className="flex items-center mb-4">
                <Award size={36} className="text-blue-400 mr-2" />
                <img
                  src={examMentorLogo}
                  alt="ExamMentor Logo"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                Your ultimate destination for competitive exam preparation.
                Access premium study materials, practice tests, and
                expert-curated resources to ace your exams.
              </p>
              <div className="flex space-x-4 mt-5">
                {[
                  { icon: Facebook, link: "#" },
                  { icon: Twitter, link: "#" },
                  { icon: Instagram, link: "#" },
                  { icon: Linkedin, link: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="hover:text-blue-700 rounded-full transition-all duration-300"
                  >
                    <social.icon size={20} className="text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center">
                <BookOpen size={20} className="mr-2" /> Resources
              </h3>
              <ul className="space-y-3">
                {[
                  "Study Notes",
                  "Practice Tests",
                  "Previous Papers",
                  "Video Lectures",
                  "Quiz",
                  "Mock Test"
                  
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                      className="text-blue-100 hover:text-blue-400 transition-colors hover:pl-2 duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exams */}
            <div className="col-span-1">
              <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center">
                <ClipboardCheck size={20} className="mr-2" /> Exams
              </h3>
              <ul className="space-y-3">
                {["UPSC", "SSC", "Banking", "IIT-JEE", "NEET", "GATE"].map(
                  (exam) => (
                    <li key={exam}>
                      <a
                        href={`/exam/${exam.toLowerCase()}`}
                        className="text-blue-100 hover:text-blue-400 transition-colors hover:pl-2 duration-300"
                      >
                        {exam}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Resources */}
            <div className="col-span-1">
              <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center">
                <BookOpen size={20} className="mr-2" /> Resources
              </h3>
              <ul className="space-y-3">
                {[
                  "Careers",
                  "Blog",
                  "Affiliates",
                  "Privacy Policy",
                  "Terms Conditions",
                  "Faqs"
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                      className="text-blue-100 hover:text-blue-400 transition-colors hover:pl-2 duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="col-span-1">
              <h3 className="text-lg font-bold text-blue-400 mb-4">Others</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="hover:text-blue-400 transition-colors">
                  <a href="/contact">24/7 Help Center</a>
                </li>
                <li>support@exammentor.com</li>
                <li>Phone: +91 7363928225</li>
                <li>Live Chat Available</li>
                <li className="mt-4">
                  {/* <a href="/privacy-policy" className="hover:text-blue-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-conditions" className="hover:text-blue-400">
                    Terms of Service
                  </a> */}
                </li>
              </ul>
            </div>

            {/* Find Us */}

            <div className="col-span-1">
              <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center mr-1">
                <BookOpen size={20} className="mr-2" /> Find Us
              </h3>
              <p>It's Our Offline Center,You Can Find Us Here</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.746442358667!2d89.21123307520813!3d26.463900976917582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3a7acaee07a9d%3A0x85caa94c36cbd4cd!2zUmFtdGhhbmdhIEhpZ2ggU2Nob29sIOCmsOCmvuCmruCmoOCnh-CmmeCnjeCml-CmviDgpongpprgp43gppog4Kas4Ka_4Kam4KeN4Kav4Ka-4Kay4Kef!5e0!3m2!1sen!2sin!4v1740049767519!5m2!1sen!2sin"
              className="rounded-xl"
              width={230}
              ></iframe>
            </div>

          </div>

          {/* Newsletter Section Below */}
          <div className="mt-10 w-full flex flex-col items-center">
            <div className="bg-blue-800/30 p-6 rounded-xl w-full md:w-3/4 lg:w-2/3">
              <h3 className="text-lg font-bold text-blue-400 mb-4 text-center">
                Get Exam Ready!
              </h3>
              <p className="text-blue-200 text-sm mb-4 text-center">
                Subscribe for weekly study tips, updates, and exclusive offers!
              </p>

              {/* Newsletter Row-wise Layout */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full md:w-2/3 px-4 py-3 text-white rounded-lg focus:outline-none border"
                />
                <button className="px-6 py-3 bg-[#fd671c] hover:bg-[#269ee4] cursor-pointer text-white rounded-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-blue-800 py-6 text-center">
          <span className="mb-2 md:mb-0">
            © {new Date().getFullYear()} ExamMentor. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
