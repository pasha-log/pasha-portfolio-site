import React from 'react';
import About from './scenes/About';
import Projects from './scenes/Projects';
import Landing from './scenes/Landing';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import Navbar from './scenes/Navbar';
import NavProvider from './context/NavContext';

const App: React.FC = () => {
	return (
		<div className="App">
			<NavProvider>
				<Navbar />
				<Landing />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</NavProvider>
		</div>
	);
}

export default App;
