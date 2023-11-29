import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import AsideNvbar from '../components/AsideNavbar'
import Cadeira from '../components/Cadeira/Cadeira'

export default function AdicionarCadeira() {
  return (
   <Fragment>
   <Navbar/>
      <div className='container-main'>

         <AsideNvbar/>

         <Cadeira/>
      </div>
   </Fragment>
  )
}
