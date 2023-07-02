import '../assets/Landing.css';
import SocialMediaIcons from '../components/SocialMediaIcons';
import useNav from '../hooks/useNav';
import { motion } from 'framer-motion';

const Landing = () => {
	const homeRef = useNav('00 Home');

	return (
		<div ref={homeRef} id="00 home" className="bg-gradient-to-t from-red via-black to-black ">
			<div id="container" className="grid grid-cols-1 md:grid-cols-2 items-center md:items-start">
				<div className="mt-40 grid place-content-center text-center">
					<h1 id="title" className="text-lg md:text-4xl md:mt-40 text-white ">
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
						<SocialMediaIcons />
					</motion.div>
				</div>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{
						ease: 'linear',
						duration: 2,
						x: { duration: 1 }
					}}
					variants={{
						hidden: { opacity: 0, x: 50 },
						visible: { opacity: 1, x: 0 }
					}}
					className="flex md:grid bottom-0"
				>
					<div className="flex bg-landingterminator place-self-center w-[35rem] h-[24rem] bg-contain md:w-auto md:h-[35rem] md:place-self-auto md:mt-40 bg-center bg-no-repeat" />
				</motion.div>
			</div>
		</div>
	);
};

export default Landing;
