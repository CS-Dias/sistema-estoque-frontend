import React, { useEffect, useState } from 'react'
import API from '../../services/API';

export default function TableCadeira() {

    const [produto, setProduto] = useState([])

    useEffect(() => {
       API.get("produto").then(res =>{
          setProduto(res.dados)
       })
    }, []);

    function del(id){
      if (window.confirm("Atenção, isso irá excluir a cadeira selecioanda, deseja continuar?")) {
         API.del("produto", id)
   
         API.get("pecaproduto").then(res => {
            res.dados.map(item => {
               if (item.produto.id === id) {
                  API.del("pecaproduto", item.id)
               }
            })
         })
         alert("Produto excluído")
      }
    }

   return (
    <div className="table-principal">
    <table className="table table-striped">
       <thead>
          <tr>
             <th>Nome</th>
             <th>Descrição</th>
             <th>Modelo</th>
             <th>cor</th>
             <th>Valor Unit.</th>
             <th>Opções</th>
          </tr>
       </thead>
       <tbody>
          {produto.map(item => {
             return(
                <tr>
                   <td>{item.nome}</td>
                   <td>{item.descricao}</td>
                   <td>{item.modelo}</td>
                   <td>{item.cor}</td>
                   <td>{item.valorUnitario}</td>

                   <td>
                     <button className='btn' onClick={(e) => {del(item.id)}}><span className='material-symbols-rounded'>delete</span></button>
                   </td>
                </tr>
             )
          })}
       </tbody>
    </table>
    </div>
   )
}
