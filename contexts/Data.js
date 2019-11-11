import React, { useState } from "react"

const Data = React.createContext()

export function withData(Component) {
    return class extends React.Component {
        static async getInitialProps (ctx) {
            const props =
            (Component.getInitialProps
              ? await Component.getInitialProps(ctx)
              : {})
      
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

    return (
        <Data.Provider 
            value={{
                users,
                posts,
                comments,
                setUsers,
                setPosts,
                setComments,
            }}
        >
            {props.children}
        </Data.Provider>
    )
}
