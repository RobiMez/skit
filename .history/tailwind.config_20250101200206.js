import plugin from 'tailwindcss/plugin'

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `hsl(var(${variable}) / 1)`
    }
    return `hsl(var(${variable}) / ${opacityValue})`
  }
}

function hexToHSL(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;

  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	theme: {
		extend: {
			fontFamily: {
				// Sets the font-display, font-content, and font-handwriting
				'display': ['var(--font-display)', 'serif'],
				'content': ['var(--font-content)', 'sans-serif'],
				'handwriting': ['var(--font-handwriting)', 'cursive'],
			},
			fontWeight: {
				// Sets the weights for the fonts
				'display': ['var(--font-display-weight)',],
				'content': ['var(--font-content-weight)',],
				'handwriting': ['var(--font-handwriting-weight)',],
			},
			fontSize: {
				// Defines extra font sizes 
				'xs': '0.56rem',
				'sm': '0.75rem',
				'base': '1rem',
				'lg': '1.33rem',
				'xl': '1.78rem',
				'2xl': '2.37rem',
				'3xl': '3.16rem',
				'4xl': '4.21rem',
				'5xl': '5.61rem',
				'6xl': '7.48rem',
				'7xl': '9.97rem',
			},
			colors: {
				// Enables the use of text-primary, bg-primary, etc.
				primary: withOpacityValue('--primary'),
				secondary: withOpacityValue('--secondary'),
				background: withOpacityValue('--background'),
				text: withOpacityValue('--text'),
			},
			textColor: {
				primary: withOpacityValue('--primary'),
				secondary: withOpacityValue('--secondary'),
				background: withOpacityValue('--background'),
				text: withOpacityValue('--text'),
			},
			backgroundColor: {
				primary: withOpacityValue('--primary'),
				secondary: withOpacityValue('--secondary'),
				background: withOpacityValue('--background'),
				text: withOpacityValue('--text'),
			},
			borderColor: {
				primary: withOpacityValue('--primary'),
				secondary: withOpacityValue('--secondary'),
				background: withOpacityValue('--background'),
				text: withOpacityValue('--text'),
			},
			// Add theme-specific variables
			themeVariables: {
				default: {
					// Defines the fonts in use by font-display, font-content, and font-handwriting
					'font-display': 'Lexend',
					'font-content': 'Lexend',
					'font-handwriting': 'Dawning of a New Day',

					light: {
						// Defines the variables in use by text-primary, bg-primary, etc.
						'primary': '#145362',
						'secondary': '#ffebd0',
						'background': '#fefcfb',
						'text': '#333333',

						// Defines the weights in use by font-display, font-content, and font-handwriting
						'font-display-weight': '500',
						'font-content-weight': '400',
						'font-handwriting-weight': '400',
					},
					dark: {
						'primary': '#84a98c',
						'secondary': '#34D399',
						'background': '#2f3e46',
						'text': '#fefcfb',

						'font-display-weight': '500',
						'font-content-weight': '400',
						'font-handwriting-weight': '400',

					},
				},

				playful: {
					'font-display': 'Fredoka',
					'font-content': 'Lexend',
					'font-handwriting': 'Amatic SC',

					light: {
						'primary': '#FF6B6B',
						'secondary': '#4ECDC4',
						'background': '#FFFFFF',
						'text': '#2C3E50',
						'radius': '0.2em',

						'font-display-weight': '400',
						'font-content-weight': '400',
						'font-handwriting-weight': '400',

					},
					dark: {
						'primary': '#FF8787',
						'secondary': '#66D9E8',
						'background': '#2C3E50',
						'text': '#FFFFFF',
						'radius': '0.2em',

						'font-display-weight': '400',
						'font-content-weight': '400',
						'font-handwriting-weight': '400',


					},
				},
			}
		}
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				':root': {
					'--primary': hexToHSL(theme('themeVariables.default.light.primary')),
					'--secondary': hexToHSL(theme('themeVariables.default.light.secondary')),
					'--background': hexToHSL(theme('themeVariables.default.light.background')),
					'--text': hexToHSL(theme('themeVariables.default.light.text')),

					'--font-display': theme('themeVariables.default.font-display'),
					'--font-content': theme('themeVariables.default.font-content'),
					'--font-handwriting': theme('themeVariables.default.font-handwriting'),

					'--font-display-weight': theme('themeVariables.default.light.font-display-weight'),
					'--font-content-weight': theme('themeVariables.default.light.font-content-weight'),
					'--font-handwriting-weight': theme('themeVariables.default.light.font-handwriting-weight'),


				},
				'.dark': {
					'--primary': hexToHSL(theme('themeVariables.default.dark.primary')),
					'--secondary': hexToHSL(theme('themeVariables.default.dark.secondary')),
					'--background': hexToHSL(theme('themeVariables.default.dark.background')),
					'--text': hexToHSL(theme('themeVariables.default.dark.text')),

					'--font-display': theme('themeVariables.default.font-display'),
					'--font-content': theme('themeVariables.default.font-content'),
					'--font-handwriting': theme('themeVariables.default.font-handwriting'),

					'--font-display-weight': theme('themeVariables.default.dark.font-display-weight'),
					'--font-content-weight': theme('themeVariables.default.dark.font-content-weight'),
					'--font-handwriting-weight': theme('themeVariables.default.dark.font-handwriting-weight'),

				},

				'.light .theme-playful ': {
					'--primary': hexToHSL(theme('themeVariables.playful.light.primary')),
					'--secondary': hexToHSL(theme('themeVariables.playful.light.secondary')),
					'--background': hexToHSL(theme('themeVariables.playful.light.background')),
					'--text': hexToHSL(theme('themeVariables.playful.light.text')),

					'--font-display': theme('themeVariables.playful.font-display'),
					'--font-content': theme('themeVariables.playful.font-content'),
					'--font-handwriting': theme('themeVariables.playful.font-handwriting'),

					'--font-display-weight': theme('themeVariables.playful.light.font-display-weight'),
					'--font-content-weight': theme('themeVariables.playful.light.font-content-weight'),
					'--font-handwriting-weight': theme('themeVariables.playful.light.font-handwriting-weight'),
				},
				'.dark .theme-playful': {
					'--primary': hexToHSL(theme('themeVariables.playful.dark.primary')),
					'--secondary': hexToHSL(theme('themeVariables.playful.dark.secondary')),
					'--background': hexToHSL(theme('themeVariables.playful.dark.background')),
					'--text': hexToHSL(theme('themeVariables.playful.dark.text')),

					'--font-display': theme('themeVariables.playful.font-display'),
					'--font-content': theme('themeVariables.playful.font-content'), '--font-handwriting': theme('themeVariables.playful.font-handwriting'),

					'--font-display-weight': theme('themeVariables.playful.dark.font-display-weight'),
					'--font-content-weight': theme('themeVariables.playful.dark.font-content-weight'),
					'--font-handwriting-weight': theme('themeVariables.playful.dark.font-handwriting-weight'),


				},
			})

		})
	]
};

