module.exports = {
  content: ['./src/**/*.{html,js,vue,ts}'],
   theme: {
    extend: {
      colors: {
        'base-color': '#ffffff',
        'content-base-color': '#000000'
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      fontSize: {
        base: '15px',
      },
      letterSpacing: {
        base: '0.08em',
      },
      transitionDuration: {
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      width: {
        'l-site-width': 'min(100% - 20px, 1020px)'
      }
    },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }