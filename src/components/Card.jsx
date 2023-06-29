import { Box, Text, Image } from "@chakra-ui/react";

export default function Card({ user }) {

  return (
    <Box backgroundColor="white"
      w={[ '370px']}
      height='254px'
      borderRadius={'10px'}
      p='20px'>

      <Box display={"flex"} flexDirection={'column'} justifyContent="center" alignItems={"center"} gap='20px'>
        <Box w={['70px']} h={['70px']} borderRadius={'50%'}>
          <Image w={['70px']} h={['70px']}
            src={user.photo}
            borderRadius={'50%'}
            alt='Logo'/>
        </Box>
        <Text
          fontFamily= 'text'
          fontWeight= 'normal'
          color='black'
          textAlign="center"
          noOfLines={1}
        >
          {user.name}
        </Text>
        <Box fontFamily= 'text'
          fontWeight= 'normal'
          color='black'
          textAlign="center"
          lineHeight={'26px'}
          w={[ '370px']}
          >
          <Text noOfLines={1}>
            {user.position}
          </Text>
          <Text noOfLines={1}>
            {user.email}
          </Text>
          <Text noOfLines={1}>
            {user.phone}
          </Text>
        </Box>
      </Box>
    </Box>

  );
};
