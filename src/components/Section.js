import { NavLink } from "react-router-dom";
import { Icon } from 'icons'

function Section({title, more = false, items}) {
   const imageStyle = item => {
      switch (item.type) {
         case 'artist':
            return 'rounded-full';
         case 'podcast':
            return 'rounded-xl'
         default:
            return 'rounded'
      }
   }


   return(
      <section>
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
         <div className="grid grid-cols-6 gap-x-6 mt-3">
            {items.map(item => (
               <NavLink
                  key={item.id}
                  to="/"
                  className="bg-footer ease-in duration-200 hover:bg-active p-4 rounded relative group"
               >
                  <img className={`mb-8 w-40 h-40 mx-auto object-cover ${imageStyle(item)}`}src={item.image} alt="image"/>
                  <button className=" items-center justify-center w-10 h-10 rounded-full bg-primary absolute top-[8rem] right-[2rem] duration-200	 hover:h-12 hover:w-12 hidden group-hover:flex group-focus:flex">
                        <Icon name="play" />
                  </button>
                  <h6 className="line-clamp-1">{ item.title }</h6>
                  <p className="text-link text-sm mt-1">{item.subTitle}</p>
               </NavLink>
            ))}
         </div>
      </section>
   )
}

export default Section