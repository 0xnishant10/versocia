// src/components/Contact.jsx
import { useEffect } from "react";
import FadeInUp from "./FadeInUp";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <FadeInUp>
      <>
        {/* Calendly Booking Section */}
        <section id="contact" className="relative py-4 pt-40">
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
          <div className="text-center mb-1">
            <h2 className="text-xl/7 questrial-regular font-semibold text-indigo-600">
              Let's Talk
            </h2>
            <h2 className="text-3xl font-bold ">Book a free demo today</h2>
            <h className="text-xl font-bold questrial-regular">
              and see how SNACK can change your business.
            </h>
            <p className="text-gray-600 mt-6 questrial-regular">
              Choose a time that works for you — no back and forth needed.
            </p>
          </div>

          <div
            className="calendly-inline-widget "
            data-url="https://calendly.com/nish-versocia/intro-call?hide_gdpr_banner=1"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        </section>

        {/* Alternative Contact Section */}
        <section className="bg-white dark:bg-black">
          <div className="container px-6 py-12 mx-auto">
            <div id="customContact" className="text-center">
              <p className="font-medium questrial-regular text-indigo-600 dark:text-indigo-400">
                Prefer something else?
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
                Reach out directly
              </h1>
              <p className="mt-3 questrial-regular text-gray-500 dark:text-gray-400">
                Got questions before booking? Drop us a line anytime.
              </p>
              <a href="#tally-open=31o16l&tally-overlay=1&tally-form-events-forwarding=1">
                <button
                  type="button"
                  className="py-3 mt-5 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-indigo-400 text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-none focus:bg-gray-50 questrial-regular"
                >
                  Contact us
                </button>
              </a>
            </div>

            <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-2">
              {/* Email */}
              <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-indigo-500 rounded-full bg-indigo-100/80 dark:bg-gray-800">
                  <a href="nishant@versocia.com" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </a>
                </span>
                <h2 className="mt-4 text-lg questrial-regular font-medium text-gray-800 dark:text-white">
                  Email
                </h2>
                <p className="mt-2 questrial-regular text-gray-500 dark:text-gray-400">
                  We're happy to help anytime.
                </p>
                <a href="nishant@versocia.com" target="_blank">
                  <p className="mt-2 text-indigo-600 questrial-regular dark:text-indigo-400">
                    nishant@versocia.com
                  </p>
                </a>
              </div>

              {/* Instagram */}
              <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-indigo-500 rounded-full bg-indigo-100/80 dark:bg-gray-800">
                  {/* Instagram icon */}
                  <a href="https://instagram.com/versocia" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.75 2C4.58 2 2 4.58 2 7.75v8.5C2 19.42 4.58 22 7.75 22h8.5C19.42 22 22 19.42 22 16.25v-8.5C22 4.58 19.42 2 16.25 2h-8.5zM4.5 7.75c0-1.79 1.46-3.25 3.25-3.25h8.5c1.79 0 3.25 1.46 3.25 3.25v8.5c0 1.79-1.46 3.25-3.25 3.25h-8.5c-1.79 0-3.25-1.46-3.25-3.25v-8.5zm12.25-.5a.75.75 0 100 1.5.75.75 0 000-1.5zM12 8a4 4 0 100 8 4 4 0 000-8zm0 1.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" />
                    </svg>
                  </a>
                </span>
                <h2 className="mt-4 text-lg questrial-regular font-medium text-gray-800 dark:text-white">
                  Instagram
                </h2>
                <p className="mt-2 text-gray-500 questrial-regular dark:text-gray-400">
                  DM us for a quick reply.
                </p>
                <a
                  href="https://instagram.com/versocia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-indigo-600 questrial-regular dark:text-indigo-400 hover:underline"
                >
                  @versocia
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </FadeInUp>
  );
};

export default Contact;
