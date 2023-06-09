import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import {CiSearch} from 'react-icons/ci'
import {BiMoon} from 'react-icons/bi'
import Notification from './Notification'
import Profile from './Profile'

const Rightnav = ({setMode}) => {
  return (
    <Col sm={6} className='nav-right pull-right right-header p-0 '>
            {/* <div className='header-btns'>
                <Link className='btn btn-outline' href='/product/create'>Add Product</Link>
                <Link className='btn btn-animation' href='/order/create'>Add Orders</Link>
            </div> */}
            <ul className="nav-menus">
              <li>
           <span className="header-search">
             <CiSearch className="ri-search-line" />
           </span>
         </li>
         <Notification />
         <li>
           <div className="mode">
             <BiMoon className="ri-moon-line" onClick={() => setMode((prev) => !prev)} />
           </div>
         </li>
         <Profile />
       </ul>
        </Col>
  )
}

export default Rightnav

// import React from "react";
// import { RiMoonLine, RiSearchLine } from "react-icons/ri";
// import { Col } from "reactstrap";
// import ProfileNav from "./ProfileNav";
// import NotificationBox from "./NotificationBox";
// import Link from "next/link";

// const RightNav = ({ setMode, setLtr }) => {
//   return (
//     <Col sm="6" className="nav-right pull-right right-header p-0">
//       <div className="header-btns">
//         <Link href={"/product/create"} className="btn btn-outline">Add Product</Link>
//         <Link href={"/order/create"} className="btn btn-animation">Add Order</Link>
//       </div>
//       <ul className="nav-menus">
//         <li>
//           <span className="header-search">
//             <RiSearchLine className="ri-search-line" />
//           </span>
//         </li>
//         <NotificationBox />
//         <li>
//           <div className="mode">
//             <RiMoonLine className="ri-moon-line" onClick={() => setMode((prev) => !prev)} />
//           </div>
//         </li>
//         {/* <li>
//           <div className="mode">
//             <p onClick={() => setLtr((prev) => !prev)}>rtl/ltr</p>
//           </div>
//         </li> */}
//         <ProfileNav />
//       </ul>
//     </Col>
//   );
// };

// export default RightNav;