import '../assets/Landing.css';
import SocialMediaIcons from '../components/SocialMediaIcons';
import useNav from '../hooks/useNav';

const Landing = () => {
	const homeRef = useNav('00 Home');

	return (
		<div ref={homeRef} id="00 home" className="grain-container Landing bg-red">
			<div id="container">
				<div className="contents">
					<h1 id="title" className="text-lg md:text-6xl  text-white ">
						Hello, I'm Pasha Loguinov
					</h1>
					<SocialMediaIcons position={'justify-center'} />
				</div>
			</div>
		</div>
	);
};

export default Landing;
