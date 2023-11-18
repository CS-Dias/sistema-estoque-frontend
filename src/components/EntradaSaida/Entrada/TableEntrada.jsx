import React from "react";
import { Table } from "reactstrap";

export default function TableEntrada() {
  return (
      <div className="table-principal">
      <table className="table table-striped">
         <thead>
            <tr>
               <th>Nome</th>
               <th>Quantidade</th>
               <th>Data</th>
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