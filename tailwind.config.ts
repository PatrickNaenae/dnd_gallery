import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"off-white": "#f7f8f8",
				"transparent-white": "rgba(255, 255, 255, 0.08)",
			},
			fontSize: {
				xs: "1.3rem",
				sm: "1.4rem",
				md: "1.6rem",
				lg: "1.8rem",
				xl: ["2.2rem", "1.3"],
				"2xl": "2.4rem",
				"3xl": "2.6rem",
				"4xl": "3.2rem",
				"5xl": "4rem",
				"6xl": ["4.4rem", "1.1"],
				"7xl": ["4.8rem", "1.1"],
				"8xl": ["8rem", "1.1"],
			},
			spacing: {
				0: "0",
				1: "0.4rem",
				2: "0.8rem",
				3: "1.2rem",
				4: "1.6rem",
				5: "2rem",
				6: "2.4rem",
				7: "2.8rem",
				8: "3.2rem",
				9: "3.6rem",
				10: "4rem",
				11: "4.4rem",
				12: "4.8rem",
				13: "5.2rem",
				14: "5.6rem",
				15: "6rem",
				16: "6.4rem",
				"navigation-height": "var(--navigation-height)",
			},
		},
	},
	plugins: [],
};
export default config;
