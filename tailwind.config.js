/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [ './src/**/*.{html,js,jsx,ts,tsx}' ],
	mode: 'jit',
	theme: {
		colors: {
			white: '#ffffff',
			red: '#ff0000',
			black: '#000000'
		},
		screens: {
			xs: '480px',
			sm: '768px',
			md: '1060px'
		},
		extend: {
			backgroundImage: {
				carbonprint: "url('/src/assets/carbon-print.png')",
				instapost: "url('/src/assets/instapost.png')",
				jobly: "url('/src/assets/jobly.png')",
				lightsout: "url('/src/assets/lights-out.png')",
				logo: "url('/src/assets/PL.png')",
				menuopen: "url('/src/assets/icon-hamburger.svg')",
				menuclose: "url('/src/assets/icon-hamburger-close.svg')",
				github: "url('/src/assets/github-mark.svg')",
				link: "url('/src/assets/link.svg')",
				linkedin: "url('/src/assets/linkedin.svg')",
				youtube: "url('/src/assets/youtube.svg')",
				instagram: "url('/src/assets/instagram.svg')",
				landingterminator: "url('/src/assets/pixel-terminator-1.png')",
				abouttable: "url('/src/assets/colored-desk.png')",
				arnold: "url('/src/assets/arnold.png')",
				nukedcity: "url('/src/assets/nuked-city.png')"
			}
		}
	},
	plugins: []
};
