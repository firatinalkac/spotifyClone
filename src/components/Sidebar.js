import logo from '../img/logo.svg'
import Menu from './Sidebar/Menu'
import PlayList from "./Sidebar/PlayList";
import DownloadApp from "./Sidebar/DownloadApp";
import {Icon} from 'icons'

function Sidebar() {
   return(
      <aside className="w-60 pt-6 flex flex-col bg-black">
         <a href="#" className="mb-5 px-6">
            <img src={logo} className="h-10" />
         </a>
         <Menu />
         <nav className="mt-6">
            <ul>
               <li>
                  <a href="#" className="py-2 px-6 flex text-sm items-center group text-link font-semibold hover:text-white">
                     <span className="w-6 h-6 flex items-center justify-center mr-3 bg-opacity-60 bg-white group-hover:bg-opacity-100 rounded-sm text-black">
                        <Icon name="plus" size={12} />
                     </span>
                     Çalma Listesi Oluştur
                  </a>
               </li>
               <li>
                  <a href="#" className="py-2 px-6 flex text-sm items-center group text-link font-semibold hover:text-white">
                     <span className="w-6 h-6 flex items-center justify-center mr-3 opacity-60 bg-gradient-to-br to-blue-300 from-indigo-600 group-hover:opacity-100">
                        <Icon name="heart" size={12} />
                     </span>
                     Beğenilen Şarkılar
                  </a>
               </li>
            </ul>
         </nav>
         <PlayList />
         <DownloadApp />
      </aside>
   )
}

export default Sidebar;