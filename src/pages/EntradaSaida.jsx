import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Entrada from '../components/EntradaSaida/Entrada/Entrada'
import Saida from '../components/EntradaSaida/Saida/Saida'
import AsideNvbar from '../components/AsideNavbar'

export default function EntradaSaida() {
  return (
   <Fragment>
      <Navbar/>
      <div className='container-main'>

         <AsideNvbar/>

         <div>
            <Entrada/>
            <Saida/>
         </div>
      </div>
   </Fragment>
  )
}
