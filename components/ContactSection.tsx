"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { HiMail } from "react-icons/hi"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { FaXTwitter } from "react-icons/fa6"

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/mehmetgencv",
    icon: <AiOutlineGithub size={20} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mehmetgencv/",
    icon: <AiOutlineLinkedin size={20} />,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/mehmetgencv",
    icon: <FaXTwitter size={18} />,
  },
]

const ContactSection = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:mehmetgencv@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center font-bold text-4xl text-neutral-800 dark:text-neutral-100">
          Contact
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mt-2 max-w-md mx-auto">
          Have a question or want to work together? I&apos;d love to hear from you.
        </p>
      </motion.div>

      <div className="mt-12 grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
        {/* Left — form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="px-4 py-3 rounded-xl border border-neutral-200 dark:border-stone-700 bg-white dark:bg-stone-800/60 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 rounded-xl border border-neutral-200 dark:border-stone-700 bg-white dark:bg-stone-800/60 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="px-4 py-3 rounded-xl border border-neutral-200 dark:border-stone-700 bg-white dark:bg-stone-800/60 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <HiMail size={18} />
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right — info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-center gap-6"
        >
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
              Let&apos;s connect
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
              I&apos;m currently open to new opportunities. Whether it&apos;s a full-time role,
              contract work, or just a chat — my inbox is always open.
            </p>
          </div>

          <a
            href="mailto:mehmetgencv@gmail.com"
            className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium hover:underline"
          >
            <HiMail size={18} />
            mehmetgencv@gmail.com
          </a>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
              Find me on
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-xl border border-neutral-200 dark:border-stone-700 text-neutral-500 dark:text-neutral-400 hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
