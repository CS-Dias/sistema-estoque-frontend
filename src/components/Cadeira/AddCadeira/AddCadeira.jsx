import React, { useEffect, useState } from 'react'
import './AddCadeira.css'
import API from '../../../services/API';
import getPecaPorTipo from './getPecaPorTipo';

export default function AddCadeira() {

   const [pecaPorTipo] = useState(getPecaPorTipo())

   function handleSubmit(e){
      e.preventDefault()

      const dados = {
         nome: e.target.CadeiraNome.value,
         descricao: e.target.CadeiraDescricao.value,
         modelo: e.target.CadeiraModelo.value,
         cor: e.target.CadeiraCor.value,
         valorUnitario: e.target.CadeiraValorUnitario.value,
      }

      console.log(dados);

      API.post("produto", dados)

      alert("Cadeira cadastrada no estoque")
   }

   return (
      <div className='cadastro-container'>
         <h2>Cadastro Cadeiro</h2>
         <form method='POST' className='form-container' onSubmit={handleSubmit}>

            {/* <fieldset>
               <label for="CadeiraId" class="form-label">ID da Cadeira</label>
               <input type="text" class="form-control" name='CadeiraId' id="CadeiraId" aria-describedby="emailHelp" />
            </fieldset> */}

            <fieldset>
               <label for="CadeiraNome" class="form-label">Nome da Cadeira</label>
               <input type="text" class="form-control" name='CadeiraNome' id="CadeiraNome" aria-describedby="emailHelp" />
            </fieldset>

            <fieldset>
               <label for="CadeiraDescricao" class="form-label">Descrição da Cadeira</label>
               <textarea type="text" class="form-control" name='CadeiraDescricao' id="CadeiraDescricao" aria-describedby="emailHelp"></textarea>
            </fieldset>

            <label htmlFor="">Peças da cadeira</label>
            <fieldset className='container-tipo-input'>

               {pecaPorTipo.map((pecaTipo) => {
                  return(
                     <div>
                        <label for="CadeiraDescricao" class="form-label">{pecaTipo[0].tipo}</label>
                        <select class="form-select" id={`peca-tipo-${pecaTipo[0].tipo}`} name={`peca-tipo-${pecaTipo[0].tipo}`} aria-label="Floating label select example">
                           <option selected>Selecione</option>
                           {pecaTipo.map(item => {
                              return (
                                 <option value={item.id}>{item.nome}</option>
                              )
                           })}
                        </select>
                     </div>
                  )
               })}
               
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
               <input type="number" min={0}  class="form-control" name='CadeiraValorUnitario' id="CadeiraValorUnitario" aria-describedby="emailHelp" />
            </fieldset>

            <div className='form-button-container'>
               <button type="submit" class="btn btn-success">Confirmar Cadastro</button>
            </div>

         </form>
      </div>
   )
}
