"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { projects } from "@/data/projects"

const ProjectsSection = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [slides, setSlides] = useState<{ src: string }[]>([])
    const [index, setIndex] = useState(0)

    const openLightbox = (images: string[], startIndex: number) => {
        const formatted = images.map((img) => ({ src: img }))
        setSlides(formatted)
        setIndex(startIndex)
        setIsOpen(true)
    }

    return (
        <section id="projects">
            <h1 className="my-10 text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
            </h1>

            <div className="flex flex-col space-y-28">
                {projects.map((project, idx) => (
                    <div key={idx}>
                        <SlideUp offset="-300px 0px -300px 0px">
                            <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                {/* Image Carousel */}
                                <div className="md:w-1/2">
                                    <Carousel
                                        showThumbs={false}
                                        showStatus={false}
                                        autoPlay
                                        infiniteLoop
                                        interval={4000}
                                        swipeable
                                        emulateTouch
                                        className="rounded-xl shadow-xl"
                                    >
                                        {project.images.map((img, i) => (
                                            <div
                                                key={i}
                                                className="flex justify-center items-center cursor-pointer relative w-full"
                                                onClick={() => openLightbox(project.images, i)}
                                            >
                                                <div className="w-full aspect-video flex items-center justify-center overflow-hidden bg-white rounded-xl">
                                                    <Image
                                                        src={img}
                                                        alt={`project image ${i + 1}`}
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        className="w-full h-auto object-contain"
                                                    />
                                                </div>
                                            </div>


                                        ))}
                                    </Carousel>
                                </div>

                                {/* Text Content */}
                                <div className="mt-8 md:w-1/2">
                                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400 whitespace-pre-line">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-teal-100 text-teal-800 text-sm font-medium px-2.5 py-1 rounded dark:bg-teal-900 dark:text-teal-300"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>

                                    {/* GitHub / External Links */}
                                    <div className="flex flex-row align-bottom space-x-4">
                                        <Link href={project.github} target="_blank">
                                            <BsGithub
                                                size={30}
                                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                                            />
                                        </Link>
                                        <Link href={project.link} target="_blank">
                                            <BsArrowUpRightSquare
                                                size={30}
                                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {isOpen && (
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    slides={slides}
                    index={index}
                    carousel={{ finite: false, preload: 2 }}
                    on={{
                        view: ({ index }) => setIndex(index),
                    }}
                />
            )}
        </section>
    )
}

export default ProjectsSection
