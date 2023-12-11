import React, { useState } from 'react'

function SearchBar() {
    const [query,setQuery]=useState('')
  return (
    <div>
        <input type='text' placeholder='Search Hacker news....' onChange={()=>setQuery(e.target.value)}/>
        <button>Search</button>
    </div>
  )
}

export default SearchBar