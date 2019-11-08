import React from 'react'

const UserPosts = (props) => {
    return (
        <ul>
            {
                props.posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))
            }
        </ul>
    )
}

UserPosts.getInitialProps = async (ctx) => {
    const posts = await (await fetch(`http://jsonplaceholder.typicode.com/posts?userId=${ctx.query.userId}`)).json()

    return { posts }
}

export default UserPosts
