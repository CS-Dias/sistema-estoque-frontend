import React from 'react'
import { Link } from 'react-router-dom'

import './AsideNavbar.css'

export default function AsideNvbar() {
   return (
      <aside className='side-navbar'>
         <Link to={"/"} className='sidebar-link'>Estoque</Link>
         <Link to={"/entradasaida"} className='sidebar-link'>Entrada/Saida</Link>
         <Link to={"/kit"} className='sidebar-link'>Kit</Link>
         <Link to={"/pecas"} className='sidebar-link'>Peças</Link>
         <Link to={"/cadeira"} className='sidebar-link'>Cadeira</Link>
      </aside>
   )
}
