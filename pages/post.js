import React from 'react'

import { withData } from '../contexts/Data'
import Card from "../components/Card"

import "../assets/styles/layout.scss"

const Post = (props) => {
    return (
        <h1>Hello</h1>
    )
}

Post.getInitialProps = (ctx) => {
    return { postId: ctx.query.postId }
}

export default withData(Post, {
    keyName: "comments",
    path: "/comments?postId=%(postId)s"
})
