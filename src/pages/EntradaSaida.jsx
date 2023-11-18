import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Entrada from '../components/EntradaSaida/Entrada/Entrada'
import Saida from '../components/EntradaSaida/Saida/Saida'

export default function EntradaSaida() {
  return (
   <Fragment>
      <Navbar/>
      <div className='container-main'>

         <aside className='side-navbar'>
            <Link to={"/"} className='sidebar-link'>Estoque</Link>
            <Link to={"/entradasaida"} className='sidebar-link'>Entrada/Saida</Link>
            <Link to={"/kit"} className='sidebar-link'>Kit</Link>
            <Link to={"/pecas"} className='sidebar-link'>Peças</Link>
            <Link to={"/cadeira"} className='sidebar-link'>Cadeira</Link>
         </aside>

         <div>
            <Entrada/>
            <Saida/>
         </div>
      </div>
   </Fragment>
  )
}
