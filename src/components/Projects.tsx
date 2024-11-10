"use client"
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { FaHashtag } from "react-icons/fa";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Globe, ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      href: "https://event-hive-jainam.vercel.app/",
      title: "EventHive - Event Booking with ease",
      description:
        "Developed an Event Management System to streamline the planning and management of events. Features include event creation, participant registration, and scheduling.",
      stack: ["Hono", "Tailwind CSS", "Prisma","PostGres","React","TypeScript","Cloudflare Workers"],
      repo: "https://github.com/jainam-b/event-management",
      image: "https://res.cloudinary.com/diyfjjyzv/image/upload/v1731212514/nvwxlzfk3ypirebcyywd.png"
    },
    {
      href: "https://regis-omega.vercel.app/",
      title: "Regis Digital: Empowering Digital Solutions",
      description: "Regis Digital: Designed to streamline operations and boost digital engagement, this project focuses on delivering customized digital solutions tailored to client needs.",
      stack: ["React", "Framer Motion", "Tailwind CSS", "Node.js"],
      repo: "https://github.com/jainam-b/regis-digital/", 
      image: "https://res.cloudinary.com/diyfjjyzv/image/upload/v1731213539/d1mjo8zcj2kszn1gnn19.png"
    },
    {
      href: "https://github-card-jainam.vercel.app/",
      title: "DevCard – GitHub Profile Data Visualizer",
      description:
        "Developed a beautiful DevCard that dynamically fetches GitHub profile data and presents it in a visually appealing card format. It includes key stats like repositories, followers, and contributions.",
      stack: ["Nextjs", "Tailwind CSS", "GraphQl","React","TypeScript"],
      repo: "https://github.com/jainam-b/github-card",
      image: "https://res.cloudinary.com/diyfjjyzv/image/upload/v1731212814/ltc81c76cs08phqyuvkh.png"
    },
    {
      href: "https://blog-jainam-b.vercel.app/",
      title: "Medium Blog Clone: Seamless Blogging Experience",
      description: "Create and share your thoughts effortlessly with our Medium blog clone. Enjoy a sleek, user-friendly interface and all the essential features for a perfect blogging experience",
      stack: ["Express", "Tailwind CSS", "Prisma","Postgres", "React","Node.js"],
      repo: "https://github.com/jainam-b/Medium-Blog",
      image: "https://res.cloudinary.com/diyfjjyzv/image/upload/v1731213329/anchyrdangmbjtxybhlu.png"
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { 
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8" id="projects">
      <h2 className="text-xl md:text-2xl flex flex-wrap items-center font-bold pb-4 md:pb-6 bg-clip-text">
        Projects{" "}
        <Link
          className="text-muted-foreground hover:text-gray-900 transition-colors"
          aria-label="anchor"
          scroll
          href="/#projects"
        >
          <FaHashtag className="ml-2 h-4 w-4" />
        </Link>
        <span aria-hidden className="text-muted-foreground/50 text-sm md:text-base ml-2 font-normal">
          (sorted by most recent)
        </span>
      </h2>

      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="group"
            onMouseEnter={() => setHoveredIndex(null)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <Card className="overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
              <div className="relative h-[200px] sm:h-[300px] md:h-[400px] w-full overflow-hidden group">
                <Image
                  src={project.image}
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
                      className="shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <span className="hidden sm:inline">View Live Project</span>
                      <span className="sm:hidden">View Project</span>
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>

              <CardHeader className="space-y-2 p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl font-bold tracking-tight line-clamp-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm md:text-base leading-relaxed text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
                <Separator className="bg-gray-200" />
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {project.href && (
                    <Link target="_blank" href={project.href} className="w-full sm:w-auto">
                      <Button 
                        className="w-full sm:w-auto rounded-full bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:shadow-lg transition-all duration-300"
                      >
                        <Globe className="mr-2 size-4" />
                        Website
                      </Button>
                    </Link>
                  )}
                  {project.repo && (
                    <Link target="_blank" href={project.repo} className="w-full sm:w-auto">
                      <Button 
                        variant="outline"
                        className="w-full sm:w-auto rounded-full border-2 transition-all duration-300"
                      >
                        <GitHubLogoIcon className="mr-2 size-4" />
                        Repository
                      </Button>
                    </Link>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {project.stack.map((tech) => (
                    <Badge 
                      key={tech}
                      className="px-2 md:px-3 py-1 text-xs md:text-sm rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200" 
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;