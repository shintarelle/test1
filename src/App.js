
import * as React from 'react'
import { useState } from 'react'
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';
import { Button, Box, Heading, Text } from '@chakra-ui/react'
import Header from './components/Header';
import Main from './components/Main';
import Users from './components/Users';
import UserForm from './components/UserForm';
import UserSuccesReg from './components/UserSuccesReg';




export default function App() {
  const [update, setUpdate] = useState(false);
  const fn = function () {
    setUpdate(true);
    console.log('lalallala')
  }
  const fm = function () {
    setUpdate(false);
    console.log('tattaa')
  }

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Main />
      <Users update={update} fm={fm} />
      <UserForm fn={fn} />
      {/* <UserSuccesReg /> */}

    </ChakraProvider>
  )
}
