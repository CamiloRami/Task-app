import React from 'react';
import './TodoSearch.css';

function TodoSearch( { searchValue, setSearchValue, loading } ) {
  const onShearchValueChange = (event) => {
    // console.log(event.target.value)
    setSearchValue(event.target.value) 
  };

  return (
    <input 
      className="TodoSearch"
      placeholder="Search . . ."
      value={searchValue}
      onChange={onShearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };