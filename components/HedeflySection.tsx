"use client"
import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const screenshots = [
  "/projects/hedefly/1.png",
  "/projects/hedefly/2.png",
  "/projects/hedefly/3.png",
  "/projects/hedefly/4.png",
]

const features = [
  {
    title: "Exam Countdown",
    desc: "Track remaining time to YKS, LGS, KPSS exams",
  },
  {
    title: "Daily Question Tracking",
    desc: "Log daily solved questions with correct/wrong counts",
  },
  {
    title: "Performance Analytics",
    desc: "Weekly, monthly stats with subject distribution charts",
  },
  {
    title: "Goals & Calendar",
    desc: "Set monthly goals and track progress on calendar view",
  },
]

const HedeflySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  return (
    <section id="myapps" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center font-bold text-4xl text-neutral-800 dark:text-neutral-100">
          My Apps
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
      </motion.div>

      {/* Hedefly Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-stone-800/60 rounded-2xl border border-neutral-200/60 dark:border-stone-700/60 overflow-hidden shadow-md"
      >
        {/* App header */}
        <div className="p-6 pb-0">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
            Hedefly
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-xl">
            An educational app for students preparing for Turkish standardized
            exams. Track your daily progress, analyze performance, and reach
            your goals.
          </p>
        </div>

        {/* Screenshots */}
        <div className="flex gap-4 overflow-x-auto p-6 scrollbar-hide">
          {screenshots.map((src, i) => (
            <div
              key={i}
              onClick={() => {
                setLightboxIndex(i)
                setLightboxOpen(true)
              }}
              className="shrink-0 cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={src}
                alt={`Hedefly screenshot ${i + 1}`}
                width={160}
                height={346}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Footer: features + tech + store */}
        <div className="px-6 pb-6">
          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            {features.map((f, i) => (
              <div key={i}>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 text-xs">
                  {f.title}
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          <hr className="border-neutral-100 dark:border-stone-700 mb-5" />

          {/* Tech + Store row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {["Swift", "SwiftUI", "Firebase", "AdMob", "iOS"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-0.5 rounded-full border border-neutral-200 dark:border-stone-700 text-neutral-500 dark:text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://apps.apple.com/tr/app/hedefly/id6759811566"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <span className="text-xs text-neutral-400 dark:text-neutral-500 italic">
                Play Store — Soon
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={screenshots.map((s) => ({ src: s }))}
          index={lightboxIndex}
          on={{ view: ({ index }) => setLightboxIndex(index) }}
        />
      )}
    </section>
  )
}

export default HedeflySection
