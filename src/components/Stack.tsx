"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaHashtag } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import {
	SiAmazon,
	SiCplusplus,
	SiCss3,
	SiDocker,
	SiExpress,
	SiHiveBlockchain,
	SiJavascript,
	SiKubernetes,
	SiMysql,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiPython,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiMongodb,
	SiGithub
} from "react-icons/si";
import { Magnetic } from "./Magnetic";
import { useRef } from "react";

const stack: { name: string; icon: IconType }[] = [
	{ name: "JavaScript", icon: SiJavascript },
	{ name: "TypeScript", icon: SiTypescript },
	{ name: "Node.js", icon: SiNodedotjs },
	{ name: "Next.js", icon: SiNextdotjs },
	{ name: "React", icon: SiReact },
	{ name: "Docker", icon: SiDocker },
	{ name: "PostgreSQL", icon: SiPostgresql },
	{ name: "Version Control System", icon: SiGithub },
	{ name: "Tailwind CSS", icon: SiTailwindcss },
	{ name: "HonoJs", icon: SiExpress },
	{ name: "Prisma", icon: SiPrisma },
	{ name: "AWS", icon: SiAmazon },
	{ name: "MongoDB", icon: SiMongodb },
	{ name: "Python", icon: SiPython },
];

const Stack = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"]
	});
	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
	const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

	return (
		<motion.section 
			ref={ref}
			id="stack"
			style={{ opacity, y }}
		>
			<motion.h2 
				className="text-lg font-semibold flex items-center"
				whileHover={{ x: 5 }}
				transition={{ duration: 0.2 }}
			>
				Tech-Stack
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#stack"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</motion.h2>
			<motion.div 
				className="flex gap-4 flex-wrap py-3"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				{stack.map((tech, i) => (
					<Magnetic stretch="sm" key={i}>
						<motion.div
							whileHover={{
								scale: 1.05,
								rotate: Math.random() * 2.5,
								transition: { duration: 0.1 },
							}}
							className=" flex items-center w-fit border p-1 px-2 cursor-pointer leading-none hover:shadow-md dark:shadow-border/25 transition-shadow duration-100"
						>
							<tech.icon className="h-5 w-5 mr-2" />
							{tech.name}
						</motion.div>
					</Magnetic>
				))}
			</motion.div>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
			>
				{`My strength is building core web applications which can serve people throughout the globe.
				I'm currently working with Typescript, NextJS and HonoJS.  For me my first ❤️ is javaScript.  `}
			</motion.p>
		</motion.section>
	);
};

export default Stack;
