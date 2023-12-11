import React from 'react'

function PostDetails({ post }) {

    return (
        <div >
            <div>
                <h1>{post.title}</h1>
                <p1>{post.points}</p1>
            </div>
            <div>
                <h2>All Comments</h2>
                {
                    post.children.map((comments) => {
                        return <div>
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