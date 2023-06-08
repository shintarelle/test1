import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys,
);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  control: {
    borderRadius: '3px',
    borderWidth: "3px",
    borderStyle: "solid",
    borderColor: "grey.1",
    background: "red",
    width: '0%',
    color: 'green',

    // _checked: {
    //   background: "green",
    //   borderColor: "blue.1",

    //   _hover: {
    //     // bg: "blue.1",
    //     borderColor: "blue.1"
    //   }
    // },
    _hover: {
      borderRadius: '9px ',
      borderWidth: "9px",
    }
  }
})

// const headerTwo = definePartsStyle({
//   field: {
//     fontFamily: `'Rubik', 'Arial', sans-serif`,
//     fontStyle: 'normal',
//     fontWeight: '500',
//     fontSize: '1.5rem',
//     lineHeight: '1.75rem',
//     color: 'black',
//     _placeholder: {
//       fontFamily: `'Rubik', 'Arial', sans-serif`,
//       opacity: '0.6',
//     },
//   },
// });
// const feedbackInput = definePartsStyle({
//   field: {
//     fontFamily: `'Rubik', 'Arial', sans-serif`,
//     fontStyle: 'normal',
//     fontWeight: '400',
//     fontSize: '1.5rem',
//     lineHeight: '1.75rem',
//     color: 'black',
//     p: '0',
//     h: '52px',
//     borderRadius: '0',
//     borderBottom:'1px solid rgba(207, 210, 214, 0.2)',
//     _placeholder: {
//       fontFamily: 'text',
//       fontWeight: 'light',
//       fontSize: 'xs',
//       lineHeight: '1',
//     },
//   },
// });

const pill = definePartsStyle({
  field: {
    border: '1px solid',
    borderColor: 'gray.200',
    background: 'gray.50',
    borderRadius: '2px',


    // Let's also provide dark mode alternatives
    _dark: {
      borderColor: 'gray.600',
      background: 'gray.800',
    },
  },
  addon: {
    border: '1px solid',
    borderColor: 'gray.200',
    background: 'gray.200',
    borderRadius: '2px 0 0 2px',
    color: 'gray.500',

    _dark: {
      borderColor: 'gray.600',
      background: 'gray.600',
      color: 'gray.400',
    },
  },
})

// const radioTheme = defineMultiStyleConfig({ baseStyle })
// export default radioTheme;
const inputTheme = defineMultiStyleConfig({baseStyle,
  variants: { pill },
});
export default inputTheme;
