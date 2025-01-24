import React from "react"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai"

import { FaXTwitter,
  FaStackOverflow,
} from "react-icons/fa6";

import { SiMedium } from "react-icons/si";

interface CVIconProps {
  className?: string; // Optional className prop
  size?: number;      // Optional size prop
}

const CVIcon: React.FC<CVIconProps> = ({ className, size = 30 }) => (
    <img
        src="/cvIcon.svg" // Path relative to the public folder in Next.js
        alt="CV Icon"
        className={className}
        style={{ width: size, height: size }} // Apply size dynamically
    />
);

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2023 Mehmet Genc<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/mehmetgencv" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://x.com/mehmetgencv"
            rel="noreferrer"
            target="_blank"
          >
            <FaXTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/mehmetgencv/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
              href="https://stackoverflow.com/users/13236602/mehmetgenc"
              rel="noreferrer"
              target="_blank"
          >
            <FaStackOverflow
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
            />
          </a>

          <a
              href="https://mehmetgencv.medium.com/"
              rel="noreferrer"
              target="_blank"
          >
            <SiMedium
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
            />
          </a>

          <a
              href="https://drive.google.com/file/d/1DErBlPVz8p7Dh6bdSDSaVw4ZOtMrseni/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
          >
            <CVIcon
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
            />
          </a>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
