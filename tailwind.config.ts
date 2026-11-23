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
				fondo: '#1a1a1a',
        fondo2:'#222222',
				card: '#1a1a1a',
				border: '#ffffff30',
				/* Colores de botones y textos */
				color: '#245ee2',
				primario: '#FFFFFF',
				segundario: '#777777',
			},
			borderRadius: {
				rounded: '2.5rem',
				rounded2: '1.5rem',
			},
			// espacios de pantalla
			margin: {
				screen: '1.25rem',
			},
			padding: {
				screen: '1.25rem',
			},
      gap:{
        screen: '1.25rem'
      },
			fontFamily: {
				sans: ['Ios'],
				pixel: ['Bus'],
			},
			fontSize: {
				// es un titulo grande
				h1: '3rem',
				// es un titulo mediano
				h2: '1.8rem',
				// es un subtitulo
				h3: '1.2rem',
				// es un texto normal
				h4: '1rem',
				// es un texto pequeño
				base: '0.8rem',
			},
    },
  },
  plugins: [],
};

export default config;
