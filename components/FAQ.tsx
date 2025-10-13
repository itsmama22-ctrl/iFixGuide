'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="mt-12 bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-200 last:border-0">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-start py-4 text-left hover:text-primary-600 transition-colors focus:outline-none focus-visible-ring"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-gray-900 pr-4">
                {item.question}
              </span>
              <svg
                className={`h-5 w-5 flex-shrink-0 text-primary-600 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="pb-4 text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

