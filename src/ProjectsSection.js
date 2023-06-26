const ProjectsSection = () => {
	return (
		<section className="bg-red text-white" id="02 projects">
			<h1 className="pt-4">02. Some Things I've Built</h1>
			<div className="grid grid-cols-1 md:p-10">
				{/** INSTAPOST */}
				<div className="grid grid-cols-1 md:grid-cols-2 md:p-10 items-center">
					<div
						id="p1"
						className="bg-instapost w-0 h-0 md:w-full md:h-80 bg-center bg-contain bg-no-repeat md:pt-8 md:pb-20"
					/>
					<div className="md:pt-8 md:pb-20 bg-black rounded m-2">
						<div className="flex md:flex-row justify-center pt-4 px-4 md:px-0">
							<h2 className="text-base md:text-3xl pt-2 md:pt-1 font-extrabold">
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
							<a href="https://github.com/pasha-log/capstone2-backend" className="text-red no-underline">
								Instapost API
							</a>, which works together to create a social media website where users can share, like, and
							comment on photos. Users can search for other users and follow them, and stay up to date
							with posts that their friends have created.
						</p>
						<ul className="flex flex-wrap items-stretch text-justify text-sm px-3">
							<li>JavaScript</li>
							<li>Node</li>
							<li>Express</li>
							<li>Postgresql</li>
							<li>React</li>
							<li>Reactstrap</li>
							<li>React Hook Form</li>
							<li>React Easy Crop</li>
							<li>Material UI</li>
							<li>Amazon S3</li>
							<li>Heroku</li>
						</ul>
					</div>
				</div>
				{/** JOBLY */}
				<div className="grid grid-cols-1 md:grid-cols-2 md:p-10 items-center">
					<div className="md:pt-8 md:pb-20 bg-black rounded m-2">
						<div className="flex md:flex-row justify-center pt-4 px-4 md:px-0">
							<h2 className="text-base md:text-3xl pt-2 md:pt-1 font-extrabold">
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
								className="text-red no-underline"
							>
								Jobly API
							</a>, which works together to create a fake job search site. Users can search and view
							different mock companies and jobs based on certain criteria, and "apply" to those jobs with
							the click of a button.
						</p>
						<ul className="flex flex-wrap items-stretch text-justify text-sm px-3">
							<li>JavaScript</li>
							<li>Node</li>
							<li>Express</li>
							<li>Postgresql</li>
							<li>React</li>
							<li>Reactstrap</li>
							<li>React Hook Form</li>
							<li>Heroku</li>
						</ul>
					</div>
					<div
						id="p2"
						className="bg-jobly w-0 h-0 md:w-full md:h-80 bg-center bg-contain bg-no-repeat md:pt-8 md:pb-20"
					/>
				</div>
				{/** LIGHTS OUT */}
				<div className="grid grid-cols-1 md:grid-cols-2 md:p-10 items-center">
					<div
						id="p3"
						className="bg-lightsout w-0 h-0 md:w-full md:h-80 bg-center bg-contain bg-no-repeat md:pt-8 md:pb-20"
					/>
					<div className="md:pt-8 md:pb-20 bg-black rounded m-2">
						<div className="flex md:flex-row justify-center pt-4 px-4 md:px-0">
							<h2 className="text-base md:text-3xl pt-2 md:pt-1 font-extrabold">Lights Out Game</h2>
							<a href="https://github.com/pasha-log/react-lights-out">
								<div className="p-2 bg-github w-10 md:w-11 h-10 md:h-11 bg-no-repeat bg-contain" />
							</a>
							<a href="https://pasha-log.github.io/react-lights-out/">
								<div className="p-2 bg-link w-11 md:w-12 h-11 md:h-12 bg-center" />
							</a>
						</div>
						<p className="mt-2 text-justify w-auto bg-black p-4 rounded">
							A fun, but tricky game. On each render, the board has a random assortment of lit and unlit
							cells. The player's objective is to successfully turn off all the lit cells.
						</p>
						<ul className="flex flex-wrap items-stretch text-justify text-sm px-3">
							<li>GitHub Pages</li>
							<li>React</li>
							<li>JavaScript</li>
						</ul>
					</div>
				</div>
				{/** CARBON PRINT */}
				<div className="grid grid-cols-1 md:grid-cols-2 md:p-10 items-center">
					<div className="md:pt-8 md:pb-20 bg-black rounded m-2">
						<div className="flex md:flex-row justify-center pt-4 px-4 md:px-0">
							<h2 className="text-base md:text-3xl pt-2 md:pt-1 font-extrabold">
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
							Users are able to create an account and have four forms to choose from: vehicles, shipping,
							flights, and electricity. This application stores your emissions in a SQL database, and with
							Chart.js users can see the emissions they've created over time driving in their vehicles,
							creating a visual element to the emissions we make on a daily basis. The vehicle, shipping,
							and electricity carbon footprint estimates are calculated through Carbon Interface with
							Python requests.
						</p>
						<ul className="flex flex-wrap items-stretch text-justify text-sm px-3">
							<li>jQuery</li>
							<li>Python</li>
							<li>Flask</li>
							<li>Postgresql</li>
							<li>SQLAlchemy</li>
							<li>Chart.js</li>
							<li>WTForms</li>
							<li>Heroku</li>
						</ul>
					</div>
					<div
						id="p4"
						className="bg-carbonprint w-0 h-0 md:w-full md:h-80 bg-center bg-contain bg-no-repeat md:pt-8 md:pb-20"
					/>
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
