import React from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'



const Layout = () => {
  return (
    <div className='page-wrapper compact-wrapper' id='pageWrapper'>
            <Header/>
      <div className='page-body-wrapper'>
      <Sidebar/>
      </div>
    </div>
  )
}

export default Layout