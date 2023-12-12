import SearchBar from '../../components/Searchbar/SearchBar';
import { fetchSearchResult } from '../../redux/reducers/searchResultReducer';
import SearchResultList from '../../components/SearchResultList/SearchResultList';
import { useDispatch ,useSelector} from 'react-redux';
import { searchResultSelector } from '../../redux/reducers/searchResultReducer';



function Home() {
    const dispatch=useDispatch();
    const {result,loading,error}=useSelector(searchResultSelector);
    
   const handleSearch=async(query)=>{
        dispatch(fetchSearchResult(query))
   }
     
  
   
  return (
    <div style={{width:"90%"}}>
        <SearchBar  onSearch={handleSearch}/>
        {error && <p>{error}</p>}
        {loading ? <span className='loader'></span>:
          <SearchResultList  result={result}/>
          
  }
    </div>
  )
}

export default Home