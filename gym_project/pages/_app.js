import '@/styles/globals.css'
import Navbar from "../components/Navbar";
import { ChakraProvider , CSSReset, Global } from '@chakra-ui/react';
export default function App({ Component, pageProps }) {
  return (
    <>
    
      <Navbar></Navbar>
      <Component {...pageProps} />
    
    
    </>
  )
}
