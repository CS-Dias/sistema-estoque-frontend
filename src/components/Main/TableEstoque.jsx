import React, { useEffect, useState } from "react";
import API from "../../services/API";
// import { Table } from "reactstrap";
// import API from "../../services/API";

export default function TableEstoque() {

   const [peca, setPeca] = useState([])
   const [valor, setValor] = useState(0)
   const [valorTotal, setValorTotal] = useState(0)

   useEffect(() => {
      API.get("peca").then(res => {
         setPeca(res.dados)

         const peca = res.dados

         API.get("kit").then(res => {
            let valor = 0
            res.dados.map(item => {
               peca.map(itemPeca => {
                  console.log(item.peca.id, itemPeca)
                  if (item.peca.id === itemPeca.id) {
                     setValor(item.valor)
                     valor = (item.valor + valor)
                  }
               })
            })
            setValorTotal(valor)
         })
      })
   }, []);

   function del(id){
      if (window.confirm("Atenção, isso irá excluir a peça selecioanda e todos os seus KITS associados, deseja continuar?")) {

         API.get("pecaproduto").then(res => {
            res.dados.map(item => {
               if (item.produto.id === id) {
                  API.del("pecaproduto", item.id)
               }
            })
         })

         API.get("peca").then(res => {
            const peca = res.dados
            API.get("kit").then(res => {
               res.dados.map(item => {
                  peca.map(itemPeca => {
                     if (item.peca.id === itemPeca.id) {
                        API.del("kit", item.id)
                     }
                  })
               })
            })
         })

         API.del("peca", id)

         alert("Kit excluído")
         alert("Peça excluído")
      }
    }

  return (
      <div className="table-principal">
      <table className="table table-striped">
         <thead>
            <tr>
               <th>Nome</th>
               <th>Tipo</th>
               <th>Cor</th>
               <th>Qntd. Minima</th>
               <th>Quantidade</th>
               <th>Descricão</th>
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
                     <td>{item.tipo}</td>
                     <td>{item.cor}</td>
                     <td>{item.quantidadeMin}</td>
                     <td>{item.quantidade}</td>
                     <td>{item.descricao}</td>
                     <td>{valor}</td>
                     <td>{valorTotal}</td>

                     <td>
                        <button className='btn' onClick={(e) => {del(item.id)}}><span className='material-symbols-rounded'>delete</span></button>
                     </td>
                  </tr>
               )
            })}
         </tbody>
      </table>
      </div>
  );
}
