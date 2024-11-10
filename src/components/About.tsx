import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const About = () => {
	return (
		<>
			<section id="about">
				<h2 className="text-lg font-semibold flex items-center mb-2">
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
				 <p className="text-lg leading-relaxed text-muted-foreground ">
              As a passionate full-stack developer, I specialize in crafting exceptional digital experiences 
              using MongoDB, PostgreSQL, TypeScript, Next.js, React, and Express. My comprehensive expertise 
              in both front-end and back-end development allows me to architect and deliver robust, 
              scalable solutions that make a real difference.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              What sets me apart is my deep understanding of the entire development lifecycle - from 
              database design to user interface implementation. I thrive on turning complex requirements 
              into elegant, efficient solutions that not only meet but exceed expectations. Through 
              continuous learning and innovation, I stay at the forefront of technology trends to deliver 
              cutting-edge applications that drive business success.
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
			<h2 className="text-lg flex items-center font-semibold mb-2">
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
			<p className="text-lg leading-relaxed text-muted-foreground">
			I&apos;m currently working as a Full Stack Developer Intern at an innovative AI startup, where I&apos;m at the 
				forefront of developing cutting-edge artificial intelligence solutions. This role allows me to 
				combine my technical expertise with emerging AI technologies, contributing to products that are 
				shaping the future of technology.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
	  Outside of my internship, I maintain an active presence in the developer community through 
				<span className="text-white"> freelance projects </span> and personal innovations. I&apos;m particularly interested in opportunities that 
				bridge the gap between traditional web development and artificial intelligence. If you&apos;re working 
				on something exciting at the intersection of AI and web development,{' '}
        <Link
          className="text-primary hover:text-primary/90 underline-offset-4 hover:underline transition-colors"
          target="_blank"
          href="mailto:jainambagrecha16@gmail.com?subject=Collaboration%20Opportunity&body=Hi,%0A%0AI'm%20reaching%20out%20regarding%20an%20exciting%20opportunity%20I'd%20like%20to%20discuss%20with%20you.%0A%0ABest%20regards,"
          type="email"
        >
          let&apos;s connect
        </Link>
        {' '}and explore potential collaborations.
      </p>
		</section>
	);
};
