import React, { useEffect, useState } from "react";
import API from "../../services/API";
// import { Table } from "reactstrap";
// import API from "../../services/API";

export default function TableEstoque() {

   const [peca, setPeca] = useState([])

   useEffect(() => {
      API.get("peca").then(res => {
         setPeca(res.dados)
      })
   }, []);


  return (
      <div className="table-principal">
      <table className="table table-striped">
         <thead>
            <tr>
               <th>Nome</th>
               <th>Qntd. Minima</th>
               <th>Quantidade</th>
               <th>Valor Unit.</th>
               <th>Valor Total</th>
               <th>Opções</th>
            </tr>
         </thead>
         <tbody>
            {peca.map(item => {
               return(
                  <tr>
                     <td>{item.nome}</td>
                     <td>{item.quantidadeMin}</td>
                     <td>{item.quantidade}</td>
                     <td>{item.valor}</td>
                     <td>{item.valor}</td>
                  </tr>
               )
            })}
         </tbody>
      </table>
      </div>
  );
}
