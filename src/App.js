import './assets/App.css';
import LandingSection from './LandingSection';
import Navbar from './Navbar';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactForm from './ContactForm';

function App() {
	return (
		<div className="App">
			<Navbar />
			<LandingSection />
			<AboutSection />
			<ProjectsSection />
			<ContactForm />
		</div>
	);
}

export default App;
