import React, { useState, useRef, useEffect } from 'react';
import '../styles/Landing.css';
import SocialMediaIcons from '../components/SocialMediaIcons';
import useNav from '../hooks/useNav';
import { motion } from 'framer-motion';
import MovingEyes from '../components/MovingEyes';

const Landing: React.FC = (): JSX.Element => {
	const ref = useRef<HTMLImageElement>(null!);
	let [ mouseX, setMouseX ] = useState<number>(undefined!);
	let [ mouseY, setMouseY ] = useState<number>(undefined!);
	let [ angleDegree, setAngleDegree ] = useState<number>(undefined!);

	useEffect(
		() => {
			function angle(cx: number, cy: number, ex: number, ey: number) {
				const dy = ey - cy;
				const dx = ex - cx;
				const radians = Math.atan2(dy, dx);
				const degree = radians * 180 / Math.PI;
				return degree;
			}
			const rekt = ref.current.getBoundingClientRect();
			const anchorX = rekt.left + rekt.width / 2;
			const anchorY = rekt.top + rekt.height / 2;

			return () => {
				setAngleDegree(angle(mouseX, mouseY, anchorX, anchorY));
			};
		},
		[ mouseX, mouseY ]
	);

	const homeRef = useNav('00 Home');

	return (
		<div
			onMouseMove={(e) => {
				setMouseX(e.clientX);
				setMouseY(e.clientY);
			}}
			ref={homeRef}
			id="00 home"
			className="bg-gradient-to-t from-red via-black to-black"
		>
			<div id="container" className="grid grid-cols-1 md:grid-cols-2 items-center md:items-start">
				<div className="mt-40 grid place-content-center text-center">
					<h1 id="title" className="text-lg md:text-5xl md:mt-40 text-white">
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
					className="grid md:mt-40 place-items-center items-center "
				>
					<MovingEyes reference={ref} angleDegree={angleDegree} />
				</motion.div>
			</div>
		</div>
	);
};

export default Landing;
