import { useEffect, useState } from 'react';
import './assets/Navbar.css';

const Navbar = () => {
	const [ visibility, setVisibility ] = useState('false');
	const [ expanded, setExpanded ] = useState('false');
	const [ show, setShow ] = useState(true);
	let theEnd = 0;
	const controlNavbar = () => {
		var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
		scrollTop > theEnd ? setShow(false) : setShow(true);
		theEnd = scrollTop;
	};

	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, []);

	const navToggleOnClick = () => {
		if (visibility === 'false') {
			setVisibility('true');
			setExpanded('true');
		} else {
			setVisibility('false');
			setExpanded('false');
		}
	};

	return (
		<header className="bg-black primary-header flex">
			{show && (
				<div>
					<img className="logo" alt="" />
				</div>
			)}
			<button
				onClick={navToggleOnClick}
				className="mobile-nav-toggle"
				aria-controls="primary-navigation"
				aria-expanded={expanded}
			>
				<span className="sr-only">Menu</span>
			</button>
			{show && (
				<nav>
					<ul id="primary-navigation" data-visible={visibility} className="primary-navigation flex">
						<li className="active">
							<a className="text-red letter-spacing-2" href="#About">
								<span aria-hidden="true">00.</span>About
							</a>
						</li>
						<li>
							<a className="text-red letter-spacing-2" href="#Projects">
								<span aria-hidden="true">01.</span>Projects
							</a>
						</li>
						<li>
							<a className="text-red letter-spacing-2" href="#Contact">
								<span aria-hidden="true">02.</span>Contact
							</a>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Navbar;
