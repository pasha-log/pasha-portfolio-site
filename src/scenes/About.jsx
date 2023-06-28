import '../assets/About.css';
import useNav from '../hooks/useNav';
import { motion } from 'framer-motion';

const About = () => {
	const aboutRef = useNav('01 About');

	return (
		<section ref={aboutRef} className="bg-black text-white h-auto py-12" id="01 about">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{
					duration: 0.5
				}}
				variants={{
					hidden: { opacity: 0, x: 50 },
					visible: { opacity: 1, x: 0 }
				}}
			>
				<h1 className="py-4 text-4xl">01. About me.</h1>
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="md:shrink-0">
						<iframe
							src="https://giphy.com/embed/TFIhbHD5SIcfT2Eg4R"
							width="480"
							height="340"
							className="h-340 w-full object-cover md:h-full md:w-480"
							allowFullScreen
							title="skull-crush"
						/>
					</div>
					<div className="p-8">
						<p className="mt-2 text-justify w-auto">
							Hello! My name is Pasha, and I am a first generation Russian American graphic artist and web
							developer who is clearly not obsessed with sci-fi. My interest in software engineering was
							sparked in 2022 when I started <span className="text-red">Springboard's</span> coding
							bootcamp. Turns out that building websites was my ideal way of combining my intellectual and
							artistic interests. I'm currently based in{' '}
							<span className="text-red">Pacific Grove, CA</span>, and searching for full-stack or
							frontend roles. I hope to find myself in a fast-paced, ambitious, and healthy postive work
							environment. Here are a few of the technologies I've been working with recently:
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 py-8">
							<ul id="tech">
								<li>JavaScript (ES6+)</li>
								<li>Node</li>
								<li>Express</li>
								<li>Postgresql</li>
							</ul>

							<ul id="tech">
								<li>Tailwind CSS</li>
								<li>Framer Motion</li>
								<li>React</li>
								<li>Typescript</li>
							</ul>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default About;
