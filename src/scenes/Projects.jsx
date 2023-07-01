import useNav from '../hooks/useNav';
import { motion } from 'framer-motion';

const Projects = () => {
	const projectsRef = useNav('02 Projects');

	return (
		<section ref={projectsRef} className="bg-red text-white" id="02 projects">
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
				<h1 className="py-4 text-4xl">02. Some Things I've Built</h1>
			</motion.div>

			<div className="grid grid-cols-1 md:p-10">
				{/** INSTAPOST */}
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
					<div className="grid grid-cols-1 md:grid-cols-2 md:p-10 items-center">
						<div
							id="p1"
							className="bg-instapost w-0 h-0 md:w-full md:h-full bg-center bg-contain bg-no-repeat md:pt-8 md:pb-20"
						/>
						<div className="pb-8 md:pt-8 md:pb-20 bg-black rounded m-2">
							<div className="flex md:flex-row justify-center pt-4 px-4 md:px-0">
								<h2 className="text-base md:text-3xl pt-2 md:pt-1 font-extrabold mr-2">
									Instapost (An Instagram Mock)
								</h2>
								<a href="https://github.com/pasha-log/capstone2-frontend">
									<div className="p-2 bg-github w-10 md:w-11 h-10 md:h-11 bg-no-repeat bg-contain" />
								</a>
								<a href="https://pasha-log-instapost.surge.sh/login">
									<div className="p-2 bg-link w-11 md:w-12 h-11 md:h-12 bg-center" />
								</a>
							</div>
							<p className="mt-2 text-justify w-auto p-4 pt-4">
								This application is a responsive React front end for my{' '}
								<a
									href="https://github.com/pasha-log/capstone2-backend"
									className="text-red hover:text-white no-underline"
								>
									Instapost API
								</a>, which works together to create a social media website where users can share, like,
								comment, and crop photos. Users can search for other users and follow them, and stay up
								to date with posts that their friends have created.
							</p>
							<ul className="flex flex-wrap items-center justify-center text-sm px-3">
								<li className="mr-4">JavaScript</li>
								<li className="mr-4">Node</li>
								<li className="mr-4">Express</li>
								<li className="mr-4">Postgresql</li>
								<li className="mr-4">React</li>
								<li className="mr-4">Reactstrap</li>
								<li className="mr-4">React Hook Form</li>
								<li className="mr-4">React Easy Crop</li>
								<li className="mr-4">Material UI</li>
								<li className="mr-4">Amazon S3</li>
								<li className="mr-4">Heroku</li>
							</ul>
						</div>
					</div>
				</motion.div>
				{/** JOBLY */}
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
					<div className="grid grid-cols-1 md:grid-cols-2 md:p-10 items-center">
						<div className="pb-8 md:pt-8 md:pb-20 bg-black rounded m-2">
							<div className="flex md:flex-row justify-center pt-4 px-4 md:px-0">
								<h2 className="text-base md:text-3xl pt-2 md:pt-1 font-extrabold mr-2">
									Jobly (Job Search Site)
								</h2>
								<a href="https://github.com/pasha-log/react-jobly-frontend">
									<div className="p-2 bg-github w-10 md:w-11 h-10 md:h-11 bg-no-repeat bg-contain" />
								</a>
								<a href="https://pasha-jobly.surge.sh/">
									<div className="p-2 bg-link w-11 md:w-12 h-11 md:h-12 bg-center" />
								</a>
							</div>
							<p className="mt-2 text-justify w-auto p-4 pt-4">
								This application is a responsive React front end for my{' '}
								<a
									href="https://github.com/pasha-log/react-jobly-backend"
									className="text-red hover:text-white no-underline"
								>
									Jobly API
								</a>, which works together to create a mock job search site. Users can search and view
								different mock companies and jobs based on certain criteria, and "apply" to those jobs
								with the click of a button.
							</p>
							<ul className="flex flex-wrap items-center justify-center text-sm px-3">
								<li className="mr-4">JavaScript</li>
								<li className="mr-4">Node</li>
								<li className="mr-4">Express</li>
								<li className="mr-4">Postgresql</li>
								<li className="mr-4">React</li>
								<li className="mr-4">Reactstrap</li>
								<li className="mr-4">React Hook Form</li>
								<li className="mr-4">Heroku</li>
							</ul>
						</div>
						<div
							id="p2"
							className="bg-jobly w-0 h-0 md:w-full md:h-full bg-center bg-contain bg-no-repeat md:pt-8 md:pb-20"
						/>
					</div>
				</motion.div>
				{/** LIGHTS OUT */}
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
					<div className="grid grid-cols-1 md:grid-cols-2 md:p-10 items-center">
						<div
							id="p3"
							className="bg-lightsout w-0 h-0 md:w-full md:h-full bg-center bg-contain bg-no-repeat md:pt-8 md:pb-20"
						/>
						<div className="pb-8 md:pt-8 md:pb-20 bg-black rounded m-2">
							<div className="flex md:flex-row justify-center pt-4 px-4 md:px-0">
								<h2 className="text-base md:text-3xl pt-2 md:pt-1 font-extrabold mr-2">
									Lights Out Game
								</h2>
								<a href="https://github.com/pasha-log/react-lights-out">
									<div className="p-2 bg-github w-10 md:w-11 h-10 md:h-11 bg-no-repeat bg-contain" />
								</a>
								<a href="https://pasha-log.github.io/react-lights-out/">
									<div className="p-2 bg-link w-11 md:w-12 h-11 md:h-12 bg-center" />
								</a>
							</div>
							<p className="mt-2 text-justify w-auto bg-black p-4 rounded">
								A fun, but tricky game. On each render, the board has a random assortment of lit and
								unlit cells. The player's objective is to successfully turn off all the lit cells. The
								catch is that unlighting one cell will flip the adjacent cells from top, bottom, left,
								right directions.
							</p>
							<ul className="flex flex-wrap items-center justify-center text-sm px-3">
								<li className="mr-4">GitHub Pages</li>
								<li className="mr-4">React</li>
								<li className="mr-4">JavaScript</li>
							</ul>
						</div>
					</div>
				</motion.div>
				{/** CARBON PRINT */}
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
					<div className="grid grid-cols-1 md:grid-cols-2 md:p-10 items-center">
						<div className="pb-8 md:pt-8 md:pb-20 bg-black rounded m-2">
							<div className="flex md:flex-row justify-center pt-4 px-4 md:px-0">
								<h2 className="text-base md:text-3xl pt-2 md:pt-1 font-extrabold mr-2">
									Carbon Footprint Calculator
								</h2>
								<a href="https://github.com/pasha-log/capstone1">
									<div className="p-2 bg-github w-10 md:w-11 h-10 md:h-11 bg-no-repeat bg-contain" />
								</a>
								<a href="https://carbonprint.herokuapp.com/">
									<div className="p-2 bg-link w-11 md:w-12 h-11 md:h-12 bg-center" />
								</a>
							</div>
							<p className="mt-2 text-justify w-auto p-4">
								Users are able to create an account and have four forms to choose from: vehicles,
								shipping, flights, and electricity. This application stores your emissions in a SQL
								database, and with Chart.js users can see the emissions they've created over time
								driving in their vehicles, creating a visual element to the emissions we make on a daily
								basis. The vehicle, shipping, and electricity carbon footprint estimates are calculated
								through{' '}
								<a className="text-red hover:text-white" href="https://docs.carboninterface.com/#/">
									Carbon Interface API
								</a>{' '}
								with Flask requests.
							</p>
							<ul className="flex flex-wrap items-center justify-center text-sm px-3">
								<li className="mr-4">jQuery</li>
								<li className="mr-4">Python</li>
								<li className="mr-4">Flask</li>
								<li className="mr-4">Postgresql</li>
								<li className="mr-4">SQLAlchemy</li>
								<li className="mr-4">Chart.js</li>
								<li className="mr-4">WTForms</li>
								<li className="mr-4">Heroku</li>
							</ul>
						</div>
						<div
							id="p4"
							className="bg-carbonprint w-0 h-0 md:w-full md:h-full bg-center bg-contain bg-no-repeat md:pt-8 md:pb-20"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
