import { Box, Text, Heading, Button } from "@chakra-ui/react";

export default function Main() {

  return (
  <Box backgroundColor="grey.1">
    <Box
      backgroundImage="url('./main-image.png')"
      backgroundRepeat='no-repeat'
      backgroundPosition='50% 50%'
      backgroundSize='100% 100%'
      maxW={'1170px'}
      m='0 auto'
    >
      <Box maxW={"432px"} h={['500px', '500px', '500px', '650px']} m="0 auto" display={"flex"} flexDirection={'column'} justifyContent="center" alignItems={"center"} gap='21px'>
        <Heading
            color='white'
            textAlign="center"
            p={['0 16px', '0 16px', '0 26px']}
            fontSize='2.5rem'
            lineHeight={'2.5rem'}
            fontWeight={'400'}
          >Test assignment for front-end developer</Heading>
        <Text
          fontFamily= 'text'
          fontWeight= 'normal'
          color='white'
          maxW={"432px"}
          textAlign="center"
          p={['0 16px', '0 16px', '0 26px']}
        >
        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
        </Text>
        <Button size={'2.125rem'} variant={'normal'} mt='15px'>
          Sign up
        </Button>
      </Box>
    </Box>
  </Box>
  );
};
