import React from "react";
import { Table } from "reactstrap";

export default function TableEntrada({kit}) {
  return (
      <div className="table-principal">
      <table className="table table-striped">
         <thead>
            <tr>
               <th>Nome</th>
               {/* <th>{kit.quantidade}</th> */}
               <th>Descrição</th>
               <th>Valor</th>
            </tr>
         </thead>
         <tbody>
            {
               kit.map(item => {
                  return(
                     <tr>
                        <td>{item.nome}</td>
                        <td>{item.descricao}</td>
                        <td>R$ {item.valor}</td>
                     </tr>
                  )
               })
            }
         </tbody>
      </table>
      </div>
  );
}