const Button = {
  baseStyle: {
    height: '34px',
    width: '100px',
    borderRadius: '80px',
    fontFamily: 'body',
    fontSize: '1rem',
    fontWeight: 'normal',
    lineHeight: '1',
  },
  variants: {
    normal: {
      backgroundColor: 'yellow.1',
      _hover: {
        backgroundColor: 'yellow.2',
      },
      _active: {
        backgroundColor: 'yellow.2',
      },
      // _disabled: {
      //   backgroundColor: 'grey.2', //!!!
      // },
    },
    disabled: {
      backgroundColor: 'grey.2',
    }
  },
};

export default Button;
