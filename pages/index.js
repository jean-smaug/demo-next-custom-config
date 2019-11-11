import React from 'react'
import fetch from "isomorphic-unfetch"
import Link from 'next/link'
import { useTranslation } from '../i18n'
import { withData } from '../contexts/Data'

const Home = (props) => {
  const { t } = useTranslation("common")

  if(!props.users || props.users.length === 0) {
    return 'Loading...'
  }

  props.setUsers(props.users)

  return (
    <div>
      <h1>{t('title')}</h1>
      <ul>
        {
          props.users.map(user => (
            <Link href={{ pathname: `/profile/${user.id}` }} key={user.id}>
              <li>{user.name}</li>
            </Link>
          ))
        }
      </ul>
    </div>
  )
}

Home.getInitialProps = async () => {
  console.log("getInitialProps")
  const users = await (await fetch('http://jsonplaceholder.typicode.com/users')).json()
  
  return { users }
}

export default withData(Home)
