import '../assets/LandingSection.css';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Landing = ({ setSelectedPage }) => {
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

	return (
		<div id="grain" className="grain-container Landing bg-red">
			<div id="container">
				<div className="contents">
					<h1 id="title" className="text-lg md:text-6xl  text-white ">
						Hello, I'm Pasha Loguinov
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Landing;
