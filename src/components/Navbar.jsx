import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import FadeInUp from "./FadeInUp";

const tags = [
  { label: "Sick of Chasing?", href: "#problem" },
  { label: "Here’s the Fix", href: "#solution" },
  { label: "They Tried It", href: "#testimonials" },
  { label: "Pick your SNACK", href: "#comparison" },
  { label: "Still Skeptical?", href: "#faq" },
  { label: "Let's Talk", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
      <nav className="sticky  top-0 z-50 bg-opacity-10 backdrop-blur-md">
        <div className="navbar flex items-center justify-between p-2 px-4 md:px-10">
          {/* Logo */}
          <div className="icon">
            <a href="#hero">
              <img
                className="w-40 hover:scale-110 transition-transform duration-300"
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
  );
};

export default Navbar;
