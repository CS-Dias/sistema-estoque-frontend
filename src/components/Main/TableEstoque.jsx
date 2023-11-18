import React from "react";
// import { Table } from "reactstrap";
// import API from "../../services/API";

export default function TableEstoque() {

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
            <tr>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
            <td>San Francisco</td>
            </tr>
            <tr>
            <td>Jane Doe</td>
            <td>janedoe@example.com</td>
            <td>New York</td>
            </tr>
            <tr>
               <td>Peter Jones</td>
               <td>peterjones@example.com</td>
               <td>Chicago</td>
            </tr>
         </tbody>
      </table>
      </div>
  );
}
