"use client"
import React, {useState} from "react"
import { MdWork } from "react-icons/md"
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa"
import { HiAcademicCap } from "react-icons/hi"
import { motion } from "framer-motion"
import experiences from "../data/experiences"; // Adjust the path based on your file structure


const getTypeStyles = (type: string) => {
  switch (type) {
    case "work":
      return { icon: <MdWork className="w-5 h-5" />, color: "text-blue-600 dark:text-blue-400", borderColor: "border-blue-500 dark:border-blue-600" };
    case "education":
      return { icon: <FaGraduationCap className="w-5 h-5" />, color: "text-purple-600 dark:text-purple-400", borderColor: "border-purple-500 dark:border-purple-600" };
    case "internship":
      return { icon: <HiAcademicCap className="w-5 h-5" />, color: "text-green-600 dark:text-green-400", borderColor: "border-green-500 dark:border-green-600" };
    case "bootcamp":
      return { icon: <FaLaptopCode className="w-5 h-5" />, color: "text-red-600 dark:text-red-400", borderColor: "border-red-500 dark:border-red-600" };
    default:
      return { icon: <MdWork className="w-5 h-5" />, color: "text-teal-600 dark:text-teal-400", borderColor: "border-teal-500 dark:border-teal-600" };
  }
};

const TimelineSection = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
      <section id="timeline" className="py-16">
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center font-bold text-4xl text-neutral-800 dark:text-neutral-100"
        >
          Timeline
          <motion.hr
              initial={{ width: 0 }}
              animate={{ width: "1.5rem" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 mx-auto my-4 bg-teal-500 border-0 rounded"
          />
        </motion.h1>

        <div className="relative container mx-auto px-6 flex flex-col space-y-8">
          <div className="absolute z-0 w-0.5 h-full bg-gradient-to-b from-gray-200 via-gray-400 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 shadow-lg left-17 md:mx-auto md:left-0 md:right-0"></div>

          {experiences.map((experience, idx) => {
            const typeStyle = getTypeStyles(experience.type);
            const isHovered = idx === hoveredItem;

            return (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }} // Başlangıç animasyon pozisyonu
                    whileInView={{ opacity: 1, y: 0 }} // Göründüğünde çalışacak animasyon
                    viewport={{ once: true, amount: 0.2 }} // Animasyon bir kez çalışır ve %20 görünüm yeterli olur
                    transition={{ duration: 0.5, delay: idx * 0.1 }} // Animasyon hızı ve sıralaması
                    className="relative z-10"
                    onMouseEnter={() => setHoveredItem(idx)}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <div className="timeline-container">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className={`timeline-pointer ${typeStyle.color} flex items-center justify-center shadow-lg`}
                        >
                            {typeStyle.icon}
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`bg-white dark:bg-stone-900 p-6 rounded-xl shadow-lg border-l-4 ${typeStyle.borderColor} hover:shadow-xl transition-all duration-300`}
                        >
                            <span className={`font-bold ${typeStyle.color}`}>{experience.date}</span>
                            <h3 className="text-xl font-bold pt-1 text-neutral-800 dark:text-neutral-100">
                                {experience.title}
                            </h3>
                            {experience.company && (
                                <h4 className="text-lg text-gray-600 dark:text-gray-400">{experience.company}</h4>
                            )}

                            {experience.description && (
                                <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 pt-1">
                                    {experience.description.map((item, index) => (
                                        <li key={index} className="pt-1">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Technologies Section */}
                            {experience.technologies && (
                                <div className="pt-4">
                                    <h4 className="font-semibold text-gray-700 dark:text-gray-300">
                                        Technologies:
                                    </h4>
                                    <ul className="flex flex-wrap gap-2 pt-2">
                                        {experience.technologies.map((tech, index) => (
                                            <li
                                                key={index}
                                                className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-2 py-1 rounded-md text-sm shadow"
                                            >
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </motion.div>

            );
          })}
        </div>
      </section>
  );
};

export default TimelineSection;