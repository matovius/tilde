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
			chrysler: '#4f16c9',
			blue: '#168dc9',
			red: '#fe1226'
		},
		fontFamily: {
			inter: ['Inter Variable', 'sans-serif'],
			fira: ['Fira Code Variable', 'sans-serif']
		},
		spacing: {
			0: '0rem',
			4: '.25rem',
			8: '.5rem',
			12: '.75rem',
			16: '1rem',
			20: '1.25rem',
			24: '1.5rem',
			28: '1.75rem',
			32: '2rem',
			36: '2.25rem',
			40: '2.5rem',
			44: '2.75rem',
			48: '3rem',
			52: '3.25rem',
			56: '3.5rem',
			60: '3.75rem',
			64: '4rem',
			72: '4.5rem',
			84: '5.25rem',
			96: '6rem',
			120: '7.5rem',
			144: '9rem',
			180: '11.25rem',
			240: '15rem'
		},
		extend: {}
	},
	extend: {
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
