import React from 'react'
import style from './PostDetails.module.css'
import { Link } from 'react-router-dom'

function PostDetails({ post }) {
    // console.log('post...', post)
   

    return (
        <div className={style.postDetails_container} >
            <Link to='/' className={style.back_to_home}>Back to home page</Link>
            <h1 className={style.postDetails_heading}>Post</h1>
            <div className={style.post_container}>
                <h1>{post.title}</h1>
                <p><span>Points-</span>{post.points}</p>
            </div>
            <div className={style.post_comments_container}>
                <h2>All Comments</h2>
                {post.children &&
                    post.children.map((comments, i) => {
                        return <div className={style.comments} key={i}>
                            <h4>{comments.author}</h4>
                            <p>{comments.text}</p>
                        </div>
                    })

                }
            </div>
        </div>
    )
}

export default PostDetails