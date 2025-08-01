import {
  ClockIcon,
  PhoneArrowDownLeftIcon,
  UserMinusIcon, // 🔁 replace this
} from "@heroicons/react/24/outline";
import FadeInUp from "./FadeInUp";
import DecryptedText from "./DecryptedText";

const features = [
  {
    name: "Slow responses kill deals.",
    description:
      "78% of clients work with the first agent that contacts them. If you’re even a few minutes late, you’re too late.",
    icon: ClockIcon,
  },
  {
    name: "You can’t follow up with everyone.",
    description:
      "Almost 50% of agents give up after the first follow-up. That’s where most deals are lost — in the cracks.",
    icon: UserMinusIcon,
  },
  {
    name: "Leads grow cold in hours.",
    description:
      "Without a consistent system to handle follow-ups while you work, you’re throwing money out the window.",
    icon: PhoneArrowDownLeftIcon,
  },
];

const stats = [
  { id: 1, name: "Leads That Never Convert", value: "80%" },
  { id: 2, name: "Agents Who Stop After 1 Follow-Up", value: "48%" },
  { id: 3, name: "Ideal Response Time", value: "< 5 mins" },
];

export default function Problem() {
  return (
    <FadeInUp>
      <div className="overflow-hidden mb-20 bg-white py-24 sm:py-32" id="problem">
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* LEFT SIDE – COPY + FEATURES */}
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base questrial-regular font-semibold text-indigo-600">
                  Let’s be honest…
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  You don’t need more leads — you need more of them to convert.
                </p>
                <p className="mt-6 questrial-regular text-lg text-gray-700">
                  Most agents don’t lose deals from lack of effort. They lose
                  them from lack of follow-up. If your pipeline is full but your
                  closings aren’t, you’ve got a follow-up problem — not a leads
                  problem.
                </p>

                {/* Features */}
                <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline  font-semibold text-gray-900">
                        <feature.icon
                          className="absolute top-1 left-1 size-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline questrial-regular">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* RIGHT SIDE – STATS (now stacked vertically) */}
            <div className="lg:pl-8 flex flex-col justify-center">
              <dl className="flex flex-col gap-y-12">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="mx-auto flex flex-col items-center text-center"
                  >
                    <dd className="order-first text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">
                      <DecryptedText
                        text={stat.value}
                        speed={100}
                        maxIterations={30}
                        characters="ABCD1234!?"
                        animateOn="view"
                        parentClassName="all-letters"
                        encryptedClassName="encrypted"
                      />
                    </dd>
                    <dt className="text-base leading-7 text-gray-600 font-bold">
                      {stat.name}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </FadeInUp>
  );
}
