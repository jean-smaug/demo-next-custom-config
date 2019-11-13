import React from 'react'
import { Link } from "../i18n"

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

UserPosts.getInitialProps = ({ query: { userId } }) => {
    return { namespacesRequired: [], userId }
}

export default withData(UserPosts, {
    keyName: "posts",
    path: "/posts?userId=%(userId)s"
})
