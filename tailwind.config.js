/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			tablet: '640px',
			laptop: '1024px',
			desktop: '1280px'
		},
		colors: {
			current: 'currentColor',
			transparent: 'transparent',
			black: '#000000',
			white: '#ffffff',
			chrysler: {
				100: '#dcd0f4',
				200: '#b9a2e9',
				300: '#9573df',
				400: '#7245d4',
				500: '#4f16c9',
				600: '#3f12a1',
				700: '#2f0d79',
				800: '#200950',
				900: '#100428'
			},
			blue: {
				100: '#d0e8f4',
				200: '#a2d1e9',
				300: '#73bbdf',
				400: '#45a4d4',
				500: '#168dc9',
				600: '#1271a1',
				700: '#0d5579',
				800: '#093850',
				900: '#041c28'
			}
		},
		fontFamily: {
			inter: ['Inter Variable', 'sans-serif'],
			fira: ['Fira Code Variable', 'sans-serif']
		},
		extend: {}
	},
	extend: {
		spacing: {},
		typography: {
			DEFAULT: {
				css: {
					color: 'rgb(0, 0, 0 / 0.8)',
					a: {
						color: '#4f16c9'
					}
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography')({
			className: 'wysiwyg'
		})
	]
};
