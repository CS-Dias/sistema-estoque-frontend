import React from 'react'

import API from "../../services/API";


export default function Peca() {


   function handleSubmit(e){
      e.preventDefault()

      const dados = {
         nome: e.target.PecaNome.value,
         tipo: e.target.PecaTipo.value,
         cor: e.target.PecaCor.value,
         descricao: e.target.PecaDescricao.value,
         quantidade: 0,
         quantidadeMin: e.target.PecaQntdMinima.value,
      }

      console.log(dados)

      API.post("peca", dados)

      alert("Peça Cadastrada")
   }


   return (
      
      <div className='cadastro-container'>
         <h2>Cadastro Peça</h2>
         <form method='POST' className='form-container' onSubmit={handleSubmit}>

            <fieldset>
               <label for="PecaNome" class="form-label">Nome da Peça</label>
               <input type="text" class="form-control" name='PecaNome' id="PecaNome" aria-describedby="emailHelp" />
            </fieldset>

            <fieldset>
               <label for="PecaTipo" class="form-label">Tipo da Peça</label>
               <input type="text" class="form-control" name='PecaTipo' id="PecaTipo" aria-describedby="emailHelp" />
            </fieldset>

            <fieldset>
               <label for="PecaCor" class="form-label">Cor da Peça</label>
               <input type="text" class="form-control" name='PecaCor' id="PecaCor" aria-describedby="emailHelp" />
            </fieldset>

            <fieldset>
               <label for="PecaDescricao" class="form-label">Descrição da Peça</label>
               <textarea type="text" class="form-control" name='PecaDescricao' id="PecaDescricao" aria-describedby="emailHelp"></textarea>
            </fieldset>

            <fieldset>
               <label for="PecaQntdMinima" class="form-label">Quantidade Mínima da Peça</label>
               <input type="number" min={0} class="form-control" name='PecaQntdMinima' id="PecaQntdMinima" aria-describedby="emailHelp" />
            </fieldset>

            <div className='form-button-container'>
               <button type="submit" class="btn btn-success">Confirmar Cadastro</button>
            </div>
         </form>
      </div>
   )
}
