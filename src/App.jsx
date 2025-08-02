import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Testimonial from './components/Testimonial';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Testimonial />
      <Comparison />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
