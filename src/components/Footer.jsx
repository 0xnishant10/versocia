import React from 'react'
import FadeInUp from './FadeInUp';

const Footer = () => {
  return (
    <FadeInUp>
      <div>
        {/* ========== FOOTER ========== */}
        <footer className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 bg-black">
          <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
            <div className="flex flex-wrap justify-between items-center gap-2">
              <div>
                <p className="text-md text-gray-600 questrial-regular dark:text-neutral-400">
                  <a className="dark:hover:text-neutral-200" href="/">
                    © 2025 Versocia.
                  </a>
                </p>
              </div>

              {/* End Col */}

              {/* List */}
              <ul className="flex flex-wrap items-center">
                <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                  <a
                    className="text-sm text-gray-500 questrial-regular underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-400 dark:hover:text-neutral-200"
                    href="/snack"
                  >
                    More About SNACK
                  </a>
                </li>
                <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                  <a
                    className="text-xm questrial-regular text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-400 dark:hover:text-neutral-200"
                    href="https://x.com/versocia?s=21"
                    target="_blank"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li className="inline-block pe-4 text-xs">
                  <a
                    className="text-sm questrial-regular text-gray-600 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-400 dark:hover:text-neutral-200"
                    href="https://instagram.com/versocia"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
              {/* End List */}
            </div>
          </div>
        </footer>
        {/* ========== END FOOTER ========== */}
      </div>
    </FadeInUp>
  );
}

export default Footer
