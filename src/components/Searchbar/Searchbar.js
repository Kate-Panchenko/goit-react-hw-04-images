import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchButton,
  Header,
  Form,
  SearchInput,
  Label,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleNameChange = event => {
    setSearchInput(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchInput.trim() === '') {
      return toast.error('Enter a word or phrase in the search field');
    }
    onSubmit(searchInput);
    setSearchInput('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={searchInput}
          onChange={handleNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <SearchButton type="submit">
          <Label>
            Search
            <BsSearch style={{ width: 20, height: 20 }} />
          </Label>
        </SearchButton>
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
