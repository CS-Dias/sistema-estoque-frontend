import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import AsideNvbar from '../components/AsideNavbar'
import AddCadeira from '../components/Cadeira/AddCadeira/AddCadeira'


export default function AdicionarCadeira() {
  return (
   <Fragment>
   <Navbar/>
      <div className='container-main'>

         <AsideNvbar/>
         <AddCadeira/>
      </div>
   </Fragment>
  )
}
