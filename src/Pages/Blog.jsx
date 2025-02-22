import React from "react";
import { FaSearch, FaCalendarAlt, FaUser, FaShareAlt, FaBookOpen } from "react-icons/fa";

const BlogPage = () => {
  const blogs = [
    {
      title: "Top 10 Study Tips for Competitive Exams",
      excerpt: "Unlock your full potential with science-backed strategies for effective learning...",
      category: "Study Techniques",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      author: "Dr. Sarah Johnson",
      link: "#",
      image: "https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Mastering Time Management for Students",
      excerpt: "Transform your productivity with our proven time-blocking methodology...",
      category: "Productivity",
      date: "Mar 12, 2024",
      readTime: "6 min read",
      author: "Michael Chen",
      link: "#",
      image: "https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "The Neuroscience of Effective Learning",
      excerpt: "Discover how your brain processes information and optimize your study sessions...",
      category: "Brain Science",
      date: "Mar 10, 2024",
      readTime: "10 min read",
      author: "Dr. Emma Wilson",
      link: "#",
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Digital Detox for Better Focus",
      excerpt: "Reclaim your attention span in this age of constant distractions...",
      category: "Mindfulness",
      date: "Mar 8, 2024",
      readTime: "5 min read",
      author: "Lisa Rodriguez",
      link: "#",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
  ];

  const categories = [
    "All Topics",
    "Study Techniques",
    "Career Guidance",
    "Mental Health",
    "Productivity",
    "Success Stories"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">ExamMentor Insights</h1>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl">
            Your ultimate guide to academic success, mental wellness, and career excellence
          </p>
          <div className="relative max-w-3xl">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute right-6 top-5 text-white/60" />
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full ${
                index === 0 
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              } transition-colors shadow-sm`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Articles */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {blogs.map((blog, index) => (
            <article 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-8">
                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  {blog.category}
                </span>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-6">{blog.excerpt}</p>
                
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <div className="flex items-center mr-6">
                    <FaUser className="mr-2" />
                    {blog.author}
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {blog.date}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={blog.link}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <FaBookOpen className="mr-2" />
                    Read Full Article
                  </a>
                  <button className="text-gray-500 hover:text-gray-700">
                    <FaShareAlt />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Popular Posts Sidebar */}
      <aside className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-8 text-gray-800">Trending Now</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-blue-600 mr-4">0{item}</span>
                <div>
                  <h4 className="font-semibold text-gray-800">The Pomodoro Technique Reimagined</h4>
                  <p className="text-sm text-gray-500">2.5K views</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Revolutionize your study sessions with this time-tested method...</p>
            </div>
          ))}
        </div>
      </aside>

      {/* Newsletter CTA */}
      <section className="bg-blue-900 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FaBookOpen className="text-4xl mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Join Our Learning Community</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Get weekly insights, study hacks, and career advice delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;