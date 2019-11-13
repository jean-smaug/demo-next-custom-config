import React, { useState } from "react"
import { sprintf } from "sprintf-js"
import fetch from "isomorphic-unfetch"

const Data = React.createContext()

export function withData(Component, options) {
    if(!options.path || !options.keyName) {
        throw new Error("Must provide keyName and path")
    }

    function Hoc(props) {
        return (
            <Data.Consumer>
                {({ setters, values }) => {
                    const setterName = `set${options.keyName.charAt(0).toUpperCase()}${options.keyName.slice(1)}`

                    setters[setterName](props[options.keyName])

                    return <Component {...values} {...props.originalProps} />
                }}
            </Data.Consumer>
        )

    }

    Hoc.getInitialProps = async (ctx) => {
        const props =
        (Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
            
        const response = await (await fetch(`http://jsonplaceholder.typicode.com${sprintf(options.path, ctx.query)}`)).json()

        if (props.statusCode && ctx.res) {
            ctx.res.statusCode = props.statusCode
        }

        return { namespacesRequired: props.namespacesRequired, originalProps: props, [options.keyName]: response }
    }

    return Hoc
}

export function DataProvider({ config, children }) {
    // const states = props.config.map(({ name, type }) => {
    //     let defaultValue
    //     switch (type) {
    //         case "array":
    //             defaultValue = []
    //             break;
    //         case "string":
    //             defaultValue = ""
    //             break;
    //         default:
    //             defaultValue = null
    //             break;
    //     }

    //     const [value, setter] = useState(defaultValue)

    //     return { name, type, value, setter }
    // })

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])

    return (
        <Data.Provider
            value={{
                values: {
                    users,
                    posts,
                    comments,
                },
                setters: {
                    setUsers,
                    setPosts,
                    setComments,
                },
            }}
        >
            {children}
        </Data.Provider>
    )
}
