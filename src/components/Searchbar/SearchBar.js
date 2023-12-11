import React, { useState } from 'react';
import style from "./SearchBar.module.css"

function SearchBar() {
    const [query,setQuery]=useState('')
  return (
    <div className={style.SearchBar_container} >
        <input type='text' placeholder='Search Hacker news....' onChange={(e)=>setQuery(e.target.value)}/>
        <button type='submit'>Search</button>
    </div>
  )
}

export default SearchBar