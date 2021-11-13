import React from 'react';

function EmptySearchResults( props ) {
  return <p>Not found results for "{props.searchText}"</p>;
}

export { EmptySearchResults };