import React from "react";
import { motion } from "framer-motion";

const tags = [
  { label: "Sick of Chasing?", href: "#problem" },
  { label: "Here’s the Fix", href: "#solution" },
  { label: "They Tried It", href: "#testimonials" },
  { label: "Pick your SNACK", href: "#comparison" },
  { label: "Still Skeptical?", href: "#faq" },
  { label: "Let's Talk", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-opacity-90 backdrop-blur-md">
      <div className="navbar flex items-center justify-between p-2 px-4 md:px-10">
        {/* Logo */}
        <div className="icon">
          <a href="#hero">
            <img
              className="w-10 hover:scale-110 transition-transform duration-300"
              src="./white-icon.png"
              alt="Logo"
            />
          </a>
        </div>

        {/* Tags */}
        <div className="Tags hidden md:flex justify-stretch gap-6 text-black questrial-regular text-lg tracking-wide">
          {tags.map((tag, index) => (
            <motion.a
              key={index}
              href={tag.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.08 }}
              className="hover:text-black-900 hover:scale-90 transition-all duration-300 cursor-pointer"
            >
              {tag.label}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
