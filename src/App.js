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
          {/* <Header /> */}
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/news/:id" element={<NewsPage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/news" element={<ListNewsPage />} />
            <Route path="/article" element={<ListArticlePage />} />
            <Route path="/a" element={<StatisPage />} />
            <Route path="/image-gallery" element={<FotoPage />} />
            <Route path="/video-gallery" element={<VideoPage />} />
            <Route path="/a" element={<ContainFotoPage />} />
            <Route path="/a" element={<ContainVideoPage />} />
            <Route path="/dokumen" element={<DocumentPage />} />
            <Route path="/dokumen/:slug" element={<ShowDocumentPage />} />
          </Routes>
          <Footer />
        </div>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
