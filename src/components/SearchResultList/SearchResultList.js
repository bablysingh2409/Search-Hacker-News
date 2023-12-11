import React from 'react'
import style from "./SearchResultList.module.css"

function SearchResultList({result}) {
  return (
    <div className={style.SearchResultList_container}>
    {
        result.map((item)=>{
         return <div key={item.objectID} className={style.SearchResultList_Item}>
              <h3>{item.title}</h3>
          <p>Author: {item.author}</p>
          <p>Points: {item.points}</p>
          <p>Comments: {item.num_comments}</p>
         </div>
        })
    }

    </div>
  )
}

export default SearchResultList