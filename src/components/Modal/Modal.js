import { createPortal } from 'react-dom';
import { Overlay, ImageModal } from './Modal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImage, alt, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  const handleKeydown = evt => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ImageModal>
        <img src={largeImage} alt={alt} />
      </ImageModal>
    </Overlay>,
    modalRoot
  );
};
