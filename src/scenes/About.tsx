import '../styles/About.css';
import useNav from '../hooks/useNav';
// import { motion } from 'framer-motion';

const About = () => {
	const aboutRef = useNav('01 About');

	return (
		<div ref={aboutRef} className="bg-black text-white " id="01 about">
			{/* <motion.div
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
				className="pt-10"
			> */}
			<h1 className="py-4 text-4xl text-center pt-20">01. About me.</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 items-center pb-10">
				<div className="bg-abouttable place-self-center w-[35rem] h-[24rem] bg-contain md:w-auto md:h-[35rem] md:place-self-auto bg-center bg-no-repeat " />
				<div className="p-8">
					<p className="mt-2 text-justify w-auto">
						Hello! My name is Pasha, and I am a first generation Russian American graphic artist and web
						developer who is clearly not obsessed with sci-fi. My interest in software engineering was
						sparked in 2022 when I started{' '}
						<a
							href="https://pdf.credential.net/sfp1ddvq_1687981414273.pdf"
							className="text-red hover:text-white"
						>
							Springboard's
						</a>{' '}
						coding bootcamp. Turns out that building websites was my ideal way of combining my intellectual
						and artistic interests. I'm currently based in{' '}
						<a href="https://www.cityofpacificgrove.org/" className="text-red hover:text-white">
							Pacific Grove, CA
						</a>, and searching for full-stack or frontend roles. I hope to find myself in a creative,
						ambitious, healthy, cooperative work environment. Here are a few of the technologies I've been
						working with recently:
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 py-8 text-center">
						<ul id="tech">
							<li key="1">JavaScript (ES6+)</li>
							<li key="2">Node</li>
							<li key="3">Express</li>
							<li key="4">Postgresql</li>
						</ul>

						<ul id="tech">
							<li key="5">Tailwind CSS</li>
							<li key="6">Framer Motion</li>
							<li key="7">React</li>
							<li key="8">Typescript</li>
						</ul>
					</div>
				</div>
			</div>
			{/* </motion.div> */}
		</div>
	);
};

export default About;
