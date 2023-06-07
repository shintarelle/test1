
import * as React from 'react'
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';
import { Button, Box, Heading, Text } from '@chakra-ui/react'
import Header from './components/Header';
import Main from './components/Main';
import Users from './components/Users';
import Form from './components/Form';




export default function App() {
  const disabled = false;
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Main />
      <Users />
      <Form />
    </ChakraProvider>
  )
}
