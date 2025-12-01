module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#0a0a0a', // Very dark grey/black
        cybergreen: '#ffffff', // White accent
        neonblue: '#a3a3a3', // Light grey accent
        offwhite: '#ededed', // Off-white text
        crt: '#525252' // Dark grey accent
      },
      fontFamily: {
        mono: ['Share Tech Mono', 'JetBrains Mono', 'ui-monospace', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
