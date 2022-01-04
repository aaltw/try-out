
module.exports = {
  mode: 'jit',
  content: [
    // Example content paths...
    './apps/app/**/*.{ts,html}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        smooth: '0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,0.12);',
        'button-sm': '3px 3px 0 0 rgba(0,0,0,0.12), 3px 3px 0 0 rgba(0,0,0,0.12)',
        'button-md': '6px 6px 0 0 rgba(0,0,0,0.12)',
        'button-lg': '12px 12px 0 0 rgba(0,0,0,0.12)'
      },
      colors: {
        'neon-green': ({opacityValue}) => `rgba(73, 251, 53, ${opacityValue})`,
        'dark-blue': '#13274F'
      },
      dropShadow: {
        'neon-green': '0 0 2px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.7))  drop-shadow(0 0 24px rgba(73, 251, 53, 1)) drop-shadow(0 0 36px rgba(73, 251, 53, 1)) drop-shadow(0 0 48px rgba(73, 251, 53, 1)',
        // 'neon-purple': '0 0 2px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.7))  drop-shadow(0 0 24px rgba(176, 38, 255, 1)) drop-shadow(0 0 36px rgba(176, 38, 255, 1)) drop-shadow(0 0 48px rgba(176, 38, 255, 1)',
        'neon-purple-simple': '0 0 2px rgba(255, 255, 255, 0.5)',
      },
      keyframes: {
        flicker: {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            'text-shadow':`
        0 0 4px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px #0fa,
        0 0 80px #0fa,
        0 0 90px #0fa,
        0 0 100px #0fa,
        0 0 150px #0fa;`
          },
          '20%, 24%, 55%': {
            'text-shadow': 'none'
          }
        },
        tilt: {
          '0%, 100%': {
            transform: 'rotate(-.75deg)'
          },
          '50%': {
            transform: 'rotate(.75deg)'
          }
        },
        'pulse-button': {
          '0%, 100%': {
            opacity: '1'
          },
          '80%': {
            opacity: '.85'
          }
        },
        blob: {
          '0%': {
            transform: 'translate(0, 0) scale(1)'
          },
          '33%': {
            transform: 'translate(20px, -30px) scale(1.1)'
          },
          '66%': {
            transform: 'translate(-15px, 25px) scale(0.9)'
          },
          '100%': {
            transform: 'translate(0, 0) scale(1)'
          },
        }

      },
      animation: {
        'flicker': 'flicker 1.5s infinite alternate',
        'button-tilt': 'tilt 6s infinite, pulse-button 2.5s infinite',
        'glow': 'pulse-button 1s infinite',
        'blob': 'blob 6s infinite'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
