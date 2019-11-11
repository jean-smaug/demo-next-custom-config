import React from 'react'
import Link from "next/link"

import { withData } from '../contexts/Data'
import Card from "../components/Card"

import "../assets/styles/layout.scss"

const UserPosts = (props) => {
    const user = props.users.find(user => user.id === Number(props.userId))

    return (
        <div>
            {user && <h3>{user.name}</h3>}
            <ul className='FlexGrid'>
                {
                    props.posts.map(post => (
                        <li key={post.id} className='FlexGridItem'>
                            <Link href={`/posts?postId=${post.id}`} as={`/posts/${post.id}`}>
                                <a>
                                    <Card {...post} />
                                </a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

UserPosts.getInitialProps = (ctx) => {
    return { userId: ctx.query.userId }
}

export default withData(UserPosts, {
    keyName: "posts",
    url: "http://jsonplaceholder.typicode.com/posts?userId=%(userId)s"
})
