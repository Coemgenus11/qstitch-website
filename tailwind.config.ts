import type { Config } from "tailwindcss"

export default <Config>{
  content: [
    "./app/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#ec8b3f",
          navy: "#255776",
          teal: "#428b97",
        },
      },
    },
  },
  plugins: [],
}
