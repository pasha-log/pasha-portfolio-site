import './App.css';
import LandingSection from './LandingSection';
import Navbar from './Navbar';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactForm from './ContactForm';
import './Styles.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<header>
				<LandingSection />
			</header>
			<AboutSection />
			<ProjectsSection />
			<ContactForm />
		</div>
	);
}

export default App;
