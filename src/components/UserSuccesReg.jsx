import { Box, Heading} from "@chakra-ui/react";

export default function UserSuccesReg() {

  return (
  <Box backgroundColor="grey.1" p='50px'>
    <Heading
        color='black'
        textAlign="center"
        fontSize='2.5rem'
        lineHeight={'2.5rem'}
        fontWeight={'400'}
        p='50px 0'
      >User successfully registered</Heading>
  <Box
      backgroundImage="url('./success-image.svg')"
      backgroundRepeat='no-repeat'
      backgroundPosition='50% 50%'
      width='328px'
      height={'290px'}
      m='0 auto'
    ></Box>
  </Box>
  );
};
