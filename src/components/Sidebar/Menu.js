import { Icon } from 'icons';
import { NavLink } from 'react-router-dom'

function Menu() {
   return(
      <nav>
         <ul className="flex flex-col px-2">
            <li>
               <NavLink to="/" className={({ isActive }) => "px-4 h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white rounded" + (isActive ? " bg-active text-white" : "")}>
                  <span>
                     <Icon name="home" size="24" />
                  </span>
                  Ana Sayfa
               </NavLink>
            </li>
            <li>
               <NavLink to="/search" className={({ isActive }) => "px-4 h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white rounded" + (isActive ? " bg-active text-white" : "")}>
                  <span>
                     <Icon name="search" />
                  </span>
                  Ara
               </NavLink>
            </li>
            <li>
               <NavLink to="/collection" className={({ isActive }) => "px-4 h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white rounded" + (isActive ? " bg-active text-white" : "")}>
                  <span>
                     <Icon name="collection" />
                  </span>
                  Kitaplığın
               </NavLink>
            </li>
         </ul>
      </nav>
   )
}

export default Menu