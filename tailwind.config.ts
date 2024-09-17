import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        'radial-green': 'radial-gradient(circle at center, #4DA768 40%, #26874E 100%)',
		'radial-rays': `
          radial-gradient(circle, rgba(0, 63, 31, 0.2) 30%, transparent 70%),
		  conic-gradient(from 0deg, rgba(0, 63, 31, 0.3) 0%, transparent 25%, rgba(0, 63, 31, 0.3) 50%, transparent 75%, rgba(0, 63, 31, 0.3) 100%)
        `,
	},
    },
  },
  plugins: [],
} satisfies Config;
