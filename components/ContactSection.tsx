"use client"
import React, { useState } from "react"
import { HiMail } from "react-icons/hi"

const ContactSection = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )
    window.location.href = `mailto:mehmetgenc@outlook.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="my-12 pb-12 md:pt-16 md:pb-24">
      <h1 className="text-center font-bold text-4xl">
        Contact
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>
      <div className="max-w-lg mx-auto">
        <p className="text-center text-neutral-600 dark:text-neutral-400 mb-8">
          Have a question or want to work together? Send me a message!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors resize-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow hover:bg-teal-700 transition-colors duration-300"
          >
            <HiMail size={20} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
