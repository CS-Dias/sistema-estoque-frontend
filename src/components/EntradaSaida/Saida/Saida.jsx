import React, { Fragment } from "react";
import {Button} from 'reactstrap'
import TableSaida from "./TableSaida";

export default function Saida() {
   return (
      <div className="saida-container">
         <div className="page-title">
            <h5>Saida</h5>
            <div className="right-side d-flex align-items-center gap-2">
               <Button color="dark">Ver Mais</Button>
            </div>
         </div>

         <TableSaida/>
      </div>
   );
}
