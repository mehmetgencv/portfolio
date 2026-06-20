"use client"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { FaXTwitter, FaStackOverflow } from "react-icons/fa6"
import { SiMedium } from "react-icons/si"

const links = [
  { href: "https://github.com/mehmetgencv", icon: <AiOutlineGithub size={20} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/mehmetgencv/", icon: <AiOutlineLinkedin size={20} />, label: "LinkedIn" },
  { href: "https://x.com/mehmetgencv", icon: <FaXTwitter size={18} />, label: "X" },
  { href: "https://stackoverflow.com/users/13236602/mehmetgenc", icon: <FaStackOverflow size={18} />, label: "Stack Overflow" },
  { href: "https://mehmetgencv.medium.com/", icon: <SiMedium size={18} />, label: "Medium" },
]

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="border-neutral-200 dark:border-stone-700" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          © {new Date().getFullYear()} Mehmet Genc
        </p>
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="p-2 rounded-lg text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-stone-800 transition-all duration-200"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
