import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Testimonial from './components/Testimonial';

export default function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Testimonial />
    </>
  );
}
