function PlayList() {
   return(
      <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto	">
         <ul>
            {/*{new Array(40).fill(
               <li>
                  <a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
                     Çalma Listesi
                  </a>
               </li>
            )}*/}
            {Array.from(Array(40), (e, i) => {
               return (
                  <li key={i}>
                     <a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
                        Çalma Listesi - {i+1}
                     </a>
                  </li>
               )
            })}
         </ul>
      </nav>
   )
}

export default PlayList