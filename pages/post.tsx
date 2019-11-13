import React from 'react'

import { Link } from "../i18n"
import { withData } from '../contexts/Data'
import Card from "../components/Card"

import "../assets/styles/layout.scss"
import { Posts, Comments } from '../types'

const Post = ({ posts, comments, postId }: { posts: Posts, comments: Comments, postId: string }) => {
    const post = posts.find(post => post.id === Number(postId))
    
    return (
        <>
            {post && <h1>{post.title}</h1>}
            <ul>
                {
                    comments.map(comment => (
                        <ul key={comment.id}>{comment.body}</ul>
                    ))
                }
            </ul>
        </>
    )
}

Post.getInitialProps = ({ query: { postId } }: { query: { postId: string }}) => {
    return { namespacesRequired: [], postId }
}

export default withData(Post, {
    keyName: "comments",
    path: "/comments?postId=%(postId)s"
})
