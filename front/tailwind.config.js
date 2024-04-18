/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': {
        '50': '#fffbeb',
        '100': '#fef3c7',
        '200': '#fde58a',
        '300': '#fbd24e',
        '400': '#fabe25',
        '500': '#f49d0c',
        '600': '#d87607',
        '700': '#bc560a',
        '800': '#923f0e',
        '900': '#78340f',
        '950': '#451a03',
    },
      'secondary': {
        '50': '#f3f1ff',
        '100': '#ebe5ff',
        '200': '#d9ceff',
        '300': '#bea6ff',
        '400': '#9f75ff',
        '500': '#843dff',
        '600': '#7916ff',
        '700': '#6b04fd',
        '800': '#5a03d5',
        '900': '#4b05ad',
        '950': '#2c0076',
    },
      'success': {
        '50': '#eefff4',
        '100': '#d6ffe7',
        '200': '#b1ffd2',
        '300': '#74ffaf',
        '400': '#54f99a',
        '500': '#06e164',
        '600': '#00bc4f',
        '700': '#029341',
        '800': '#087337',
        '900': '#095e30',
        '950': '#003518',
      },
      'warning': {
        '50': '#fef2f2',
        '100': '#fee2e2',
        '200': '#fecaca',
        '300': '#fca5a5',
        '400': '#f87171',
        '500': '#ef4444',
        '600': '#dc2626',
        '700': '#b91c1c',
        '800': '#991b1b',
        '900': '#7f1d1d',
        '950': '#450a0a',
      },
      'grey': {
        '50': '#f5f7f8',
        '100': '#eeeff1',
        '200': '#dfe2e6',
        '300': '#cbd1d6',
        '400': '#b5bbc4',
        '500': '#9ca3af',
        '600': '#8b90a0',
        '700': '#787d8a',
        '800': '#626671',
        '900': '#52555d',
        '950': '#303236',
      },

    }
  },
  plugins: [
    'postcss-import',
    'tailwindcss/nesting',
  ],
}