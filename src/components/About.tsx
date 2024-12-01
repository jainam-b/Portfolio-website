"use client"
import Link from "next/link";
import { FaHashtag } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"]
	});
	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
	const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

	return (
		<>
			<motion.section 
				ref={ref}
				id="about"
				style={{ opacity, y }}
			>
				<motion.h2 
					className="text-lg font-semibold flex items-center mb-2"
					whileHover={{ x: 5 }}
					transition={{ duration: 0.2 }}
				>
					About
					<Link
						className="text-muted-foreground"
						aria-label="anchor"
						scroll
						href={"/#about"}
					>
						<FaHashtag className="ml-2 h-3 w-3" />
					</Link>
				</motion.h2>
				<motion.p 
					className="text-lg leading-relaxed text-muted-foreground"
				>
					I&apos;m <span className="text-white"> Jainam Bagrecha </span>, a dynamic full-stack developer with a passion for crafting exceptional digital experiences. Leveraging deep expertise in TypeScript, React, Next.js, and modern database technologies, I transform complex challenges into elegant, user-centric solutions that drive real business impact.
				</motion.p>
				<motion.p 
					className="mt-4 text-lg leading-relaxed text-muted-foreground"
				>
					My approach combines technical excellence with creative problem-solving, allowing me to build scalable applications that not only meet current needs but are also future-ready. I take pride in writing clean, maintainable code and implementing best practices that ensure long-term success.
				</motion.p>
			</motion.section>
			<Present />
		</>
	);
};

export default About;

const Present = () => {
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
			id="present"
			style={{ opacity, y }}
		>
			<motion.h2 
				className="text-lg flex items-center font-semibold mb-2"
				whileHover={{ x: 5 }}
				transition={{ duration: 0.2 }}
			>
				Present{" "}
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#present"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</motion.h2>
			<motion.p 
				className="text-lg leading-relaxed text-muted-foreground"
			>
				Currently, I&apos;m thriving as a <span className="text-white"> Full Stack Developer Intern  at an innovative AI startup </span> where I&apos;m actively shaping the future of technology. In this role, I seamlessly blend modern web development practices with cutting-edge AI technologies, contributing to groundbreaking solutions that push the boundaries of what&apos;s possible.
			</motion.p>
			<motion.p 
				className="mt-4 text-lg leading-relaxed text-muted-foreground"
			>
				Beyond my internship, I remain deeply engaged in the tech ecosystem through
				<span className="text-white"> impactful freelance projects </span> and innovative side ventures. I&apos;m particularly passionate about exploring the convergence of AI and web development, always seeking opportunities to create solutions that leverage both domains. If you&apos;re working on ambitious projects that challenge the status quo,{' '}
				<Link
					className="text-primary hover:text-primary/90 underline-offset-4 hover:underline transition-colors"
					target="_blank"
					href="mailto:jainambagrecha16@gmail.com?subject=Collaboration%20Opportunity&body=Hi,%0A%0AI'm%20reaching%20out%20regarding%20an%20exciting%20opportunity%20I'd%20like%20to%20discuss%20with%20you.%0A%0ABest%20regards,"
					type="email"
				>
					let&apos;s connect
				</Link>
				{' '}and explore how we can create something extraordinary together.
			</motion.p>
		</motion.section>
	);
};
