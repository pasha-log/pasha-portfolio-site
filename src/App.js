import './assets/App.css';
import About from './scenes/About';
import Projects from './scenes/Projects';
import { useEffect, useState } from 'react';
// import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';
// import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';

function App() {
	const [ selectedPage, setSelectedPage ] = useState('00 home');
	const [ isTopOfPage, setIsTopOfPage ] = useState(true);
	// const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

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
			<Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			<Landing />
			{/* <div className="w-5/6 mx-auto md:h-full"> */}
			{/* {isAboveMediumScreens && <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />} */}
			{/* <Landing setSelectedPage={setSelectedPage} /> */}
			{/* </div> */}
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
