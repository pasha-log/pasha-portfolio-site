import React from "react";

const SocialMediaIcons: React.FC = (): JSX.Element => {
	return (
		<div className={`flex justify-center md:justify-start my-10 gap-7`}>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.linkedin.com/in/paul-loguinov-a057501b7/"
				target="_blank"
				rel="noreferrer"
			>
				<div className="p-2 bg-linkedin w-10 md:w-11 h-10 md:h-11 bg-no-repeat bg-contain" />
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://github.com/pasha-log"
				target="_blank"
				rel="noreferrer"
			>
				<div className="p-2 bg-github w-10 md:w-11 h-10 md:h-11 bg-no-repeat bg-contain" />
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.youtube.com/channel/UCR96EwkrIraOPOId7_G5evQ"
				target="_blank"
				rel="noreferrer"
			>
				<div className="p-2 bg-youtube w-10 md:w-11 h-10 md:h-11 bg-no-repeat bg-contain" />
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.instagram.com/grammarcommie/"
				target="_blank"
				rel="noreferrer"
			>
				<div className="p-2 bg-instagram w-10 md:w-11 h-10 md:h-11 bg-no-repeat bg-contain" />
			</a>
		</div>
	);
};

export default SocialMediaIcons;
