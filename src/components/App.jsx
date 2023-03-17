import { theme } from './Layout';
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Layout } from "./Layout"
import { Searchbar } from './Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import { getImages } from 'services/getItems';
import { Message } from './ImageGallery/ImageGallery.styled';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export const App = () => {
  const [query, setQuery] = useState(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function onRenderGallery(query, page) {
      setShowLoader(true);
      getImages(query, page).then(({ hits, total, totalHits }) => {
      setShowLoader(false);

      if (hits.length) {
        setShowButton(true);
        setImages(prevItems => [...prevItems, ...hits]);
      }

      if (page*12 >= totalHits) {
        setShowButton(false)
      }

      if (total === 0) {
        setError(`No images or photos of ${query}`)
      }
    }).catch(error => setError(error))
    }
    

    if (query) {
      onRenderGallery(query, page)
    }
  }, [query, page])

  const handleFormSubmit = newQuery => {
    if (newQuery !== query) {
      return;
    }
    setImages([]);
    setQuery(newQuery);
    setPage(1);
  }

  const loadMoreBtnHandler = () => {
    setPage(page + 1)
  }


    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle />
          <Searchbar onSubmit={handleFormSubmit} />
          {!query && (
            <Message>Enter a word or phrase to search images and photos</Message>
          )}

          {error && <Message>{error}</Message>}
          
          {showLoader&& <Loader/>}

          <ImageGallery images={images} />
          {showButton && <Button onClick={loadMoreBtnHandler}/>}
        </Layout>
        <ToastContainer autoClose={1500} hideProgressBar={true}/>
      </ThemeProvider>
    )

};