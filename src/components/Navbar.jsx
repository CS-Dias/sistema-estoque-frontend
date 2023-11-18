import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {
  return (
    <navbar className='navbar-container'>
      <div className='navbar-logo'>
        <h5>CS Dias</h5>
      </div>
      <div className="navbar-links">
        <Link to={"/"}>Estoque</Link>
        <Link to={"/"}>Pedido</Link>
        <Link to={"/"}>Cliente</Link>
        <Link to={"/"}>Fornecedor</Link>
      </div>
    </navbar>
  )
}
