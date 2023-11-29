import React, { useEffect, useState } from 'react'
import './AddCadeira.css'
import API from '../../../services/API';
import getPecaPorTipo from './getPecaPorTipo';

export default function AddCadeira() {

   const tipoPeca = ["ENCONSTO", "BANCO", "ACENTO", "MECANISMO", "BASE", "RODIZIO"];
   const [pecaPorTipo, setPecaPorTipo] = useState(getPecaPorTipo())

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

      let cadeira = {}

      API.get("produto", `nome=${dados.nome}`).then(res => {
         cadeira = res.dados[0]
      })

      tipoPeca.map(item => {

         try {

            if (parseInt(e.target["peca-tipo-" + item].value) > 0) {
               API.get("peca", `id=${e.target["peca-tipo-" + item].value}`).then(res => {

                  console.log(res.dados);
   
                  const data = {
                     produto: cadeira,
                     peca: res.dados
                  }
   
                  API.post("pecaproduto", data)
               })
            }


            
         } catch (error) {
            
         }
      })

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

               {
                  tipoPeca.map(tipoPeca => {
                     return(
                        <select class="form-select" id={`peca-tipo-${tipoPeca}`} name={`peca-tipo-${tipoPeca}`}>
                           <option selected value={0}>Selecione a peça para {tipoPeca}</option>
                           {pecaPorTipo.map(item => {
                              for (let index = 0; index < item.length; index++) {
                                 if (item[index].tipo === tipoPeca) {
                                    return(<option value={item[index].id} key={index}>{item[index].nome}</option>)
                                 }                                 
                              }
                           })}
                        </select>
                     )
                  })
               }

            {/* {pecaPorTipo.map(pecaTipo => {
               return(
                  <div>
                     <label for="CadeiraDescricao" class="form-label">{pecaTipo[0].tipo}</label>
                     
                  </div>
               )
            })} */}
               
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

function SelectMap({}){

}