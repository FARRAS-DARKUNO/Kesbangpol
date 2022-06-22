import MainPage from './screen/mainPage';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>

  );
}

export default App;
