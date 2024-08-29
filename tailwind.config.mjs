/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
        'accent-gradient': 'linear-gradient(45deg, rgb(136, 58, 234), rgb(224, 204, 250) 30%, white 60%)',
      },
		},
	},
	plugins: [],
}
