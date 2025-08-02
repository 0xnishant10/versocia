import { CheckIcon } from "@heroicons/react/20/solid";
import FadeInUp from "./FadeInUp";

// Pricing tiers for the card section
const tiers = [
  {
    name: "SNACK",
    id: "tier-SNACK",
    href: "#contact",
    priceMonthly: "$697",
    about: "One-time Setup",
    setupFee: "$1497",
    description:
      "From clicks to leads — we set up everything so you can start getting pre-qualified buyers and sellers fast.",
    whoFor:
      "Agents who want ready-to-go, pre-qualified leads without chasing or follow-ups.",
    features: [
      "Ad campaigns setup & management",
      "4–6 pre-built WhatsApp follow-ups",
      "Leads delivered via Google Sheets + WhatsApp",
    ],
    featured: false,
  },
  {
    name: "SNACK+",
    id: "tier-SNACK+",
    href: "#contact",
    priceMonthly: "$997",
    about: "One-time Setup (includes 1st month ad spend)",
    setupFee: "$2997",
    description:
      "Leads are useless without meetings — we guarantee 7 booked calls in 30 days, or we pay for your ads.",
    whoFor:
      "Agents who want meetings, not just leads — while we handle everything behind the scenes.",
    features: [
      "Everything in SNACK",
      "CRM with full pipeline access",
      "Trigger-based smart follow-ups",
      "Advanced retargeting campaigns",
      "Bi-weekly performance reporting",
      "7 Booked Calls Guarantee (in 30 days)",
    ],
    featured: true,
  },
];

