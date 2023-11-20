import React from 'react'

export default function Cadeira() {
   return (
      <div className='cadastro-container'>
         <h2>Cadastro Cadeira</h2>
         <form method='POST' className='form-container'>

            <fieldset>
               <label for="CadeiraId" class="form-label">ID da Cadeira</label>
               <input type="text" class="form-control" name='CadeiraId' id="CadeiraId" aria-describedby="emailHelp" />
            </fieldset>

            <fieldset>
               <label for="CadeiraNome" class="form-label">Nome da Cadeira</label>
               <input type="text" class="form-control" name='CadeiraNome' id="CadeiraNome" aria-describedby="emailHelp" />
            </fieldset>

            <fieldset>
               <label for="CadeiraDescricao" class="form-label">Descrição da Cadeira</label>
               <textarea type="text" class="form-control" name='CadeiraDescricao' id="CadeiraDescricao" aria-describedby="emailHelp"></textarea>
            </fieldset>

            <fieldset>
               <label for="CadeiraModelo" class="form-label">Modelo da Cadeira</label>
               <input type="text" class="form-control" name='CadeiraModelo' id="CadeiraModelo" aria-describedby="emailHelp" />
            </fieldset>

            <fieldset>
               <label for="CadeiraCor" class="form-label">Cor da Cadeira</label>
               <input type="text" class="form-control" name='CadeiraCor' id="CadeiraCor" aria-describedby="emailHelp" />
            </fieldset>

            <fieldset>
               <label for="CadeiraValorUnitario" class="form-label">Valor Unitário da Cadeira</label>
               <input type="number" class="form-control" name='CadeiraValorUnitario' id="CadeiraValorUnitario" aria-describedby="emailHelp" />
            </fieldset>

            <div className='form-button-container'>
               <button type="submit" class="btn btn-success">Confirmar Cadastro</button>
            </div>

         </form>
      </div>
   )
}
