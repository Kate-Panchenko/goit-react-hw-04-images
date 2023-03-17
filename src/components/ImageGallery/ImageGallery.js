import { Gallery, GalleryImage, GalleryWrapper } from './ImageGallery.styled';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(({ id, webformatURL, largeImageURL, searchValue }) => {
        return (
          <GalleryWrapper>
            <GalleryImage key={id}>
              <GalleryItem
                webImage={webformatURL}
                largeImage={largeImageURL}
                id={id}
                searchValue={searchValue}
              />
            </GalleryImage>
          </GalleryWrapper>
        );
      })}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      searchValue: PropTypes.string.isRequired,
    })
  ),
};
