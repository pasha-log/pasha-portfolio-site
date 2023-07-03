import About from './scenes/About';
import Projects from './scenes/Projects';
import Landing from './scenes/Landing';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import Navbar from './scenes/Navbar';
import NavProvider from './context/NavContext';
import { motion } from 'framer-motion';

function App() {
	return (
		<div className="App">
			<NavProvider>
				<Navbar />
				<Landing />
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{
						duration: 0.5
					}}
					variants={{
						hidden: { opacity: 0, x: 50 },
						visible: { opacity: 1, x: 0 }
					}}
				>
					<About />
				</motion.div>
				<Projects />
				<Contact />
				<Footer />
			</NavProvider>
		</div>
	);
}

export default App;
