import React from 'react'
import style from "./SearchResultList.module.css"
import { Link } from 'react-router-dom'

function SearchResultList({result}) {
  return (
    <div className={style.SearchResultList_container}>
    {
        result.map((item)=>{
         return<Link to={`/post/${item.objectID}`}> <div key={item.objectID} className={style.SearchResultList_Item} >
              <h3>{item.title}</h3>
          <p>Author: {item.author}</p>
          <p>Points: {item.points}</p>
          <p>Comments: {item.num_comments}</p>
         </div>
         </Link>
        })
    }

    </div>
  )
}

export default SearchResultList