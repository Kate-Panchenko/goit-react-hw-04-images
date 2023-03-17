import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const GalleryItem = ({ webImage, largeImage, searchValue }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !!prevState.showModal);
  };

  return (
    <>
      <Image src={webImage} alt={searchValue} onClick={toggleModal} />
      {showModal && (
        <Modal
          largeImage={largeImage}
          onClose={toggleModal}
          alt={searchValue}
        />
      )}
    </>
  );
};

GalleryItem.propTypes = {
  webImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
};
