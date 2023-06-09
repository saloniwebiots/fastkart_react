import items from "./SidebarData"
import SidebarList from "./SidebarList"

export default function SidebarMain(){
    return (
        <li className="sidebar-list">
          { items.map((item, index) => <SidebarList key={index} item={item} />) }
        </li>
    )
}