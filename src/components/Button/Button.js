import { LoadMoreBtn, ButtonWrapper } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <ButtonWrapper>
      <LoadMoreBtn
        type="button"
        onClick={() => {
          onClick();
        }}
      >
        Load more
      </LoadMoreBtn>
    </ButtonWrapper>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
