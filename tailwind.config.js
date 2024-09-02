module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1da1f2', // Custom blue
        secondary: '#14171a', // Custom dark gray
        red: '#ff0000', // Red color for the Ping Ball
        blue: '#1da1f2', // Blue color for the Bouncing Ball
        yellow: '#f1c40f', // Yellow color for the Spinning Ball
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Existing sans font
        openSans: ['Open Sans', 'sans-serif'], // New font family
        // You can add more fonts here if needed
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-20%)' },
          '50%': { transform: 'translateY(0)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        ping: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite',
        spin: 'spin 2s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
