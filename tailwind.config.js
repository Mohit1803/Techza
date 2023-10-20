/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        cabin: ['Cabin', 'sans'],
        Inter: ['Inter', 'sans'],
      },
    }
  },
  plugins: []
};