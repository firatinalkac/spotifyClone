import {useDispatch, useSelector} from "react-redux";
import {setSidebar} from "stores/player";
import {Icon} from "icons";

function SidebarCover() {
   const dispatch = useDispatch();
   const current = useSelector(state => state.player.current)

   return(
      <div className="pt-[100%] bg-white relative group">
         <img src={current.image} className="w-full h-full object-cover absolute top-0 left-0" alt=""/>
         <button
            onClick={() => dispatch(setSidebar(false))}
            className="hidden group-hover:block w-6 h-6 flex items-center justify-center bg-black opacity-60 hover:opacity-100 hover:scale-[1.09] ease-linear absolute top-1 right-1 rounded-full -rotate-90">
            <Icon size={24} name="arrowUp"  />
         </button>
      </div>
   )
}

export default SidebarCover