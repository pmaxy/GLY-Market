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
            50:  '#eafcf8',
            100: '#d4f9f1',
            200: '#a9f3e3',
            300: '#7eedd5',
            400: '#53e7c7',
            500: '#28e1b9',
            600: '#20b494',
            700: '#18876f',
            800: '#105a4a',
            900: '#082d25',
            950: '#041713'
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

