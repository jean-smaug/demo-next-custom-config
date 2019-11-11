import React, { useState } from "react"

const Data = React.createContext()

export function withData(Component) {
    return class extends React.Component {
        static async getInitialProps (ctx) {
            const props =
            (Component.getInitialProps
              ? await Component.getInitialProps(ctx)
              : null) || {}
      
            if (props.statusCode && ctx.res) {
              ctx.res.statusCode = props.statusCode
            }
      
            return props
        }

       render() {
            return (
            <Data.Consumer>
                {(value) => <Component {...{...value, ...this.props}} />}
            </Data.Consumer>
            )
        }
    }
}

export function DataProvider(props) {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])

    async function fetchUsers() {
        const users = await (await fetch('http://jsonplaceholder.typicode.com/users')).json()

        return setUsers(users)
    }

    async function fetchPosts(userId) {
        const posts = await (await fetch(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)).json()

        setPosts(posts)
    }

    async function fetchComments(postId) {
        const comments = await (await fetch(`http://jsonplaceholder.typicode.com/comments?postId=${userId}`)).json()

        setComments(comments)
    }

    return (
        <Data.Provider 
            value={{
                users,
                posts,
                comments,
                setUsers,
                setPosts,
                setComments,
                fetchUsers,
                fetchPosts,
                fetchComments,
            }}
        >
            {props.children}
        </Data.Provider>
    )
}
