import React from "react"
import Link from "next/link"

function Navbar() {
  return (
    <nav className='Navbar'>
        <ul>
            <li>
                <Link href="/index" as="/">
                    <a>Accueil</a>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
