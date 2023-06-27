import { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { useContext } from 'react';
import { NavContext } from '../context/NavContext';

const Navbar = () => {
	const { activeLinkId } = useContext(NavContext);
	console.log(activeLinkId);
	const navLinks = [ '00 Home', '01 About', '02 Projects', '03 Contact' ];

	const renderNavLink = (content) => {
		const scrollToId = `${content.toLowerCase()}`;

		const handleClickNav = () => {
			document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
		};

		return (
			<button
				className={`bg-black hover:text-white transition duration-500 ${activeLinkId === content
					? 'text-white'
					: 'text-red'}`}
				onClick={handleClickNav}
			>
				{content}
			</button>
		);
	};
	const [ isMenuToggled, setIsMenuToggled ] = useState(false);
	const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');

	return (
		<nav className={`bg-black z-40 w-full fixed top-0 py-6`}>
			<div className="flex items-center justify-between mx-auto w-5/6">
				<h4 className="text-3xl font-bold text-white">PL</h4>
				{/* <div className="bg-logo w-48 h-48 bg-contain bg-no-repeat bg-center" /> */}

				{/** DESKTOP NAV */}
				{isAboveSmallScreens ? (
					<div className="flex justfiy-between items-center gap-16 text-sm font-semibold">
						{navLinks.map((nav) => renderNavLink(nav))}
						<a
							href="https://drive.google.com/file/d/18Yg-xQuzpUBNR953bKEzgcV6Svv8CEuC/view?usp=sharing"
							className="p-1 bg-red font-semibold text-white hover:bg-black hover:text-white transition duration-500 no-underline"
						>
							RESUME
						</a>
					</div>
				) : (
					<button
						className="rounded-full bg-red p-2 bg-menuopen w-12 h-12"
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					/>
				)}

				{/** MOBILE MENU POPUP */}
				{!isAboveSmallScreens &&
				isMenuToggled && (
					<div className="fixed right-0 bottom-0 h-full bg-black w-[300px]">
						{/** CLOSE ICON */}
						<div className="flex justify-end p-12">
							<button
								onClick={() => setIsMenuToggled(!isMenuToggled)}
								className="rounded-full bg-red p-2 bg-menuclose w-12 h-12"
							/>
						</div>

						{/** MENU ITEMS */}
						<div className="flex flex-col gap-10 ml-[10%] text=2xl text-red">
							{navLinks.map((nav) => renderNavLink(nav))}
							<a
								href="https://drive.google.com/file/d/18Yg-xQuzpUBNR953bKEzgcV6Svv8CEuC/view?usp=sharing"
								className="p-1 w-28 place-self-center bg-red font-semibold text-white hover:bg-black hover:text-white transition duration-500 no-underline"
							>
								RESUME
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
