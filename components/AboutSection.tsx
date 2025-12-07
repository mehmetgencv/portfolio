import React from "react"
import Image from "next/image"

import { FaPython, FaJava, FaDocker, FaAws, FaDownload } from "react-icons/fa";
import { SiFastapi, SiFlask, SiSpringboot, SiElasticsearch, SiApachekafka, SiRabbitmq, SiGit, SiMongodb } from "react-icons/si";
import { RiInfinityLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import { VscAzure } from "react-icons/vsc";


const skills = [
  { skill: "Python", icon: <FaPython /> },
  { skill: "Java", icon: <FaJava /> },
  { skill: "FastAPI", icon: <SiFastapi /> },
  { skill: "Flask", icon: <SiFlask /> },
  { skill: "Spring Boot", icon: <SiSpringboot /> },
  { skill: "Elasticsearch", icon: <SiElasticsearch /> },
  { skill: "Docker", icon: <FaDocker /> },
  { skill: "Azure", icon: <VscAzure /> },
  { skill: "AWS", icon: <FaAws /> },
  { skill: "Kafka", icon: <SiApachekafka /> },
  { skill: "RabbitMQ", icon: <SiRabbitmq /> },
  { skill: "Git", icon: <SiGit /> },
  { skill: "CI/CD", icon: <RiInfinityLine /> },
  { skill: "MongoDB", icon: <SiMongodb /> },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Mehmet and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Türkiye. With a strong dedication to problem-solving and innovation,
              I continuously strive to enhance my skills and contribute to impactful projects.
            </p>
            <br />
            <p>
              I graduated from Adana Science and Technology University in 2020 with a Bachelor&apos;s degree in
              Electrical and Electronics Engineering. Since then, I&apos;ve been honing my expertise in software development,
              specializing in backend technologies, and working on scalable, high-performance systems.
            </p>
            <br />
            <p>
              Outside of work, I enjoy exploring diverse hobbies that inspire creativity and personal growth.
              Whether it&apos;s reading thought-provoking books, playing sports, or traveling to new destinations,
              I always seek experiences that broaden my perspective and challenge me to learn something new.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
            <br />
            <p className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:gap-6 md:justify-start">
              <a
                href="https://drive.google.com/file/d/1DErBlPVz8p7Dh6bdSDSaVw4ZOtMrseni/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                <FaDownload className="text-xl" />
                <span className="font-semibold">Download My Resume</span>
              </a>

              <a
                href="mailto:mehmetgencv@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                <MdEmail className="text-xl" />
                <span className="font-semibold">Email Me</span>
              </a>
            </p>





          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    title={item.skill}
                    className="bg-gray-200 flex items-center gap-2 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-teal-700 hover:text-white hover:shadow-lg hover:rotate-1"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.skill}</span>
                  </div>
                );
              })}
            </div>


            {/* <Image
              src="/hero-image.png"
              alt=""
              width={225}
              height={225}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
