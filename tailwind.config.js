const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'selector',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          '50': '#f6fbea',
          '100': '#e9f7d0',
          '200': '#d4efa7',
          '300': '#b7e274',
          '400': '#95d03f',
          '500': '#7cb82a',
          '600': '#5f921e',
          '700': '#49701b',
          '800': '#3c591b',
          '900': '#344c1b',
          '950': '#19290a',
        }
      }
    }
  }
};

module.exports = config;