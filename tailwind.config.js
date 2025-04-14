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
            50:  '#f4fdf2',
            100: '#e6fbe5',
            200: '#c8f4b4',
            300: '#a6ef96',
            400: '#7ee573',
            500: '#4ac85a',
            600: '#2c9d35',
            700: '#2d8231',
            800: '#2f5132',
            900: '#2c4224',
            950: '#191f0b',
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

