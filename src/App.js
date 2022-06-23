import MainPage from './screen/mainPage';
import NewsPage from './screen/newsPage';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'

import MenuDraf from './Componen/menuDraf/menuDraf';
import Header from './Componen/header/header';

function App() {
  return (
    <Provider store={Store}>
      <ChakraProvider>
        <div className='all'>

          <MenuDraf />
          <Header />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />

            </Routes>
          </BrowserRouter>
        </div>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
