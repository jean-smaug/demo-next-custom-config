import React from 'react'

import { Link } from "../i18n"
import { withData } from '../contexts/Data'
import Card from "../components/Card"

import "../assets/styles/layout.scss"

const Post = (props) => {
    const post = props.posts.find(post => post.id === Number(props.postId))
    
    return (
        <>
            {post && <h1>{post.title}</h1>}
            <ul>
                {
                    props.comments.map(comment => (
                        <ul key={comment.id}>{comment.body}</ul>
                    ))
                }
            </ul>
        </>
    )
}

Post.getInitialProps = ({ query: { postId } }) => {
    return { namespacesRequired: [], postId }
}

export default withData(Post, {
    keyName: "comments",
    path: "/comments?postId=%(postId)s"
})
