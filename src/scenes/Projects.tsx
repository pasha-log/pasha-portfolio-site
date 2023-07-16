import useNav from '../hooks/useNav';
import { motion } from 'framer-motion';
import instapost from '../assets/instapost.png';
import jobly from '../assets/jobly.png';
import lightsout from '../assets/lights-out.png';
import carbonprint from '../assets/carbon-print.png';
import React from 'react';
import ProjectProps from '../interfaces/ProjectProps';
import ProjectInfo from '../components/ProjectInfo';

const technologies: any = {
	instapostapi: {
		url: "https://github.com/pasha-log/capstone2-backend",
		name: "Instapost API"
	},
	joblyapi: {
		url: "https://github.com/pasha-log/react-jobly-backend",
		name: "Jobly API"
	},
	javascript: {
		url: "https://www.javascript.com/",
		name: "JavaScript"
	},
	node: {
		url: "https://nodejs.org/en",
		name: "Node"
	},
	express: {
		url: "https://expressjs.com/",
		name: "Express"
	},
	postgresql: {
		url: "https://www.postgresql.org/",
		name: "PostgreSQL"
	},
	react: {
		url: "https://react.dev/",
		name: "React"
	},
	reactstrap: {
		url: "https://reactstrap.github.io/?path=/docs/home-installation--page",
		name: "Reactstrap"
	},
	reacthookform: {
		url: "https://www.react-hook-form.com/",
		name: "React Hook Form"
	}, 
	reacteasycrop: {
		url: "https://www.npmjs.com/package/react-easy-crop", 
		name: "React Easy Crop"
	},
	materialui: {
		url: "https://mui.com/",
		name: "Material UI"
	}, 
	amazons3: {
		url: "https://aws.amazon.com/s3/", 
		name: "Amazon S3"
	}, 
	heroku: {
		url: "https://en.wikipedia.org/wiki/Heroku", 
		name: "Heroku"
	}, 
	githubpages: {
		url: "https://pages.github.com/", 
		name: "GitHub Pages"
	}, 
	jquery: {
		url: "https://jquery.com/", 
		name: "jQuery"
	}, 
	python: {
		url: "https://www.python.org/", 
		name: "Python"
	}, 
	flask: {
		url: "https://flask.palletsprojects.com/en/2.3.x/", 
		name: "Flask"
	}, 
	sqlalchemy: {
		url: "https://www.sqlalchemy.org/", 
		name: "SQLAlchemy"
	}, 
	chartjs: {
		url: "https://www.chartjs.org/", 
		name: "Chart.js"
	}, 
	wtforms: {
		url: "https://wtforms.readthedocs.io/en/3.0.x/", 
		name: "WTForms"
	}, 
	carboninterface: {
		url: "https://docs.carboninterface.com/#/", 
		name: "Carbon Interface API"
	}
};

const projects: Array<ProjectProps> = [
	{
		title: "Instapost (An Instagram Mock)",
		gitHub: "https://github.com/pasha-log/capstone2-frontend",
		link: "https://pasha-log-instapost.surge.sh/login",
		image: instapost,
		description: "This application is a responsive React front end for my Instapost API, which works together to create a social media website where users can share, like, comment, reply to comments, and crop photos. Users can search for other users and follow them, and stay up to date with posts that their friends have created.", 
		techStack: [
			technologies.javascript, 
			technologies.node, 
			technologies.express,
			technologies.express,
			technologies.postgresql,
			technologies.react,
			technologies.reactstrap,
			technologies.reacthookform,
			technologies.reacteasycrop,
			technologies.materialui,
			technologies.amazons3,
			technologies.heroku,
			technologies.instapostapi
		],
		isImageFirst: true,
		alt: "instapost"
	}, 
	{
		title: "Jobly (Job Search Site)", 
		gitHub: "https://github.com/pasha-log/react-jobly-frontend", 
		link: "https://pasha-jobly.surge.sh/", 
		image: jobly, 
		description: "This application is a responsive React front end for my Jobly API, which works together to create a mock job search site. Users can search and view different mock companies and jobs based on certain criteria, and 'apply' to those jobs with the click of a button.", 
		techStack: [
			technologies.javascript, 
			technologies.node, 
			technologies.express,
			technologies.express,
			technologies.postgresql,
			technologies.react,
			technologies.reactstrap,
			technologies.reacthookform,
			technologies.heroku,
			technologies.joblyapi
		], 
		isImageFirst: false,
		alt: "jobly"
	},
	{
		title: "Lights Out Game", 
		gitHub: "https://github.com/pasha-log/react-lights-out", 
		link: "https://pasha-log.github.io/react-lights-out/", 
		image: lightsout, 
		description: "A fun, but tricky game. On each render, the board has a random assortment of lit and unlit cells. The player's objective is to successfully turn off all the lit cells. The catch is that unlighting one cell will flip the adjacent cells from top, bottom, left, right directions.", 
		techStack: [
			technologies.githubpages, 
			technologies.react, 
			technologies.javascript
		], 
		isImageFirst: true,
		alt: "lightsout"
	},
	{
		title: "Carbon Footprint Calculator", 
		gitHub: "https://github.com/pasha-log/capstone1", 
		link: "https://carbonprint.herokuapp.com/", 
		image: carbonprint, 
		description: "Users are able to create an account and have four forms to choose from: vehicles, shipping, flights, and electricity. This application stores your emissions in a PostgreSQL database, and with Chart.js users can see the emissions they've created over time driving in their vehicles, creating a visual element to the emissions we make on a daily basis. The vehicle, shipping, and electricity carbon footprint estimates are calculated through Carbon Interface API with Flask requests.", 
		techStack: [
			technologies.jquery, 
			technologies.python, 
			technologies.flask,
			technologies.sqlalchemy,
			technologies.chartjs,
			technologies.wtforms,
			technologies.heroku,
			technologies.carboninterface
		], 
		isImageFirst: false,
		alt: "carbonprint"
	}
];

const Projects: React.FC = (): JSX.Element => {
	const projectsRef = useNav('02 Projects');

	return (
		<div
			ref={projectsRef}
			className="bg-no-repeat bg-bottom bg-nukedcity place-self-center bg-contain md:w-full md:place-self-auto bg-red text-white"
			id="02 projects"
		>
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
				className="pt-20"
			>
				<h1 className="py-4 text-4xl text-center">02. Some Things I've Built</h1>
			</motion.div>

			<div className="grid grid-cols-1 md:p-10">
				{projects.map((project, index) => {
                    return <ProjectInfo project={project} key={index} />;
                })}
			</div>
		</div>
	);
};

export default Projects;
