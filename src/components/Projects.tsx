"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { FaHashtag } from "react-icons/fa"
import { Button } from "./ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Globe, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  }

  const projects = [
    {
      href: "https://solid-socials.vercel.app/",
      title: "Solid Socials",
      description:
        "Developed a high-converting agency website that turns browsers into buyers through strategic user pathways and compelling action triggers. Every pixel was crafted to build instant credibility and guide visitors seamlessly from their pain points to signing that contract – no fluff, just results-driven design that works.",
      stack: ["Nextjs", "Tailwind CSS", "React", "TypeScript", "Vercel"],
      // repo: "https://github.com/jainam-b/event-management",
      image: "https://res.cloudinary.com/diyfjjyzv/image/upload/v1738061819/psixcdx4i1yffsoaaggx.png",
    },
    {
      href: "https://event-hive-jainam.vercel.app/",
      title: "EventHive - Event Booking with ease",
      description:
        "Developed an Event Management System to streamline the planning and management of events. Features include event creation, participant registration, and scheduling.",
      stack: ["Hono", "Tailwind CSS", "Prisma", "PostGres", "React", "TypeScript", "Cloudflare Workers"],
      repo: "https://github.com/jainam-b/event-management",
      image: "https://res.cloudinary.com/diyfjjyzv/image/upload/v1738062073/uoilrfdkgknstk01mbcm.png",
    },
    {
      href: "https://regis-omega.vercel.app/",
      title: "Regis Digital: Empowering Digital Solutions",
      description:
        "Regis Digital: Designed to streamline operations and boost digital engagement, this project focuses on delivering customized digital solutions tailored to client needs.",
      stack: ["React", "Framer Motion", "Tailwind CSS", "Next.js"],
      repo: "https://github.com/jainam-b/regis-digital/",
      image: "https://res.cloudinary.com/diyfjjyzv/image/upload/v1738062158/b1pavqhstwrtemgkcyd1.png",
    },
    
    {
      href: "https://legal-edge.vercel.app/",
      title: "Expert Legal Support for Your Growing Business",
      description:
        "Empowering SMEs with comprehensive legal solutions that protect your business and fuel your growth. Get started with tailored legal services designed for modern businesses.",
      stack: ["React", "Framer Motion", "Tailwind CSS", "Next.js", "TypeScript", "Payment Gateway", "Razorpay"],
      repo: "https://github.com/jainam-b/Medium-Blog",
      image: "https://res.cloudinary.com/diyfjjyzv/image/upload/v1738062158/nt7srfusuefkblidlcqe.png",
    },
    {
      href: "https://github-card-jainam.vercel.app/",
      title: "DevCard – GitHub Profile Data Visualizer",
      description:
        "Developed a beautiful DevCard that dynamically fetches GitHub profile data and presents it in a visually appealing card format. It includes key stats like repositories, followers, and contributions.",
      stack: ["Nextjs", "Tailwind CSS", "GraphQl", "React", "TypeScript"],
      repo: "https://github.com/jainam-b/github-card",
      image: "https://res.cloudinary.com/diyfjjyzv/image/upload/v1731212814/ltc81c76cs08phqyuvkh.png",
    },
  ]

  return (
    <motion.section
      ref={ref}
      className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-4 sm:py-8"
      id="projects"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <h2 className="text-lg sm:text-xl md:text-2xl flex flex-wrap items-center font-bold pb-3 sm:pb-4 md:pb-6 bg-clip-text">
        Projects{" "}
        <Link
          className="text-muted-foreground hover:text-gray-900 transition-colors"
          aria-label="anchor"
          scroll
          href="/#projects"
        >
          <FaHashtag className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
        </Link>
        <span aria-hidden className="text-muted-foreground/50 text-xs sm:text-sm md:text-base ml-2 font-normal">
          (sorted by most recent)
        </span>
      </h2>

      <motion.div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8" variants={containerVariants}>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="group"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            variants={cardVariants}
            whileHover="hover"
          >
            <Card className="overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 rounded-lg sm:rounded-xl">
              <div className="relative h-[150px] sm:h-[300px] md:h-[400px] w-full overflow-hidden group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={100}
                  priority={i === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.href && (
                  <Link
                    href={project.href}
                    target="_blank"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Button
                      variant="secondary"
                      className="shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-xs sm:text-sm"
                    >
                      <span className="hidden sm:inline">View Live Project</span>
                      <span className="sm:hidden">View Project</span>
                      <ArrowUpRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </Link>
                )}
              </div>

              <CardHeader className="space-y-1 sm:space-y-2 p-3 sm:p-4 md:p-6">
                <CardTitle className="text-base sm:text-lg md:text-xl font-bold tracking-tight line-clamp-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 sm:space-y-4 md:space-y-6 p-3 sm:p-4 md:p-6">
                <Separator className="bg-gray-200" />
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                  {project.href && (
                    <Link target="_blank" href={project.href} className="w-full sm:w-auto">
                      <Button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:shadow-lg transition-all duration-300 text-xs sm:text-sm h-8 sm:h-10">
                        <Globe className="mr-1.5 sm:mr-2 size-3 sm:size-4" />
                        Website
                      </Button>
                    </Link>
                  )}
                  {project.repo && (
                    <Link target="_blank" href={project.repo} className="w-full sm:w-auto">
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto rounded-full border-2 transition-all duration-300 text-xs sm:text-sm h-8 sm:h-10"
                      >
                        <GitHubLogoIcon className="mr-1.5 sm:mr-2 size-3 sm:size-4" />
                        Repository
                      </Button>
                    </Link>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs md:text-sm rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Projects

