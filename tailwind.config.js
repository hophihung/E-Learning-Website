/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true, // Căn giữa container
      padding: '1rem', // Padding mặc định nếu cần
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        '2xl': "1920px", // Tuỳ chỉnh max-width cho 2xl
      },
    },
    
    extend: {},
  },
  plugins: [],
};
