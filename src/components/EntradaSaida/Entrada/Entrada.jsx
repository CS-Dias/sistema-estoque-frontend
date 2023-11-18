import React, { Fragment } from "react";
import {Button} from 'reactstrap'
import TableEntrada from "./TableEntrada";

export default function Entrada() {
   return (
      <div className="entrada-container">
         <div className="page-title">
            <h5>Entrada</h5>
            <div className="right-side d-flex align-items-center gap-2">
               <Button color="dark">Ver Mais</Button>
               <Button color="dark" className="d-flex">
                  <span class="material-symbols-rounded">add</span>
                  <span>Novo Produto</span>
               </Button>
            </div>
         </div>

         <TableEntrada/>
      </div>
   );
}
