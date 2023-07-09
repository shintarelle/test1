'use client'
import { Box, Flex, Center, Container, Image} from '@chakra-ui/react'
import {  Button } from '@chakra-ui/react'

export default function Header() {
  return (
    <Box as='header' bg='white'>
      <Container maxW='1170px' px={0}>
        <Flex justify={[ 'space-between']} flexDirection={['row']} p={['0 8px', '0 16px', '0 32px', '0 60px', '0']}>
          <Center p='17px 0 17px 0' >
            <Image w={['104px']} h={['26px']}
                    src='/logo.png'
                    alt='Logo'
                  />
          </Center>

          <Flex gap={['10px']} justify='flex-end' alignSelf='center' p={['0']}>
            <Button size={'2.125rem'} variant={'normal'}>Users</Button>
            <Button size={'2.125rem'} variant={'normal'}>Sign up</Button>
            </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
