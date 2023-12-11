import React, { useEffect, useState } from 'react';
import style from "./SearchBar.module.css"

function SearchBar({onSearch}) {
    const [query,setQuery]=useState('');

  
  return (
    <div className={style.SearchBar_container} >
        <input type='text' placeholder='Search Hacker news....' onChange={(e)=>{
          setQuery(e.target.value)
          onSearch(query)
        }
          }/>
        {/* <button type='submit' onClick={handleClick}>Search</button> */}
    </div>
  )
}

export default SearchBar