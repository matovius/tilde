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
					'--tw-prose-headings': 'rgb(0, 0, 0 / 0.8)',
					'--tw-prose-lead': 'rgb(0, 0, 0 / 0.8)',
					'--tw-prose-links': 'rgb(0, 0, 0 / 0.8)',
					'--tw-prose-bold': 'rgb(0, 0, 0 / 0.8)',
					'--tw-prose-counters': 'rgb(0, 0, 0 / 0.8)',
					'--tw-prose-bullets': 'rgb(0, 0, 0 / 0.8)',
					'--tw-prose-hr': 'rgb(0, 0, 0 / 0.8)',
					'--tw-prose-quotes': 'rgb(0, 0, 0 / 0.8)',
					'--tw-prose-quote-borders': 'rgb(0, 0, 0 / 0.8)',
					'--tw-prose-captions': 'rgb(0, 0, 0 / 0.8)',
					'--tw-prose-code': 'rgb(0, 0, 0 / 0.8)',
					'--tw-prose-pre-code': 'rgb(0, 0, 0 / 0.8)',
					'--tw-prose-pre-bg': 'rgb(0, 0, 0 / 0.8)',
					'--tw-prose-th-borders': 'rgb(0, 0, 0 / 0.8)',
					'--tw-prose-td-borders': 'rgb(0, 0, 0 / 0.8)',
					'--tw-prose-invert-body': 'rgb(255, 255, 255 / 0.8)',
					'--tw-prose-invert-headings': 'rgb(255, 255, 255 / 0.8)',
					'--tw-prose-invert-lead': 'rgb(255, 255, 255 / 0.8)',
					'--tw-prose-invert-links': 'rgb(255, 255, 255 / 0.8)',
					'--tw-prose-invert-bold': 'rgb(255, 255, 255 / 0.8)',
					'--tw-prose-invert-counters': 'rgb(255, 255, 255 / 0.8)',
					'--tw-prose-invert-bullets': 'rgb(255, 255, 255 / 0.8)',
					'--tw-prose-invert-hr': 'rgb(255, 255, 255 / 0.8)',
					'--tw-prose-invert-quotes': 'rgb(255, 255, 255 / 0.8)',
					'--tw-prose-invert-quote-borders': 'rgb(255, 255, 255 / 0.8)',
					'--tw-prose-invert-captions': 'rgb(255, 255, 255 / 0.8)',
					'--tw-prose-invert-code': 'rgb(255, 255, 255 / 0.8)',
					'--tw-prose-invert-pre-code': 'rgb(255, 255, 255 / 0.8)',
					'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
					'--tw-prose-invert-th-borders': 'rgb(255, 255, 255 / 0.8)',
					'--tw-prose-invert-td-borders': 'rgb(255, 255, 255 / 0.8)'
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
