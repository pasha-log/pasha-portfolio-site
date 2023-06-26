import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import '../assets/Navbar.css';

const Link = ({ page, selectedPage, setSelectedPage }) => {
	const lowerCasePage = page.toLowerCase();
	return (
		<AnchorLink
			className={`${selectedPage === lowerCasePage
				? 'text-white'
				: 'text-red'} hover:text-white transition duration-500 no-underline`}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
};

const Navbar2 = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
	const [ isMenuToggled, setIsMenuToggled ] = useState(false);
	const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
	// const navbarBackground = isTopOfPage ? '' : 'bg-red';

	return (
		<nav className={`bg-black z-40 w-full fixed top-0 py-6`}>
			<div className="flex items-center justify-between mx-auto w-5/6">
				<h4 className="text-3xl font-bold text-white">PL</h4>
				{/* <div className="bg-logo w-48 h-48 bg-contain bg-no-repeat bg-center" /> */}

				{/** DESKTOP NAV */}
				{isAboveSmallScreens ? (
					<div className="flex justfiy-between gap-16 text-sm font-semibold">
						<Link page="00 Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
						<Link page="01 About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
						<Link page="02 Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
						<Link page="03 Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
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
						<div className="flex flex-col gap-10 ml-[33%] text=2xl text-red">
							<Link page="00 Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
							<Link page="01 About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
							<Link page="02 Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
							<Link page="03 Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar2;
