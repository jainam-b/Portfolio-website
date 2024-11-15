"use client";

import { motion } from "framer-motion";
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
	return (
		<section id="stack">
			<h2 className="text-lg font-semibold flex items-center">
				Tech-Stack
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#stack"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<div className="flex gap-4 flex-wrap py-3 ">
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
			</div>
			<p>
				{`My strength is building core web applications which can serve people throughout the globe.
				I'm currently working with Typescript, NextJS and HonoJS.  For me my first ❤️ is javaScript.  `}
			</p>
		</section>
	);
};

export default Stack;
