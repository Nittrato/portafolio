import type { Config } from "tailwindcss";

/**
 * Configuración de Tailwind CSS
 * Personaliza aquí fuentes, colores, espaciados y temas del template.
 */
const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				/* Colores de fondo */
				fondo: '#222222',
				fondo2: '#1a1a1a80',
				card: '#ffffff10',
				border: '#ffffff30',
				/* Colores de botones y textos */
				color: '#8FFF62',
				primario: '#FFFFFF',
				segundario: '#777777',
			},
			borderRadius: {
				rounded: '3rem',
				rounded2: '2rem',
			},
			// espacios de pantalla
			margin: {
				screen: '1.25rem',
			},
			padding: {
				screen: '1.25rem',
				screen2:"1.50rem"
			},
			gap: {
				screen: '1.25rem'
			},
			fontFamily: {
				sans: ['Ios'],
				pixel: ['Bus'],
			},
			fontSize: {
				// es un titulo grande
				h1: '2rem',
				// es un titulo mediano
				h2: '1rem',
				// es un subtitulo
				h3: '0.8rem',
				// es un texto normal
				h4: '0.5rem',
				// es un texto pequeño
				base: '0.3rem',
			},
		},
	},
	plugins: [],
};

export default config;
