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
import ListNewsPage from './screen/listNewsPage';
import ListArticlePage from './screen/listArticlePage';
import ArticlePage from './screen/articlePage';
import StatisPage from './screen/statisPage';
import FotoPage from './screen/fotoPage';
import VideoPage from './screen/videoPage';
import ContainFotoPage from './screen/containFotoPage';
import ContainVideoPage from './screen/contaiVideoPage';
import DocumentPage from './screen/documentPage';
import ShowDocumentPage from './screen/showCDocumentPage';

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
              {/* <Route path="/" element={<ArticlePage />} /> */}
              {/* <Route path="/" element={<ListNewsPage />} /> */}
              {/* <Route path="/" element={<ListArticlePage />} /> */}
              {/* <Route path="/" element={<StatisPage />} /> */}
              {/* <Route path="/" element={<FotoPage />} /> */}
              {/* <Route path="/" element={<VideoPage />} /> */}
              {/* <Route path="/" element={<ContainFotoPage />} /> */}
              {/* <Route path="/" element={<ContainVideoPage />} /> */}
              {/* <Route path="/" element={<DocumentPage />} /> */}
              <Route path="/" element={<ShowDocumentPage />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
