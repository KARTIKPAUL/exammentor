import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen pb-10 px-4 md:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-[#fd671c] text-center">Privacy Policy for ExamMentor</h1>
        <p className="text-[#269ee4] text-center mt-2">Last Updated: <span className="text-gray-700 font-medium">19/02/2024</span></p>
        
        <div className="mt-6 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
            <p className="text-gray-600 mt-2">Welcome to ExamMentor. Your privacy is important to us, and this Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">2. Information We Collect</h2>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other details when you register or contact us.</li>
              <li><strong>Usage Data:</strong> Information about your interactions with our website, such as pages visited and time spent.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> To enhance user experience and improve our services.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Provide and improve our services.</li>
              <li>Personalize your experience.</li>
              <li>Communicate with you regarding updates, promotions, and support.</li>
              <li>Ensure security and prevent fraud.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-600 mt-2">We do not sell your personal data. However, we may share information with:</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li><strong>Service Providers:</strong> Third-party companies assisting in website operations.</li>
              <li><strong>Legal Authorities:</strong> If required by law or to protect our rights.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">5. Data Security</h2>
            <p className="text-gray-600 mt-2">We implement security measures to protect your information, but no method of transmission is 100% secure.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">6. Your Rights and Choices</h2>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt out of marketing emails.</li>
              <li>Manage cookie preferences through your browser settings.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">7. Third-Party Links</h2>
            <p className="text-gray-600 mt-2">Our website may contain links to external sites. We are not responsible for their privacy policies or practices.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">8. Updates to This Policy</h2>
            <p className="text-gray-600 mt-2">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">9. Contact Us</h2>
            <p className="text-gray-600 mt-2">If you have any questions about this Privacy Policy, please contact us at:</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li><strong>Email:</strong><span className="text-[#fd671c]"> support@exammentor.com</span></li>
              <li><strong>Address:</strong> <span className="text-[#fd671c]"> Jb Road,Delhi,India,700134</span></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
