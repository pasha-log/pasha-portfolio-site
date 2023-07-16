import React from 'react';
import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer: React.FC = (): JSX.Element => {
	return (
		<footer className="h-64 bg-black pt-2">
			<div className="w-10/12 mx-auto">
				<SocialMediaIcons />
				<div className="grid md:flex justify-center md:justify-between text-center ">
					<p className="font-semibold text-2xl text-red">PASHA LOGUINOV</p>
					<p className="text-md text-red">©2023 DESIGNED AND BUILT BY PASHA LOGUINOV.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
