import React from 'react';
import "./SearchBox.css";

interface SearchBoxProps{
  onInputChange:(inputValue:string) => void;
}
const SearchBox = ({onInputChange}:SearchBoxProps) => {
  return (
    <input type="search" className='search-box' placeholder='Search pokemon'
      onChange={(e) => onInputChange(e.target.value)}/>
  )
}

export default SearchBox