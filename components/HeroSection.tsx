"use client"
import Image from "next/image"
import { Link } from "react-scroll"
import { HiArrowDown } from "react-icons/hi"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center">
      {/* Subtle background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-teal-400/10 dark:bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-violet-400/10 dark:bg-violet-500/10 blur-3xl" />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-4">
            Software Engineer
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-neutral-900 dark:text-neutral-50">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-teal-500 to-violet-500 bg-clip-text text-transparent">
              Mehmet
            </span>
          </h1>
          <p className="mt-6 text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Backend-focused engineer specializing in{" "}
            <span className="font-semibold text-neutral-700 dark:text-neutral-200">
              Java, Spring Boot &amp; microservices
            </span>
            . Building scalable backend systems and event-driven architectures.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link
              to="projects"
              spy smooth offset={-80} duration={500}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-lg shadow-teal-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              spy smooth offset={-80} duration={500}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-300 dark:border-stone-600 text-neutral-700 dark:text-neutral-200 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
            <a
              href="https://github.com/mehmetgencv"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
            >
              <AiOutlineGithub size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/mehmetgencv/"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
            >
              <AiOutlineLinkedin size={26} />
            </a>
            <span className="w-px h-5 bg-neutral-300 dark:bg-stone-600" />
            <a
              href="https://drive.google.com/file/d/1DErBlPVz8p7Dh6bdSDSaVw4ZOtMrseni/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Resume ↗
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative shrink-0"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-teal-400 to-violet-500 blur-3xl opacity-15 dark:opacity-25" />
            <Image
              src="/headshot.png"
              alt="Mehmet Genc"
              fill
              className="relative rounded-full object-cover shadow-2xl ring-4 ring-white dark:ring-stone-800"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <Link to="about" spy smooth offset={-80} duration={500} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-neutral-400 dark:text-neutral-500 hover:text-teal-500 transition-colors"
          >
            <HiArrowDown size={24} />
          </motion.div>
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
