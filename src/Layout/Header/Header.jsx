import React from 'react'
import Logo from '../../Components/CommonComponents/Logo_Data/Logo'
import ToggleButton from '../../Components/CommonComponents/Logo_Data/ToggleButton'
import RightNav from './Rightnav'
import SearchBar from './SearchBar'

const Header = ({sidebarOpen ,setMode , setLtr , settingData}) => {
  return (
    <div className={`page-header ${sidebarOpen ? "close_icon" : ""}`}>
        <div className='header-wrapper m-0'>
            <div className='header-logo-wrapper p-0'>
                <div className='logo-wrapper'>
                <Logo settingData={settingData} />
                </div>
          <ToggleButton />
        </div>
        <SearchBar />
        <RightNav setMode={setMode} setLtr={setLtr} />              
            </div>
         </div>
  )
}
export default Header