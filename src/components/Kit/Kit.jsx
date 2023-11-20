import React from 'react'

export default function Kit() {
   return (
      <div className='cadastro-container'>
         <h2>Cadastro Peça</h2>
         <form method='POST' className='form-container'>

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
