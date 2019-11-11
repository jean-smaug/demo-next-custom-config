import React from 'react'
import Link from 'next/link'

import { useTranslation } from '../i18n'
import { withData } from '../contexts/Data'

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
            <Link href={`/profile?userId=${user.id}`} as={`/profile/${user.id}`} key={user.id}>
              <a>{user.name}</a>
            </Link>
          ))
        }
      </ul>
    </div>
  )
}

export default withData(Home, { keyName: "users", url: "http://jsonplaceholder.typicode.com/users" })
