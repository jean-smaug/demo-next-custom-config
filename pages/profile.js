import React from 'react'

import Card from "../components/Card"

import "../assets/styles/layout.scss"

const UserPosts = (props) => {
    return (
        <div>
            <ul className='FlexGrid'>
                {
                    props.posts.map(post => (
                        <li key={post.id} className='FlexGridItem'>
                            <Card {...post} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

UserPosts.getInitialProps = async (ctx) => {
    const posts = await (await fetch(`http://jsonplaceholder.typicode.com/posts?userId=${ctx.query.userId}`)).json()

    return { posts }
}

export default UserPosts
