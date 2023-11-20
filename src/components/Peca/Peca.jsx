import React from 'react'

export default function Peca() {
   return (
      
      <div className='cadastro-container'>
         <h2>Cadastro Peça</h2>
         <form method='POST' className='form-container'>

            <fieldset>
               <label for="PecaId" class="form-label">ID da Peça</label>
               <input type="text" class="form-control" name='PecaId' id="PecaId" aria-describedby="emailHelp" />
            </fieldset>

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
               <label for="PecaQntd" class="form-label">Quantidade da Peça</label>
               <input type="number" class="form-control" name='PecaQntd' id="PecaQntd" aria-describedby="emailHelp" />
            </fieldset>

            <fieldset>
               <label for="PecaQntdMinima" class="form-label">Quantidade Mínima da Peça</label>
               <input type="number" class="form-control" name='PecaQntdMinima' id="PecaQntdMinima" aria-describedby="emailHelp" />
            </fieldset>

            <div className='form-button-container'>
               <button type="submit" class="btn btn-success">Confirmar Cadastro</button>
            </div>
         </form>
      </div>
   )
}
