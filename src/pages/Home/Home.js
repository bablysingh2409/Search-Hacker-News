import React, { useState } from 'react'
import searchPost from '../../services/api'
import SearchBar from '../../components/Searchbar/SearchBar';
import SearchResultList from '../../components/SearchResultList/SearchResultList';


function Home() {
     const [result,setResult]=useState([]);
   const handleSearch=async(query)=>{
        const ans= await searchPost(query);
        setResult([...ans.hits]);
   }

  return (
    <div>
        <SearchBar  onSearch={handleSearch}/>
        <SearchResultList  result={result}/>
    </div>
  )
}

export default Home