"use client"
import { useState, useEffect } from "react"
import { Link } from "react-scroll/modules"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Experience", page: "timeline" },
  { label: "Apps", page: "myapps" },
  { label: "Projects", page: "projects" },
  { label: "Contact", page: "contact" },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-stone-900/80 backdrop-blur-md shadow-sm border-b border-neutral-200/50 dark:border-stone-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="home" spy smooth offset={-80} duration={500} className="cursor-pointer">
            <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Mehmet<span className="text-teal-500">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.page}
                to={item.page}
                spy
                smooth
                offset={-80}
                duration={500}
                activeClass="text-teal-600 dark:text-teal-400"
                className="px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-lg hover:bg-neutral-100 dark:hover:bg-stone-800 transition-all duration-200 cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-stone-800 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {currentTheme === "dark" ? <RiSunLine size={20} /> : <RiMoonFill size={20} />}
              </button>
            )}

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-stone-800 transition-colors"
              onClick={() => setNavbar(!navbar)}
              aria-label="Toggle menu"
            >
              {navbar ? <IoMdClose size={22} /> : <IoMdMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {navbar && (
        <div className="md:hidden bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-t border-neutral-200/60 dark:border-stone-700/60">
          <nav className="mx-auto max-w-5xl px-4 py-3 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.page}
                to={item.page}
                spy
                smooth
                offset={-80}
                duration={500}
                activeClass="text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10"
                className="px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-neutral-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                onClick={() => setNavbar(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
