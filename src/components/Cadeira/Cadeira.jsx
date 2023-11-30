import React from 'react'
import { Button } from 'reactstrap'
import TableCadeira from './TableCadeira'
import { Link } from 'react-router-dom'

export default function Cadeira() {
   return (

      <div className="entrada-container">
         <div className="page-title">
            <h5>Produtos</h5>
            <div className="right-side d-flex align-items-center gap-2">
               {/* <Button color='dark'>Ver Mais</Button> */}
               <Link to={"adicionar"} className='text-decoration-none'>
                  <Button color='dark' className='d-flex'>
                     <span class="material-symbols-rounded">add</span>
                     <span>Novo Produto</span>
                  </Button>
               </Link>
            </div>
         </div>

         <TableCadeira />
      </div>
   )
}
