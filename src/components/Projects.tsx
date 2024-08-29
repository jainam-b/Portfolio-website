"use client"
import Link from "next/link";
import { Badge } from "./ui/badge";
import { FaHashtag } from "react-icons/fa";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { X, Globe } from "lucide-react";
import {motion} from "framer-motion";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

const projects: {
	href?: string;
	title: string;
	description: string;
	stack: string[];
	repo?: string;
	X?: string;
}[] = [
	{
		href: "https://event-hive-jainam.vercel.app/",
		title: "EventHive - Event Booking with ease",
		description:
			"Linguify is a fun and engaging language learning app that uses gamification and bite-sized lessons to make acquiring a new language enjoyable. ",
		stack: ["Hono", "Tailwind CSS", "Prisma","PostGres","React","TypeScript","Cloudflare Workers"],
		repo: "https://github.com/jainam-b/event-management",
		// X:   "https://x.com/Jainambagr67095"
	},
	{
		// href: "https://authify.pranavrajveer.com/",
		title: "Digital Canteen: Where Convenience Meets Flavor",
		description: "Digital Canteen: Save time and skip the lines. Order your meals quickly and effortlessly, giving you more time to focus on what matters most—your studies.",
		stack: ["Express", "Tailwind CSS", "MongoDB", "React","Razorpay","Node js"],
		repo: "https://github.com/jainam-b/digital-Canteen/",
	},
	{
		href: "https://blog-jainam-b.vercel.app/",
		title: "Medium Blog Clone: Seamless Blogging Experience",
		description: "Create and share your thoughts effortlessly with our Medium blog clone. Enjoy a sleek, user-friendly interface and all the essential features for a perfect blogging experience",
		stack: ["Express", "Tailwind CSS", "Prisma","Postgres", "React","Node.js"],
		repo: "https://github.com/jainam-b/Medium-Blog",
	}
];

const Projects = () => {
	return (
		<section id="projects">
			<h2 className="text-lg flex items-center font-semibold pb-3">
				Projects{" "}
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#projects"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
				<span aria-hidden className="text-muted-foreground/50 text-sm ml-2">
					(sorted by most recent)
				</span>
			</h2>

			<div className="grid grid-cols-1 gap-4 ">
				{projects.map((project, i) => (
					<Card key={i} className="shadow-sm rounded-2xl dark:hover:bg-zinc-900 cursor-pointer">
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
							<CardDescription className="tracking-normal">{project.description}</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<Separator />
							<div className="flex items-center flex-wrap gap-2 ">
								{project.href && (
									<Link target="_blank" href={project.href}>
										<motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-full"
                                        >
										<Button className="rounded-xl">
											<Globe className="mr-2 size-4" />
											Website
										</Button>
										</motion.button>
									</Link>
								)}
								{project.repo && (
									<Link target="_blank" href={project.repo}>
										<motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-full"
                                        >
										<Button className="rounded-xl">
											<GitHubLogoIcon className="mr-2 size-4" />
											Repo
										</Button>
										</motion.button>
									</Link>
								)}
								{project.X && (
									<Link target="_blank" href={project.X}>
										<motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-full"
                                        >
										<Button className="rounded-xl">
											<X className="mr-2 size-4" />
											View on X
										</Button>
										</motion.button>
									</Link>
								)}
							</div>
							<div className="flex flex-wrap items-center justify-between gap-4">
								<div className="flex flex-wrap gap-2">
									{project.stack.map((tech) => (
										<Badge className="opacity-50 rounded-xl" key={tech}>
											{tech}
										</Badge>
									))}
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Projects;
