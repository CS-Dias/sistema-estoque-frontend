import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import AsideNvbar from '../components/AsideNavbar'
import Kit from '../components/Kit/Kit'

export default function CadastraKit() {
  return (
   <Fragment>
   <Navbar/>
      <div className='container-main'>

         <AsideNvbar/>
         
         <Kit/>
      </div>
   </Fragment>
   )
}
