import React, {useEffect, useState} from 'react';
import style from "./SearchBar.module.css"

function SearchBar({onSearch}) {
    const [query,setQuery]=useState('');
  
    const handleInputChange = (e) => {
      const updatedQuery = e.target.value;
      setQuery(updatedQuery);
      onSearch(updatedQuery);
    };
  
  return (
    <div className={style.SearchBar_container} >
        <input type='text' placeholder='Search Hacker news....' onChange={handleInputChange} value={query}/>
       
    </div>
  )
}

export default SearchBar