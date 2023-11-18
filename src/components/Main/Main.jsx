import React from 'react'
import { Button } from 'reactstrap'
import './Main.css'
import TableEstoque from './TableEstoque'
import Entrada from '../EntradaSaida/Entrada/Entrada'
import Saida from '../EntradaSaida/Saida/Saida'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
      <div className='container-main'>

         <aside className='side-navbar'>
            <Link to={"/"} className='sidebar-link'>Estoque</Link>
            <Link to={"/entradasaida"} className='sidebar-link'>Entrada/Saida</Link>
            <Link to={"/kit"} className='sidebar-link'>Kit</Link>
            <Link to={"/pecas"} className='sidebar-link'>Peças</Link>
            <Link to={"/cadeira"} className='sidebar-link'>Cadeira</Link>
         </aside>

         <div>
            <div className="page-title">
               <h2>Estoque</h2>
               <div className='right-side d-flex align-items-center gap-2'>
                  <Button color='dark'>Ver Mais</Button>
                  <Button color='dark' className='d-flex'>
                     <span class="material-symbols-rounded">add</span>
                     <span>Novo Produto</span>
                  </Button>
               </div>
            </div>

            <TableEstoque/>
         </div>
      </div>
  )
}
