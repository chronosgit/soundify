/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,vue}'],
	theme: {
		extend: {
			colors: {
				'gray-dark': 'var(--clr-gray-dark)',
			},
		},
	},
	plugins: [],
};
