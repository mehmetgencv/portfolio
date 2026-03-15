"use client"
import { useState, useEffect } from "react"
import { HiArrowUp } from "react-icons/hi"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", toggle, { passive: true })
    return () => window.removeEventListener("scroll", toggle)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 transition-all duration-300 hover:scale-110"
      aria-label="Back to top"
    >
      <HiArrowUp size={20} />
    </button>
  )
}
