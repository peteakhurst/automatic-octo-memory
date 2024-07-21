import React from 'react';
import { MdSearch } from 'react-icons/md';

const SearchBar = ({ handleSearchNote }) => {
  return (
    <div className='search-container'>
      <MdSearch className='search-icon' size='1.3em' />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type='text'
        placeholder='Type to search...'
        className='search-input'
      />
    </div>
  );
};

export default SearchBar;
