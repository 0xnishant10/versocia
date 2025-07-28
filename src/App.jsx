import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero';

const App = () => {
  return (
    <>
      <div className="container mx-auto max-w-full w-full">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App
