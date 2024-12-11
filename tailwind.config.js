/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" 
  ],
  theme: {
      extend: {
        colors: {
          primary: {
            50: '#fef2f5',
            100: '#fde5ed',
            200: '#fccfdc',
            300: '#f9acbd',
            400: '#f4829f',
            500: '#ec5181',
            600: '#d73a6d',
            700: '#b42c56',
            800: '#921e43',
            900: '#751a36',
            950: '#40091d',
          },
        },
        fontFamily: {
          'body': [
        'Poppins', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ],
          'sans': [
        'Poppins', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ]
        }
      },

  },
  plugins: [
    require('flowbite/plugin') ,
    require('tailwind-scrollbar-hide')
    ],

}

