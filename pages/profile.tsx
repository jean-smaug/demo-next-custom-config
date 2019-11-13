import React from 'react'
import { Link } from "../i18n"

import { withData } from '../contexts/Data'
import Card from "../components/Card"

import "../assets/styles/layout.scss"
import { Users, Posts } from '../types'

const UserPosts = ({ users, posts, userId }: { users: Users, posts: Posts, userId: number }) => {
    const user = users.find(user => user.id === userId)
    const userPosts = posts.filter(post => post.userId === userId)

    return (
        <div>
            {user && <h3>{user.name}</h3>}
            <ul className='FlexGrid'>
                {
                    userPosts.map(post => (
                        <Link 
                            href={{
                                pathname: "/post",
                                query: { postId: post.id }
                            }}
                            as={`/posts/${post.id}`}
                            key={post.id}
                        >
                            <li className='FlexGridItem'>
                                <Card {...post} />
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

UserPosts.getInitialProps = ({ query: { userId } }: { query: { userId: string } }) => {
    return { namespacesRequired: [], userId: Number(userId) }
}

export default withData(UserPosts, {
    keyName: "posts",
    path: "/posts?userId=%(userId)s"
})
