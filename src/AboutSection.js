const AboutSection = () => {
	return (
		<section className="bg-black text-white h-auto" id="About">
			<h1 className="pt-4">01. About me.</h1>
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="md:shrink-0">
					<iframe
						src="https://giphy.com/embed/TFIhbHD5SIcfT2Eg4R"
						width="480"
						height="340"
						className="h-340 w-full object-cover md:h-full md:w-480"
						allowFullScreen
					/>
				</div>
				<div className="p-8">
					<p className="mt-2 text-justify w-auto">
						Hello! My name is Pasha, and I am a first generation Russian American graphic artist and web
						developer who is clearly not obsessed with sci-fi. My interest in software engineering was
						sparked in 2022 when I started Springboard's coding bootcamp. Turns out that building websites
						was my ideal bubble for artistic expression. I'm currently based in Pacific Grove, CA, and
						searching for full-stack or frontend roles. I hope to find myself in a fast-paced, ambitious,
						and healthy postive work environment. Here are a few of the technologies I've been working with
						recently:
					</p>
					<ul id="tech" className="list-none">
						<li>JavaScript (ES6+)</li>
						<li>React</li>
						<li>Node</li>
						<li>Express</li>
						<li>Tailwind CSS</li>
						<li>Framer Motion</li>
						<li>Postgresql</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
