import React, { useEffect } from "react";
import "preline";
import FadeInUp from "./FadeInUp";

const FAQ = () => {
  // Make sure Preline initializes components after DOM is rendered
  useEffect(() => {
    import("preline").then(() => {
      window.HSAccordion?.autoInit?.();
    });
  }, []);

  return (
    <FadeInUp>
      <div className="relative mb-20">
        {/* Background gradient */}
        <div
          aria-hidden="true"
          className=" absolute inset-x-0 -z-10 transform-gpu rotate-45 overflow-hidden px-36 blur-3xl"
        >
          <div
            id="faq"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#60d6dd] to-[#2115c3] opacity-30"
          />
        </div>
        {/* FAQ */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <div className="max-w-xs">
                <h2 className="text-xl/7 questrial-regular font-semibold text-indigo-600">
                  FAQs
                </h2>
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
                  Still
                  <br />
                  Got Questions?
                </h2>
                <p className="mt-1 hidden md:block questrial-regular text-gray-600">
                  We’ve answered the most common ones below. If you’re still
                  unsure, reach out — we don’t bite (but we do book
                  appointments).
                </p>
              </div>
            </div>

            <div className="md:col-span-3">
              {/* Accordion */}
              <div className="hs-accordion-group divide-y divide-gray-200">
                {/* Accordion Item */}
                {[
                  {
                    question: "What’s included in the setup fee?",
                    answer:
                      "In SNACK, the setup fee covers the full system installation, WhatsApp automation, and management for the first month — but you’ll need to cover your own ad spend. In SNACK+, the setup fee includes everything above plus your ad spend for month 1, so you're fully covered out of the gate.",
                  },
                  {
                    question: "Is this a one-time setup or a monthly service?",
                    answer:
                      "This is not a handover service — we set it up and we run it. After the initial setup, our team continues to manage the system each month so that you consistently get qualified, follow-up-ready leads.",
                  },
                  {
                    question: "Do I get access to the system?",
                    answer:
                      "Only SNACK+ includes access to GoHighLevel, where you can track leads, follow-ups, and performance. In SNACK, the system is managed entirely by us — you focus only on taking calls.",
                  },
                  {
                    question: "What kind of leads will I get?",
                    answer:
                      "You’ll receive real estate leads that have gone through automated WhatsApp follow-ups — not just form submissions. These are warmer, better-nurtured leads ready to talk.",
                  },
                  {
                    question: "How long before I start seeing results?",
                    answer:
                      "You’ll have a fully functional system ready within 7 days. Most agents start seeing leads within the first week of ad launch and appointments within 7–14 days depending on your area and offer.",
                  },
                  {
                    question: "Can I upgrade from SNACK to SNACK+ later?",
                    answer:
                      "Yes, absolutely. If you start with SNACK and want more control, you can upgrade to SNACK+ at any time — no need to start over.",
                  },
                  {
                    question: "What if I’ve run ads before and it didn’t work?",
                    answer:
                      "Most agents who say that were either chasing cold leads or didn’t have a nurture + conversion system in place. That’s exactly what SNACK installs — so you're no longer chasing.",
                  },
                ].map((item, idx) => (
                  <div
                    className="hs-accordion pt-6 pb-3"
                    key={idx}
                    id={`hs-accordion-heading-${idx}`}
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-indigo-400"
                      aria-expanded={idx === 0 ? "true" : "false"}
                      aria-controls={`hs-accordion-collapse-${idx}`}
                    >
                      {item.question}
                      <svg
                        className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-indigo-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m6 9 6 6 6-6"
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m18 15-6-6-6 6"
                        />
                      </svg>
                    </button>
                    <div
                      id={`hs-accordion-collapse-${idx}`}
                      className={`hs-accordion-content ${
                        idx === 0 ? "" : "hidden"
                      } w-full overflow-hidden transition-[height] duration-300`}
                      role="region"
                      aria-labelledby={`hs-accordion-heading-${idx}`}
                    >
                      <p className="text-gray-600 questrial-regular">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
                {/* End Accordion Items */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInUp>
  );
};

export default FAQ;
