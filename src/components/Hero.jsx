"use client";
import { useState } from "react";
import FadeInUp from "./FadeInUp";


const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <FadeInUp>
      <div id="hero" className="relative isolate px-6 pt-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0  -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#60d6dd] to-[#2115c3] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full questrial-regular px-3 py-1 text-md/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Real estate pros: We built this for you.{" "}
              <a
                href="/snack"
                target="_blank"
                className="font-semibold text-indigo-600 hover:text-indigo-400"
              >
                <span
                  aria-hidden="true"
                  className="absolute questrial-regular inset-0"
                />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-6xl questrial-regular font-semibold tracking-tight text-balance text-gray-900 sm:text-8xl">
              Chase Less. Close More.
            </h1>
            <p className="mt-8 text-lg font-medium questrial-regular text-pretty text-gray-500 sm:text-xl/8">
              For agents tired of chasing leads, Versocia installs
              infrastructure that turns clicks into booked calls — so you close,
              not chase.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md cursor-pointer bg-indigo-600 px-3.5 py-2.5 text-sm questrial-regular font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Automate My Leads
              </a>
              <a
                href="/snack"
                className="text-sm/6 hover:scale-[1.2] transition-all duration-300 ease-in-out questrial-regular font-semibold text-gray-900 cursor-pointer"
              >
                See the System <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#60d6dd] to-[#2115c3] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </FadeInUp>
  );
}

export default Hero;

