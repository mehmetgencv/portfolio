"use client"
import React from "react"
import { motion } from "framer-motion"
import experiences from "@/data/experiences"

const typeColor: Record<string, string> = {
  work: "bg-blue-500",
  education: "bg-purple-500",
  internship: "bg-emerald-500",
  bootcamp: "bg-orange-500",
}

const typePill: Record<string, string> = {
  work: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10",
  education:
    "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10",
  internship:
    "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10",
  bootcamp:
    "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10",
}

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center font-bold text-4xl text-neutral-800 dark:text-neutral-100"
      >
        Experience
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "1.5rem" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 mx-auto my-4 bg-teal-500 border-0 rounded"
        />
      </motion.h1>

      <div className="mt-12 max-w-3xl mx-auto">
        {experiences.map((experience, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
          >
            {idx > 0 && (
              <hr className="border-neutral-100 dark:border-stone-800" />
            )}
            <div className="group py-8 flex flex-col md:flex-row md:gap-16">
              {/* Left — date & company */}
              <div className="md:w-48 shrink-0 mb-2 md:mb-0 flex items-start gap-3">
                <span
                  className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${
                    typeColor[experience.type] || "bg-teal-500"
                  }`}
                />
                <div>
                  <p className="text-sm text-neutral-400 dark:text-neutral-500">
                    {experience.date}
                  </p>
                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {experience.company}
                  </p>
                </div>
              </div>

              {/* Right — content */}
              <div className="flex-1">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                    {experience.title}
                  </h3>
                  <span
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-full capitalize ${
                      typePill[experience.type] || "text-teal-600 bg-teal-50"
                    }`}
                  >
                    {experience.type}
                  </span>
                </div>

                <ul className="mt-3 space-y-1.5">
                  {experience.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded-full border border-neutral-200 dark:border-stone-700 text-neutral-500 dark:text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TimelineSection
