import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { postDetailSelector } from '../../redux/reducers/postDetailsReducer'
import PostDetails from '../../components/PostDetails/PostDetails';
import { useParams } from 'react-router-dom';
import { fetchPostDetails } from '../../redux/reducers/postDetailsReducer';

function PostDetailsPage() {
    const {result,loading,error}=useSelector(postDetailSelector);
    const dispatch=useDispatch();
    const {objId}=useParams();

    useEffect(()=>{
       dispatch(fetchPostDetails(objId));
    },[objId])

   
  return (
    <div>
        {loading && <p>Loading....</p>} 
        {error && <p>Error...</p>}
        <PostDetails  post={result}/>
    </div>
  )
}

export default PostDetailsPage