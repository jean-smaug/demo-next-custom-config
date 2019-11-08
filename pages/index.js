import React, { useState, useEffect } from 'react'
import fetch from "isomorphic-unfetch"
import useSWR from 'swr'

let called = false

const Home = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    if(called) return

    async function getUsers() {
      const users = await (await fetch('http://jsonplaceholder.typicode.com/users')).json()

      setUsers(users)
    }

    getUsers()

    called = true
  })
  
  return (
    <div>
      {
        users.map(user => (
          <div key={user.id}>
            {user.name}
          </div>
        ))
      }
    </div>
  )
}

export default Home
