import Navigation from './Navbar/Navigation'
import Auth from './Navbar/Auth'
import { useMatch } from 'react-router-dom'

function Navbar() {
   const searchRoute = useMatch('/search')
   return(
      <nav className="h-[3.75rem] flex items-center justify-between relative z-10 px-8 sticky top-0 bg-backdrop">
         <Navigation />
         {searchRoute && (
            <div>
               Search kismindasin
            </div>
         )}
         <Auth />
      </nav>
   )
}

export default Navbar;