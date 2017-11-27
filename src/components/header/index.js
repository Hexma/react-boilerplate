import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header className="header">
    <h1>HEADER BAR</h1>
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/example/foo">FOO</Link></li>
        <li><Link to="/example/bar">BAR</Link></li>
        <li><Link to="/not-found">NOTFOUND</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
