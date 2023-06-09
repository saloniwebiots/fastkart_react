import {  Fragment, useState} from "react"
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";

function SidebarList({item}){
    const [isOpen ,setIsOpen] =useState(false)

    if(item.children){
        return (
            <Fragment >
                <li className="sidebar-list" onClick={() => setIsOpen((prev) => !prev)}>
                    <a className="linear-icon-link sidebar-link sidebar-title" href={item.path}>
                        <i>{ item.icon}</i>
                    <span>{item.displayTitle}</span> 
                    <div className="according-menu">
                    {!isOpen ? (<RiArrowRightSLine style={{color:'white'}}/>):(<RiArrowDownSLine/>)}
                    </div>
                    </a> 
                    { isOpen && (
                    <ul>
                        <li className="sidebar-submenu">     
                    { item.children.map((child, index) => <SidebarList key={index} item={child} />) } 
                    </li>
                    </ul>
                    )}
                </li>
            </Fragment>
        )
    }else{
        return (
            <li className="sidebar-list">
            <a href={item.path || "#"} className="sidebar-link sidebar-title link-nav">
                <i >{ item.icon}</i>
               <span>{item.displayTitle}</span> 
            </a>
            </li>
        )
    }
}
export default SidebarList;