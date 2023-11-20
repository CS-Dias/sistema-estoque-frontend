import React, { Fragment, useEffect, useState } from "react";
import {Button} from 'reactstrap'
import TableEntrada from "./TableEntrada";
import API from "../../../services/API";

export default function Entrada() {

   const [kit, setKit] = useState([])

   useEffect(() => {
      API.get("kit").then(res => {
         setKit(res.dados)
      })
   }, []);

   return (
      <div className="entrada-container">
         <div className="page-title">
            <h5>Entrada</h5>
            <div className="right-side d-flex align-items-center gap-2">
               <Button color="dark">Ver Mais</Button>
            </div>
         </div>

         <TableEntrada kit={kit}/>
      </div>
   );
}
