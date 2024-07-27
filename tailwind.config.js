/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,vue}'],
	theme: {
		extend: {
			colors: {
				'gray-dark': 'var(--clr-gray-dark)',
				'gray-light': 'var(--clr-gray-light)',
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities(
				{
					'.filter-whited': {
						filter: 'invert(100%) sepia(100%) brightness(100%) contrast(100%)',
					},
					'.filter-grayed': {
						filter: 'invert(100%) sepia(100%) brightness(50%) contrast(100%)',
					},
				},
				['responsive', 'hover'] // Optional: add variants if needed
			);
		},
	],
};
