import React, { useState, useEffect } from 'react'
import fetch from "isomorphic-unfetch"
import { useTranslation } from '../i18n'

let called = false

const Home = () => {
  const [users, setUsers] = useState([])
  const { t } = useTranslation("common")
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
      <h1>{t('title')}</h1>
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
