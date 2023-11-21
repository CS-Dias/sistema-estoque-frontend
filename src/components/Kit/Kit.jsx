import React, { useEffect, useState } from 'react'

import API from "../../services/API";

export default function Kit() {

   const [peca, setPeca] = useState([])

   useEffect(() => {
      API.get("peca").then(res => {
         setPeca(res.dados)
         console.log(res.dados);
      })
   }, []);

   function handleSubmit(event) {
      event.preventDefault(); // Prevent default form submission
      
      let pecaObj = {}

      peca.map(item => {
         if (item.id === parseInt(event.target.nomePecaKit.value)) {
            pecaObj = item
         }
      })

      pecaObj.quantidade = pecaObj.quantidade + parseInt(event.target.quantidadePecas.value)
    
      API.patch("peca", {
         id: parseInt(event.target.nomePecaKit.value),
         quantidade: (pecaObj.quantidade),

         nome: pecaObj.nome,
         tipo: pecaObj.tipo,
         cor: pecaObj.cor,
         descricao: pecaObj.descricao
      })

      API.post("kit", {
         nome: event.target.nomeKit.value,
         descricao: event.target.descKit.value,
         valor: parseFloat(event.target.valorKit.value),
      }, `peca_id=${pecaObj.id}`)

      alert("Kit Cadastrado")
    } 

   return (
      <div className='cadastro-container'>
         <h2>Cadastro de Kit</h2>
         <form method='POST' className='form-container' onSubmit={handleSubmit}>

            <fieldset>
               <label for="nomePecaKit" class="form-label">Nome de Peça do Kit</label>
               <select className='form-control' id='nomePecaKit' name='nomePecaKit'>
                  {peca.map(item => {
                     return(<option value={item.id}>{item.nome} | Cor: {item.cor} | {item.descricao}</option>)
                  })}
               </select>
            </fieldset>

            <fieldset>
               <label for="quantidadePecas" class="form-label">Quantidade de Peças</label>
               <input type="text" class="form-control" name='quantidadePecas' id="quantidadePecas" aria-describedby="emailHelp"/>
            </fieldset>

            <fieldset>
               <label for="nomeKit" class="form-label">Nome do Kit</label>
               <input type="text" class="form-control" name='nomeKit' id="nomeKit" aria-describedby="emailHelp"/>
            </fieldset>

            <fieldset>
               <label for="descKit" class="form-label">Descriçao do Kit</label>
               <textarea type="text" class="form-control" name='descKit' id="descKit" aria-describedby="emailHelp"></textarea>
            </fieldset>

            <fieldset>
               <label for="valorKit" class="form-label">Valor do Kit</label>
               <input type="number" class="form-control" name='valorKit' id="valorKit" aria-describedby="emailHelp"/>
            </fieldset>

            <div className='form-button-container'>
               <button type="submit" class="btn btn-success">Confirmar Cadastro</button>
            </div>

         </form>
      </div>
   )
}
