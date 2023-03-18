import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const GalleryItem = ({ webImage, largeImage, alt }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Image src={webImage} alt={alt} onClick={toggleModal} />
      {showModal && (
        <Modal largeImage={largeImage} onClose={toggleModal} alt={alt} />
      )}
    </>
  );
};

GalleryItem.propTypes = {
  webImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
