import './assets/App.css';
import LandingSection from './LandingSection';
// import Navbar from './Navbar';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactForm from './ContactForm';
import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar2 from './scenes/Navbar';
// import DotGroup from './scenes/DotGroup';
// import Landing from './scenes/Landing';

function App() {
	const [ selectedPage, setSelectedPage ] = useState('home');
	const [ isTopOfPage, setIsTopOfPage ] = useState(true);
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) setIsTopOfPage(true);
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<div className="App">
			{/* <Navbar/> */}
			<Navbar2 isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			<LandingSection />
			{/* <div className="w-5/6 mx-auto md:h-full"> */}
			{/* {isAboveMediumScreens && <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />} */}
			{/* <Landing setSelectedPage={setSelectedPage} /> */}
			{/* </div> */}
			<AboutSection />
			<ProjectsSection />
			<ContactForm />
		</div>
	);
}

export default App;
