
import Logo from '../../Components/CommonComponents/Logo_Data/Logo'
import {BsGrid} from 'react-icons/bs'
import SidebarMain from './SidebarMain'
import { useState } from 'react';
import SimpleBar from 'simplebar-react';

const Sidebar = () => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

  return (
       <div className='sidebar-wrapper' style={{width: isOpen ? "50px" : ""}}  >
         <div id="sidebarEffect"></div>
            <div>
                <div className='logo-wrapper logo-wrapper-center'>
                    <a href='/Dashboard'><Logo/></a>
                    <div class="back-btn">
                    </div>
                    <div className='toggle-sidebar'> 
                        <i><BsGrid  onClick={toggle}/></i>
                    </div>
                </div >
                <nav className='sidebar-main'>
                    <div className='left-arrow'></div>
                    <div id='sidebar-menu'>
                         <ul className='sidebar-links' id='simple-bar' >    
                            <li className="back-btn"></li>
                                            <SimpleBar style={{height:'30px'}}>
                                                <SidebarMain/>
                                            </SimpleBar> 
                    </ul>     
                </div>
                </nav>
            </div>
        </div>
  )
}
export default Sidebar