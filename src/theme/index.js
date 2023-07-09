import { extendTheme } from '@chakra-ui/react';
import components from './components';
import themeFont from './fonts';

import '@fontsource/nunito/400.css'
const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'nunito',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '26px',
        color: 'black',
      },
      'h1, h2, h3': {
        fontFamily: 'nunito',
        fontSize: '40px',
        lineHeight: '40px',
      },
    },
  },
  colors: {
    black: '#212121',
    grey: {
      1: '#F8F8F8', //background
      2: '#b4b4b4', //button
      3: '#d0cfcf', //border input
      4: '#7e7e7e' //placeholder
    },
    yellow: {
      1: '#f4e041', //button
      2: '#ffe302', //button hover
    },
    blue: {
      1: '#00BDD3', //checkbox
      500: '#00BDD3', //checkbox
      600: '#00BDD3', //checkbox
    }
  },
  breakpoints: {
  sm: '22.5em',  //360px
  md: '48em', //768px
  lg: '64em', //1024px
  xl: '73.125em', //1170px
  '2xl': '96em', //1536px
  },
  components,
}, themeFont);

export default theme;
