import React, { useState } from 'react';
import SearchBar from '../../components/Searchbar/SearchBar';
import { fetchSearchResult } from '../../redux/reducers/searchResultReducer';
import SearchResultList from '../../components/SearchResultList/SearchResultList';
import { useDispatch ,useSelector} from 'react-redux';
import { searchResultSelector } from '../../redux/reducers/searchResultReducer';


function Home() {
    const dispatch=useDispatch();
    const {result,loading,error}=useSelector(searchResultSelector)
   
   
   const handleSearch=async(query)=>{
        dispatch(fetchSearchResult(query))
   }


  return (
    <div>
        <SearchBar  onSearch={handleSearch}/>
        {loading && <p>loading.....</p>}
        {error && <p>errorrrr...</p>}
        <SearchResultList  result={result}/>
    </div>
  )
}

export default Home