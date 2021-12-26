import { NavLink } from "react-router-dom";
import SongItem from './SongItem'


function Section({title, more = false, items}) {
   return(
      <section className="mb-[3rem]">
         <header className="flex items-center justify-between">
            <NavLink to={more}>
               <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">{title}</h3>

            </NavLink>
            {more && (
               <NavLink to={more} className="text-xs font-semibold uppercase text-link hover:underline">
                  SEE ALL
               </NavLink>
            )}
         </header>
         <div className="grid grid-cols-6 gap-x-6 mt-5">
            {items.map(item => (
               <SongItem item={item} key={item.id} />
            ))}
         </div>
      </section>
   )
}

export default Section