const comparisonData = [
  {
    category: "Campaign & Automation",
    features: [
      {
        name: "Facebook Ad Campaigns",
        plans: {
          SNACK: true,
          "SNACK+": true,
        },
      },
      {
        name: "WhatsApp Follow-Ups",
        plans: {
          SNACK: "4–6 Pre-Built Sequences",
          "SNACK+": "Smart, Dynamic, Behavior-Based Sequences",
        },
      },
      {
        name: "Lead Delivery",
        plans: {
          SNACK: "Google Sheets + WhatsApp Notifications",
          "SNACK+": "Integrated CRM Dashboard (Live Updates)",
        },
      },
      {
        name: "Retargeting Ads",
        plans: {
          SNACK: false,
          "SNACK+": true,
        },
      },
      {
        name: "Trigger-Based Automation",
        plans: {
          SNACK: false,
          "SNACK+": true,
        },
      },
    ],
  },
  {
    category: "Reporting & Guarantees",
    features: [
      {
        name: "Bi-Weekly Reporting",
        plans: {
          SNACK: "Basic Update",
          "SNACK+": "Visual Performance Reports",
        },
      },
      {
        name: "Booked Call Guarantee",
        plans: {
          SNACK: false,
          "SNACK+": "7 Calls in 30 Days — or We Pay for Ads",
        },
      },
    ],
  },
  {
    category: "Pricing & Fit",
    features: [
      {
        name: "Setup Fee",
        plans: {
          SNACK: "$1,500",
          "SNACK+": "$3,000 (incl. 1st month ad spend)",
        },
      },
      {
        name: "Monthly Retainer",
        plans: {
          SNACK: "$697/mo + ad spend",
          "SNACK+": "$1,000/mo + ad spend",
        },
      },
      {
        name: "Who's it for?",
        plans: {
          SNACK:
            "Agents who don’t want to waste time and want pre-qualified leads.",
          "SNACK+":
            "Agents who want booked meetings — with a 7-meetings guarantee.",
        },
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Comparison() {
  return (
    <FadeInUp>
      <div
        id="comparison"
        className="relative mb-10 isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
      >
        {/* Background gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu rotate-90 overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#60d6dd] to-[#2115c3] opacity-30"
          />
        </div>

        {/* Pricing Cards Section */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-xl/7 questrial-regular font-semibold text-indigo-600">
            Two options. One goal: More closings.
          </h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            Pick Your S.N.A.C.K.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg questrial-regular font-medium text-pretty text-gray-600 sm:text-xl/8">
          Want a simple lead-gen setup or a full-on booking machine?
        </p>
        <p className="mx-auto  max-w-2xl text-center text-lg questrial-regular font-medium text-pretty text-gray-600 sm:text-xl/8">
          Either way, we’ve got a SNACK for you.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? "relative bg-gray-900 shadow-2xl"
                  : "bg-white/60 sm:mx-8 lg:mx-0",
                tier.featured
                  ? ""
                  : tierIdx === 0
                  ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                  : tierIdx === 1
                  ? "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none"
                  : tierIdx === 2
                  ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tl-none lg:rounded-br-3xl"
                  : "sm:rounded-t-none lg:rounded-tl-3xl lg:rounded-br-none",
                "rounded-3xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl p-8 ring-1 ring-gray-900/10 sm:p-10"
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? "text-indigo-400" : "text-indigo-600",
                  "text-2xl/7 questrial-regular font-semibold"
                )}
              >
                {tier.name}
              </h3>

              <p className="mt-2 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-900",
                    "text-5xl questrial-regular font-semibold tracking-tight"
                  )}
                >
                  {tier.priceMonthly}
                </span>
                <span
                  className={classNames(
                    tier.featured ? "text-gray-400" : "text-gray-500",
                    "text-base questrial-regular"
                  )}
                >
                  /mo + ad spend.
                </span>
              </p>

              <p
                className={classNames(
                  tier.featured ? "text-indigo-400" : "text-indigo-500",
                  "text-base questrial-regular py-2"
                )}
              >
                {tier.setupFee} - {tier.about}
              </p>
              <p
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-6 questrial-regular text-base/7"
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-8 space-y-3 text-sm/6 questrial-regular sm:mt-10"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? "text-indigo-400" : "text-indigo-600",
                        "h-6 w-5 flex-none"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <h3
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-6 font-bold  text-base/7"
                )}
              >
                Perfect For:
              </h3>
              <p
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "questrial-regular text-base/7"
                )}
              >
                {tier.whoFor}
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600",
                  "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 questrial-regular sm:mt-10"
                )}
              >
                Get started today
              </a>
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 rotate-45 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#60d6dd] to-[#2115c3] opacity-30"
          />
        </div>

        {/* Comparison Table Section */}
        <div className="relative mt-16 max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-3xl questrial-regular font-bold md:text-4xl md:leading-tight text-gray-900">
              Compare plans
            </h2>
          </div>

          {/* Table Header */}

          <div className="hidden lg:block sticky top-0 start-0 py-2  backdrop-blur-md">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-1">
                <span className="font-semibold  text-lg text-gray-800">
                  Features
                </span>
              </div>
              {tiers.map((tier) => (
                <div key={tier.id} className="col-span-1">
                  <span className="font-semibold questrial-regular text-lg text-gray-800">
                    {tier.name}
                  </span>
                  <p className="mt-2 questrial-regular text-sm text-gray-800">
                    {tier.name === "SNACK"
                      ? "$697/mo + ad spend (after one-time $1,500 setup)"
                      : "$1,000/mo + ad spend (after one-time $3,000 setup incl. 1st month ads)"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Table Content */}
          {comparisonData.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mt-6 space-y-4 lg:space-y-0">
              {/* Category Header */}
              <ul className="grid lg:grid-cols-3 lg:gap-6">
                <li className="lg:col-span-1 lg:py-3">
                  <span className="text-lg  font-semibold text-gray-800">
                    {section.category}
                  </span>
                </li>
                {tiers.map((tier) => (
                  <li
                    key={tier.id}
                    className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"
                  ></li>
                ))}
              </ul>

              {/* Features */}
              {section.features.map((feature, featureIdx) => (
                <ul key={featureIdx} className="grid lg:grid-cols-3 lg:gap-6">
                  <li className="lg:col-span-1 pb-1.5 lg:py-3">
                    <span className="font-semibold questrial-regular lg:font-normal text-sm text-gray-800">
                      {feature.name}
                    </span>
                  </li>
                  {tiers.map((tier) => (
                    <li
                      key={tier.id}
                      className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:block">
                        <span className="lg:hidden md:col-span-1 text-sm text-gray-800">
                          {tier.name}
                        </span>
                        {typeof feature.plans[tier.name] === "boolean" ? (
                          feature.plans[tier.name] ? (
                            <CheckIcon
                              className="shrink-0 h-5  w-5 text-indigo-600"
                              aria-hidden="true"
                            />
                          ) : (
                            <svg
                              className="shrink-0 h-5 w-5 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                            </svg>
                          )
                        ) : (
                          <span className="text-sm questrial-regular text-gray-800">
                            {feature.plans[tier.name]}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          ))}

          {/* Table Footer Buttons */}
          <div className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Optional empty div to maintain spacing on desktop */}
              <div className="hidden lg:block lg:col-span-2"></div>

              {/* Button spans full width on mobile, centered */}
              <div className="col-span-1 lg:col-span-1 flex justify-center lg:justify-start">
                <a
                  href="#contact"
                  className={classNames(
                    "bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500",
                    "w-full max-w-xs py-3 px-4 inline-flex justify-center items-center gap-x-2",
                    "text-sm font-medium rounded-lg shadow-2xs questrial-regular focus:outline-none"
                  )}
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-3 md:mt-4 flex justify-center items-center gap-x-3">
          <p className="text-sm questrial-regular text-gray-500">
            Need a custom plan?
          </p>
          <a href="#tally-open=31o16l&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave&tally-form-events-forwarding=1">
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-none focus:bg-gray-50 questrial-regular"
            >
              Contact us
            </button>
          </a>
        </div>
      </div>
    </FadeInUp>
  );
}
