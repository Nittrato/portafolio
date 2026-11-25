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
				rounded: '3.8rem',
				rounded2: '2.8rem',
			},
			// espacios de pantalla
			margin: {
				screen: '1.25rem',
			},
			padding: {
				screen: '1.25rem',
				screen2: "2.2rem"
			},
			gap: {
				screen: '1.25rem'
			},
			fontFamily: {
				sans: ['"JetBrains Mono"', 'monospace'],
				flex: ['Google Sans Flex', 'sans-serif'],
			},
			fontSize: {
				// es un titulo grande
				titulo: '7rem',
				h1: '4.5rem',
				// es un subtitulo usado en el navbar
				h2: '1.1rem',
				// es para las cards para texto primario
				h3: '1rem',
				// es un texto segundario
				h4: '0.9rem',
				// es un texto pequeño
				base: '0.8rem',
			},
		},
	},
	plugins: [],
};

export default config;
