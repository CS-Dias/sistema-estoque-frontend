import React from 'react'
import { Button } from 'reactstrap'
import './Main.css'
import TableEstoque from './TableEstoque'
import AsideNvbar from '../AsideNavbar'

export default function Main() {

  return (
      <div className='container-main'>

         <AsideNvbar/>

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
