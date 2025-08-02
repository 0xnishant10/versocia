import React from 'react'
import FadeInUp from "./FadeInUp";

const Solution = () => {
  return (
    <FadeInUp>
      <div id="solution" className="relative py-24 sm:py-32">
        {/* Soft Gradient Background */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#60d6dd] to-[#2115c3] opacity-30"
          />
        </div>

        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-xl questrial-regular font-semibold text-indigo-600">
            Introducing S.N.A.C.K.
          </h2>
          <h2 className="text-center text-xl questrial-regular font-semibold text-indigo-600">
            (Systemized Nurture and Conversion Kit)
          </h2>
          <p className="mx-auto mt-2 max-w-xl questrial-regular text-center text-6xl font-semibold tracking-tight text-balance text-gray-950 sm:text-7xl">
            We built S.N.A.C.K. so you don’t starve for closings again
          </p>

          {/* Card 1 */}
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-in-out hover:shadow-xl rounded-lg lg:rounded-l-4xl lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg questrial-regular font-extrabold  tracking-tight text-gray-950 max-lg:text-center">
                    Smart Nurturing System
                  </p>
                  <p className="mt-1 text-sm questrial-regular text-gray-600 max-lg:text-center">
                    Automatically follows up with leads via WhatsApp using
                    intelligent, behavior-based logic — no more ghosted leads.
                  </p>
                </div>
                <div className="relative  w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="relative  top-10 shadow-2xl outline outline-white/10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl ">
                    <img
                      src="./nurturing.png"
                      alt=""
                      className="w-full h-auto object-cover "
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
            </div>

            {/* Card 2 */}
            <div className="relative hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-in-out hover:shadow-xl rounded-lg max-lg:rounded-t-4xl max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg questrial-regular font-extrabold tracking-tight text-gray-950 max-lg:text-center">
                    Booked Appointments, Not Leads
                  </p>
                  <p className="mt-1 questrial-regular text-sm text-gray-600 max-lg:text-center">
                    We don’t stop at leads. Our agents only talk to people
                    who’ve scheduled a call — no chasing, no convincing.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 sm:px-10 max-lg:pt-10 max-lg:pb-12 lg:pb-2">
                  <img
                    src="./booked.png"
                    alt=""
                    className="w-full scale-110 max-lg:max-w-xs"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
            </div>

            {/* Card 3 */}
            <div className="relative hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-in-out hover:shadow-xl  max-lg:row-start-3 rounded-lg lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg questrial-regular font-extrabold tracking-tight text-gray-950 max-lg:text-center">
                    Retargeting Built In
                  </p>
                  <p className="mt-1 questrial-regular text-sm text-gray-600 max-lg:text-center">
                    Lost leads? We warm them up again with custom retargeting
                    ads — so you close more without paying for more leads.
                  </p>
                </div>
                <div className="flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    src="./retargeting.png"
                    alt=""
                    className="w-full scale-125 object-cover"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
            </div>

            {/* Card 4 */}
            <div className="relative hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-in-out hover:shadow-xl rounded-lg max-lg:rounded-b-4xl lg:rounded-r-4xl lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg questrial-regular font-extrabold tracking-tight text-gray-950 max-lg:text-center">
                    Visual Reporting, Every 2 Weeks
                  </p>
                  <p className="mt-1 questrial-regular text-sm text-gray-600 max-lg:text-center">
                    No guesswork. You’ll receive clear, automated visual reports
                    of your leads, follow-ups, and conversions.
                  </p>
                </div>
                <div className="relative w-full top-10 left-10 grow overflow-hidden rounded-tl-xl ">
                  <img
                    src="./phone.png"
                    alt="Biweekly Reports"
                    className="w-full h-auto mt-3 scale-110 object-cover object-top"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/snack"
            className="text-sm/6 hover:scale-[1.5] transition-all duration-300 ease-in-out questrial-regular font-semibold text-gray-900"
          >
            See the System <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </FadeInUp>
  );
}

export default Solution
