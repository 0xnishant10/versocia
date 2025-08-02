import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import React, { useState } from "react";
import FadeInUp from "./FadeInUp";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Footer from "./Footer";

const tags = [
  { label: "Sick of Chasing?", href: "/#problem" },
  { label: "Here’s the Fix", href: "/#solution" },
  { label: "They Tried It", href: "/#testimonials" },
  { label: "Pick your SNACK", href: "/#comparison" },
  { label: "Still Skeptical?", href: "/#faq" },
  { label: "Let's Talk", href: "/#contact" },
];
const SnackPage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <FadeInUp>
      <div>
        <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-10 backdrop-blur-md">
          <div className="navbar flex items-center justify-between p-2 px-4 md:px-10">
            {/* Logo */}
            <div className="icon">
              <a href="/">
                <img
                  className="w-40 hover:scale-110 cursor-pointer transition-transform duration-300"
                  src="./black.png"
                  alt="Logo"
                />
              </a>
            </div>

            {/* Desktop Tags */}
            <div className="hidden lg:flex gap-6 text-black questrial-regular text-lg tracking-wide">
              {tags.map((tag, index) => (
                <motion.a
                  key={index}
                  href={tag.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                  whileHover={{ scale: 1.08 }}
                  className="hover:text-black-900 hover:scale-90 transition-all duration-300 cursor-pointer"
                >
                  {tag.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-black bg-opacity-90 backdrop-blur-md focus:outline-none"
              >
                {mobileOpen ? (
                  <XMarkIcon className="h-7 w-7" />
                ) : (
                  <Bars3Icon className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className=" md:hidden bg-opacity-90 backdrop-blur-md px-6 pt-4 pb-6 flex flex-col gap-4 text-lg questrial-regular shadow-lg"
              >
                {tags.map((tag, index) => (
                  <motion.a
                    key={index}
                    href={tag.href}
                    onClick={() => setMobileOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {tag.label}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base/7 questrial-regular font-semibold text-indigo-600">
                  Know Us.
                </p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Built for Closers. Not Chasers.
                </h1>
                <p className="mt-6 questrial-regular text-lg/8 text-gray-700">
                  At Versocia, we’re not just another marketing agency — we’re
                  your backend growth team. Built exclusively for real estate
                  agents, we focus on what actually matters: booked calls with
                  ready-to-talk leads. No fluff, no wasted ad spend. Just
                  infrastructure that closes. We exist to help real estate
                  agents chase less and close more. We realized that most agents
                  were stuck handling half-baked leads or juggling follow-ups
                  that never convert. So we built something better.
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            {/* Timeline */}
            <div>
              <h1 className="my-5  text-xl font-semibold text-indigo-600">
                Here’s How It Works
              </h1>
              {/* Item */}
              <div className="group relative flex gap-x-5">
                {/* Icon */}
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                  <div className="relative z-10 right-2 bottom-2 flex justify-center items-center">
                    <lord-icon
                      src="https://cdn.lordicon.com/pmivedvy.json"
                      trigger="loop"
                      delay="000"
                      stroke="bold"
                      colors="primary:#121331,secondary:#a39cf4"
                      style={{ width: "40px", height: "40px" }}
                    ></lord-icon>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 text-xs questrial-regular text-gray-600">
                    Day 0
                  </h3>

                  <p className="font-semibold text-sm text-gray-800">
                    Intro Call
                  </p>

                  <p className="mt-1 questrial-regular text-sm text-gray-600">
                    We’ll learn about your goals, location, and audience. You’ll
                    choose between SNACK or SNACK+.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="group relative flex gap-x-5">
                {/* Icon */}
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                  <div className="relative z-10 right-2 bottom-2 flex justify-center items-center">
                    <lord-icon
                      src="https://cdn.lordicon.com/ogjpwrxe.json"
                      trigger="loop"
                      delay="000"
                      stroke="bold"
                      colors="primary:#121331,secondary:#a39cf4"
                      style={{ width: "40px", height: "40px" }}
                    ></lord-icon>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 questrial-regular text-xs text-gray-600">
                    Day 1–3
                  </h3>

                  <p className="font-semibold text-sm text-gray-800">
                    System Setup
                  </p>

                  <p className="mt-1 questrial-regular text-sm text-gray-600">
                    We build your ads, funnels, CRM, and automations (based on
                    your offer).
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="group relative flex gap-x-5">
                {/* Icon */}
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                  <div className="relative z-10 right-2 bottom-2 flex justify-center items-center">
                    <lord-icon
                      src="https://cdn.lordicon.com/bhsmoehw.json"
                      trigger="loop"
                      delay="000"
                      stroke="bold"
                      colors="primary:#121331,secondary:#a39cf4"
                      style={{ width: "40px", height: "40px" }}
                    ></lord-icon>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 questrial-regular text-xs text-gray-600">
                    Day 4–5
                  </h3>

                  <p className="font-semibold text-sm text-gray-800">
                    Personalization & Testing
                  </p>

                  <p className="mt-1 questrial-regular text-sm text-gray-600">
                    We load your brand assets, customize messaging, and run test
                    leads through the system.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="group relative flex gap-x-5">
                {/* Icon */}
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                  <div className="relative z-10 right-2 bottom-2 flex justify-center items-center">
                    <lord-icon
                      src="https://cdn.lordicon.com/jdgfsfzr.json"
                      trigger="loop"
                      delay="000"
                      stroke="bold"
                      colors="primary:#121331,secondary:#a39cf4"
                      style={{ width: "40px", height: "40px" }}
                    ></lord-icon>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 questrial-regular text-xs text-gray-600">
                    Day 6
                  </h3>

                  <p className="font-semibold text-sm text-gray-800">
                    Review & Approve
                  </p>
                  <p className="mt-1 questrial-regular text-sm text-gray-600">
                    You get a walkthrough of the full setup before going live.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="group relative flex gap-x-5">
                {/* Icon */}
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                  <div className="relative z-10 right-2 bottom-2 flex justify-center items-center">
                    <lord-icon
                      src="https://cdn.lordicon.com/fiytezjs.json"
                      trigger="loop"
                      delay="000"
                      stroke="bold"
                      colors="primary:#121331,secondary:#a39cf4"
                      style={{ width: "40px", height: "40px" }}
                    ></lord-icon>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 questrial-regular text-xs text-gray-600">
                    Day 7{" "}
                  </h3>

                  <p className="font-semibold text-sm text-gray-800">Launch</p>

                  <p className="mt-1 questrial-regular text-sm text-gray-600">
                    We flip the switch and start generating traffic. Leads begin
                    flowing.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="group relative flex gap-x-5">
                {/* Icon */}
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                  <div className="relative z-10 right-2 bottom-2 flex justify-center items-center">
                    <lord-icon
                      src="https://cdn.lordicon.com/tqbntcar.json"
                      trigger="loop"
                      delay="000"
                      stroke="bold"
                      colors="primary:#121331,secondary:#a39cf4"
                      style={{ width: "40px", height: "40px" }}
                    ></lord-icon>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 questrial-regular text-xs text-gray-600">
                    Day 7–30
                  </h3>

                  <p className="font-semibold text-sm text-gray-800">
                    Results & Guarantee Tracking
                  </p>

                  <p className="mt-1 questrial-regular text-sm text-gray-600">
                    You’ll start seeing leads or booked calls. If not, our
                    guarantee kicks in — we keep working for free until you do.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
            </div>
            <div id="customContact" className="text-center">
              <a href="#tally-open=31o16l&tally-overlay=1&tally-form-events-forwarding=1">
                <button
                  type="button"
                  className="py-3 mt-5 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-indigo-400 text-gray-100 shadow-2xs hover:bg-indigo-800 focus:outline-none focus:bg-gray-50 questrial-regular"
                >
                  Contact us
                </button>
              </a>
            </div>
            {/* End Timeline */}
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
                <h1 className="my-5 text-xl font-semibold text-indigo-600">
                  About SNACK
                </h1>
                <p className="questrial-regular">
                  SNACK (Systemized Nurture And Conversion Kit) is our flagship
                  offer.
                  <br />
                  It’s a done-for-you system that captures leads, nurtures them
                  with automated WhatsApp follow-ups, qualifies them, and
                  delivers booked meetings directly to your calendar.
                  <br />
                  This is for agents who:
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex items-center gap-x-3">
                    <lord-icon
                      src="https://cdn.lordicon.com/fqbvgezn.json"
                      trigger="loop"
                      delay="000"
                      stroke="bold"
                      colors="primary:#121331,secondary:#a39cf4"
                      style={{ width: "40px", height: "40px" }}
                    ></lord-icon>
                    <span>
                      <strong className="font-semibold  text-gray-900">
                        Want quality leads but hate wasting time chasing them.
                      </strong>{" "}
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <lord-icon
                      src="https://cdn.lordicon.com/wjyqkiew.json"
                      trigger="loop"
                      delay="000"
                      stroke="bold"
                      colors="primary:#121331,secondary:#a39cf4"
                      style={{ width: "40px", height: "40px" }}
                    ></lord-icon>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Are tired of cold DMs or “just browsing” leads.
                      </strong>{" "}
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <lord-icon
                      src="https://cdn.lordicon.com/pfvaixkr.json"
                      trigger="loop"
                      delay="000"
                      stroke="bold"
                      state="hover-slide"
                      colors="primary:#121331,secondary:#a39cf4"
                      style={{ width: "40px", height: "40px" }}
                    ></lord-icon>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Prefer calls that actually lead to closings.
                      </strong>{" "}
                    </span>
                  </li>
                </ul>
                <p className="mt-8 questrial-regular">
                  We handle everything — from ad setup to CRM integration to
                  copywriting.
                </p>
                <p className="mt-1 text-indigo-600 questrial-regular">
                  We built SNACK so you don’t starve for closings again.
                </p>
                <h1 className="mt-16 my-5 text-xl font-semibold text-indigo-600">
                  About SNACK+
                </h1>
                <div className="mt-6">
                  <p className="questrial-regular">
                    SNACK+ includes everything in SNACK — plus enhancements for
                    scale and quality. We add:
                  </p>
                  <div>
                    <ul className="list-disc pl-5 font-bold my-2">
                      <li>Tiered follow-ups based on user responses </li>
                      <li>Retargeting campaigns to bring back lost leads</li>
                      <li>Visual performance reports delivered bi-weekly</li>
                      <li>
                        Additional follow-up channels and behavioral logic
                      </li>
                    </ul>
                  </div>
                  <p className="mt-3 questrial-regular">
                    SNACK+ is ideal for agents already running ads or those
                    ready to scale beyond just basic booked calls.
                  </p>
                  <p className="mt-1 text-indigo-600 questrial-regular">
                    All the magic of SNACK, but with superpowers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </FadeInUp>
  );
};

export default SnackPage;
