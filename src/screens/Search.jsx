import React, { useState } from 'react';
import { func } from 'prop-types';

export default function Search(props) {
  const { search } = props;
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
}

Search.propTypes = {
  search: func,
};

Search.defaultProps = {
  search: null,
};
