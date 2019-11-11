import React from "react"
import Link from "next/link"

function Navbar(props) {
  return (
    <nav className='Navbar'>
        <ul>
            <li>
                <Link href="/">Accueil</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
