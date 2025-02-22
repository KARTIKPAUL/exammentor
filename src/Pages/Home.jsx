import React from "react";
import Hero from "../Components/Hero";
import WhyChooseUs from "../Components/WhyChooseUs";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;
