"use client"
import { motion } from "framer-motion"
import experiences from "@/data/experiences"

const typeConfig: Record<string, { dot: string; pill: string; label: string }> = {
  work: {
    dot: "bg-teal-500",
    pill: "text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-500/10 border border-teal-200/60 dark:border-teal-500/20",
    label: "Work",
  },
  education: {
    dot: "bg-violet-500",
    pill: "text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-500/10 border border-violet-200/60 dark:border-violet-500/20",
    label: "Education",
  },
  internship: {
    dot: "bg-emerald-500",
    pill: "text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20",
    label: "Internship",
  },
  bootcamp: {
    dot: "bg-orange-500",
    pill: "text-orange-700 dark:text-orange-300 bg-orange-50 dark:bg-orange-500/10 border border-orange-200/60 dark:border-orange-500/20",
    label: "Bootcamp",
  },
}

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center font-bold text-4xl text-neutral-800 dark:text-neutral-100">
          Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h2>
      </motion.div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-3 mt-6 mb-12">
        {Object.entries(typeConfig).map(([key, cfg]) => (
          <div key={key} className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
            <span className="text-xs text-neutral-500 dark:text-neutral-400">{cfg.label}</span>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-stone-700 -translate-x-1/2" />

        <div className="space-y-8">
          {experiences.map((exp, idx) => {
            const cfg = typeConfig[exp.type] || typeConfig.work
            const isLeft = idx % 2 === 0

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className={`pl-10 md:pl-0 w-full md:w-[calc(50%-1rem)] ${isLeft ? "md:pr-6" : "md:pl-6"}`}>
                  <div className="group bg-white dark:bg-stone-800/60 rounded-2xl border border-neutral-200/60 dark:border-stone-700/60 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 leading-tight">
                          {exp.title}
                        </h3>
                        <p className="text-base font-medium text-teal-600 dark:text-teal-400 mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <span className={`shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full ${cfg.pill}`}>
                        {cfg.label}
                      </span>
                    </div>

                    {/* Date */}
                    <p className="text-sm text-neutral-400 dark:text-neutral-500 mb-4">
                      {exp.date}
                    </p>

                    {/* Description */}
                    <ul className="space-y-2 mb-5">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed flex gap-2.5">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-400 dark:bg-teal-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-stone-700/50 border border-neutral-200/60 dark:border-stone-600/60 text-neutral-500 dark:text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center dot — desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-5 w-4 h-4 rounded-full border-2 border-white dark:border-stone-900 shadow items-center justify-center z-10">
                  <div className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
                </div>

                {/* Left dot — mobile */}
                <div className={`md:hidden absolute left-4 top-5 w-3 h-3 rounded-full border-2 border-white dark:border-stone-900 shadow z-10 -translate-x-1/2 ${cfg.dot}`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TimelineSection
