import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const About = () => {
	return (
		<>
			<section id="about">
				<h2 className="text-lg font-semibold flex items-center">
					About
					<Link
						className="text-muted-foreground"
						aria-label="anchor"
						scroll
						href={"/#about"}
					>
						<FaHashtag className="ml-2 h-3 w-3" />
					</Link>
				</h2>
				<p>
					{`I'm am a full-stack developer with expertise in MongoDB, PostgreSQL, TypeScript, Next.js, React, and Express. My experience spans both front-end and back-end development, enabling me to build robust, scalable applications from the ground up. With a solid foundation in both modern technologies and traditional databases, I am committed to continuous learning and innovation. My goal is to leverage my diverse skill set to drive impactful projects and contribute meaningfully to the success of any organization I collaborate with..`}
				</p>
			</section>
			<Present />
		</>
	);
};

export default About;

const Present = () => {
	return (
		<section id="present">
			<h2 className="text-lg flex items-center font-semibold">
				Present{" "}
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#present"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<p>
				{`Currently, I am an intern at DM2Buy. In my free time, I freelance and work on my own projects! I'm always looking for new opportunities to learn and grow, so if you're hiring or have an interesting project, feel free to reach-out  `}
				<Link
					className="text-muted-foreground hover:text-foreground border-b border-muted-foreground hover:border-foreground transition-colors"
					target="_blank"
					href="mailto:jainambagrecha16@gmail.com?subject=Hello!&body=Hi,%20My%20name%20is%20[name]%20and%20I%20have%20a%20hiring%20opportunity%20that%20I%20would%20like%20to%20discuss%20with%20you."
					type="email"
				>
					contact me.
				</Link>
			</p>
		</section>
	);
};
