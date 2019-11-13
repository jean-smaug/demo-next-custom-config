import React from "react"
import { Link, useTranslation, i18n, withTranslation } from "../../i18n"

function Navbar(props) {
  const { t } = useTranslation("navigation")

  return (
    <nav className='Navbar'>
        <ul>
            <li>
                <Link href="/index" as="/">
                    <a>{t('home')}</a>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

Navbar.getInitialProps = () => {
  return { namespacesRequired: ["navigation"] }
}

export default withTranslation()(Navbar)
