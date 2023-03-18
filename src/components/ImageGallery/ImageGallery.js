import { Gallery, GalleryImage } from './ImageGallery.styled';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, alt }) => {
  return (
    <Gallery>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <GalleryImage key={id}>
            <GalleryItem
              webImage={webformatURL}
              largeImage={largeImageURL}
              id={id}
              alt={alt}
            />
          </GalleryImage>
        );
      })}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  alt: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
