import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { themes } from './themes/themes'

const rootElement = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={themes}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
