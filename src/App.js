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

import MainPage from './screen/mainPage';
import NewsPage from './screen/newsPage';
import ArticlePage from './screen/articlePage';
import MenuDraf from './Componen/menuDraf/menuDraf';
import Header from './Componen/header/header';
import Footer from './Componen/footer/footer';

function App() {
  return (
    <Provider store={Store}>
      <ChakraProvider>
        <div className='all'>

          <MenuDraf />
          <Header />

          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<MainPage />} /> */}
              {/* <Route path="/" element={<NewsPage />} /> */}
              <Route path="/" element={<ArticlePage />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
