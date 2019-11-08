import React from 'react'
import fetch from "isomorphic-unfetch"
import Link from 'next/link'
import { useTranslation } from '../i18n'

const Home = (props) => {
  const { t } = useTranslation("common")

  if(!props.users || props.users.length === 0) {
    return 'Loading...'
  }
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <ul>
        {
          props.users.map(user => (
            <Link href={{ pathname: `/users/${user.id}/posts` }} key={user.id}>
              <li>{user.name}</li>
            </Link>
          ))
        }
      </ul>
    </div>
  )
}

Home.getInitialProps = async () => {
  const users = await (await fetch('http://jsonplaceholder.typicode.com/users')).json()

  return { users }
}

export default Home
