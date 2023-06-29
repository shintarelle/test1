
import * as React from 'react'
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';
import Header from './components/Header';
import Main from './components/Main';
import Users from './components/Users';
import UserForm from './components/UserForm';

import UserContext from './context/UserContext';
import useFetchingData from './hooks/hooks';




export default function App() {

  const value = useFetchingData()

  return (
    <UserContext.Provider value={value}>
      <ChakraProvider theme={theme}>
        <Header />
        <Main />
        <Users />
        <UserForm />
      </ChakraProvider>
    </UserContext.Provider>
  )
}
