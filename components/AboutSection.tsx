"use client"
import { motion } from "framer-motion"
import {
  FaPython, FaJava, FaDocker, FaAws, FaDownload,
} from "react-icons/fa"
import {
  SiFastapi, SiFlask, SiSpringboot, SiElasticsearch,
  SiApachekafka, SiRabbitmq, SiGit, SiMongodb, SiPostgresql, SiRedis,
} from "react-icons/si"
import { RiInfinityLine } from "react-icons/ri"
import { VscAzure } from "react-icons/vsc"
import { MdEmail } from "react-icons/md"

const skills = [
  { skill: "Java", icon: <FaJava /> },
  { skill: "Python", icon: <FaPython /> },
  { skill: "Spring Boot", icon: <SiSpringboot /> },
  { skill: "FastAPI", icon: <SiFastapi /> },
  { skill: "Flask", icon: <SiFlask /> },
  { skill: "PostgreSQL", icon: <SiPostgresql /> },
  { skill: "Redis", icon: <SiRedis /> },
  { skill: "Kafka", icon: <SiApachekafka /> },
  { skill: "RabbitMQ", icon: <SiRabbitmq /> },
  { skill: "Elasticsearch", icon: <SiElasticsearch /> },
  { skill: "Docker", icon: <FaDocker /> },
  { skill: "AWS", icon: <FaAws /> },
  { skill: "Azure", icon: <VscAzure /> },
  { skill: "MongoDB", icon: <SiMongodb /> },
  { skill: "Git", icon: <SiGit /> },
  { skill: "CI/CD", icon: <RiInfinityLine /> },
]

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center font-bold text-4xl text-neutral-800 dark:text-neutral-100">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h2>
      </motion.div>

      <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
        {/* Left — bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed"
        >
          <p>
            I&apos;m a{" "}
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              backend-focused Software Engineer
            </span>{" "}
            with a strong passion for building scalable, high-performance systems.
            I specialize in{" "}
            <span className="font-semibold text-teal-600 dark:text-teal-400">
              Java, Spring Boot, and microservices architecture
            </span>
            , and I enjoy solving complex distributed-systems problems.
          </p>
          <p>
            I graduated from Adana Science and Technology University in 2020 with a
            Bachelor&apos;s degree in Electrical and Electronics Engineering. Since then,
            I&apos;ve been building backend systems at fintech and AI companies across
            Türkiye and the US.
          </p>
          <p>
            I believe in{" "}
            <span className="font-semibold text-teal-500">never stop growing</span>{" "}
            and constantly seek opportunities that push me further.
          </p>

          <div className="pt-4 flex flex-wrap gap-3">
            <a
              href="https://drive.google.com/file/d/1DErBlPVz8p7Dh6bdSDSaVw4ZOtMrseni/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-md shadow-teal-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FaDownload />
              Resume
            </a>
            <a
              href="mailto:mehmetgencv@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-stone-600 text-neutral-700 dark:text-neutral-200 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              <MdEmail />
              Email Me
            </a>
          </div>
        </motion.div>

        {/* Right — skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                title={item.skill}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-100 dark:bg-stone-800 border border-neutral-200/60 dark:border-stone-700/60 text-neutral-600 dark:text-neutral-300 text-sm font-medium hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
