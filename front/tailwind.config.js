const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'selector',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          '50': '#f9fee7',
          '100': '#f1fccb',
          '200': '#e2f99d',
          '300': '#ccf264',
          '400': '#b4e635',
          '500': '#96cc16',
          '600': '#74a30d',
          '700': '#638c11',
          '800': '#476212',
          '900': '#3c5314',
          '950': '#1e2e05',
        }
      }
    }
  }
};

module.exports = config;