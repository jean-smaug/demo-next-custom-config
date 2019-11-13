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

Home.getInitialProps = () => {
  return { namespacesRequired: ["common"] }
}

export default withData(Home, { keyName: "users", path: "/users" })
