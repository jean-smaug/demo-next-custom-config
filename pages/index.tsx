import React from 'react'
import { NextPage } from 'next'

import { Link, useTranslation } from '../i18n'
import { withData } from '../contexts/Data'
import { Users } from '../types'

const Home: NextPage<{ namespacesRequired: string[], users?: Users }> = (props) => {
  const { t } = useTranslation("common")

  if(!props.users || props.users.length === 0) {
    return <p>'Loading...'</p>
  }

  return (
    <div>
      <h1>{t('title')}</h1>
      <ul>
        {
          props.users.map(user => (
            <Link
              href={{ pathname: "/profile", query: { userId: user.id } }}
              as={`/profile/${user.id}`} key={user.id}
            >
              <li>{user.name}</li>
            </Link>
          ))
        }
      </ul>
    </div>
  )
}

Home.getInitialProps = async () => {
  return { namespacesRequired: ["common"] }
}

export default withData(Home, { keyName: "users", path: "/users" })
