import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen pb-10 px-4 md:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-[#fd671c] text-center">Terms & Conditions for ExamMentor</h1>
        <p className="text-[#269ee4] text-center mt-2">Last Updated: <span className="text-gray-700 font-medium">19/02/2025</span></p>
        
        <div className="mt-6 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
            <p className="text-gray-600 mt-2">Welcome to ExamMentor. By accessing and using our website, you agree to be bound by these Terms and Conditions.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">2. Use of Website</h2>
            <p className="text-gray-600 mt-2">You agree to use this website only for lawful purposes and in compliance with all applicable laws and regulations.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">3. User Accounts</h2>
            <p className="text-gray-600 mt-2">If you create an account, you are responsible for maintaining its confidentiality and for all activities that occur under your account.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">4. Intellectual Property</h2>
            <p className="text-gray-600 mt-2">All content, including text, graphics, and logos, is the property of ExamMentor and is protected by intellectual property laws.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">5. Limitation of Liability</h2>
            <p className="text-gray-600 mt-2">We are not responsible for any damages arising from the use of our website. Your use of the website is at your own risk.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">6. Termination</h2>
            <p className="text-gray-600 mt-2">We reserve the right to suspend or terminate your access to our website at any time, without prior notice, if you violate these Terms.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">7. Changes to Terms</h2>
            <p className="text-gray-600 mt-2">We may update these Terms & Conditions at any time. Continued use of the website after changes signifies acceptance of the new terms.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">8. Contact Us</h2>
            <p className="text-gray-600 mt-2">If you have any questions regarding these Terms & Conditions, please contact us at:</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li><strong>Email:</strong> support@exammentor.com</li>
              <li><strong>Address:</strong> Kolkata</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
