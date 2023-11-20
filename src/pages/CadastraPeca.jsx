import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import AsideNvbar from '../components/AsideNavbar'
import Peca from '../components/Peca/Peca'

export default function CadastraPeca() {
  return (
   <Fragment>
      <Navbar/>
      <div className='container-main'>

         <AsideNvbar/>

         <Peca/>
      </div>
   </Fragment>
  )
}
