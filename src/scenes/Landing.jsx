import '../assets/Landing.css';
import SocialMediaIcons from '../components/SocialMediaIcons';
import useNav from '../hooks/useNav';
import { motion } from 'framer-motion';

const Landing = () => {
	const homeRef = useNav('00 Home');

	return (
		<div ref={homeRef} id="00 home" className="grain-container Landing bg-red">
			<div id="container">
				<div className="contents">
					<h1 id="title" className="text-lg md:text-6xl  text-white ">
						Hello, I'm Pasha Loguinov
					</h1>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{
							delay: 5,
							duration: 0.5
						}}
						variants={{
							hidden: { opacity: 0, x: 50 },
							visible: { opacity: 1, x: 0 }
						}}
					>
						<SocialMediaIcons position={'justify-center'} />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
