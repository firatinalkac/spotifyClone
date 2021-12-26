import {Icon} from "../icons";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { setCurrent } from "stores/player"
function SongItem({item}) {

   const dispatch = useDispatch()
   const { current, playing, controls } = useSelector(state => state.player)
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


   const updateCurrent = () => {
      if(current.id === item.id) {
         if(playing) {
            controls.pause()
         } else {
            controls.play()
         }
      } else {
         dispatch(setCurrent(item))
      }
   }
   const isCurrentItem = (current?.id === item.id && playing)
   return (
      <>
         <NavLink
            key={item.id}
            to="/"
            className="bg-footer ease-in duration-200 hover:bg-active p-4 rounded relative group"
         >
            <img className={`mb-8 w-40 h-40 mx-auto object-cover ${imageStyle(item)}`} src={item.image} alt={item.type} />
            <button
               onClick={updateCurrent}
               className={`items-center justify-center w-10 h-10 rounded-full bg-primary absolute top-[8rem] right-[2rem] duration-200 hover:scale-[1.2] ${!isCurrentItem ? 'hidden' : 'flex'} group-hover:flex group-focus:flex`}>
               <Icon name={isCurrentItem ? 'pause' : 'play'} />
            </button>
            <h6 className="line-clamp-1">{ item.title }</h6>
            <p className="text-link text-sm mt-1">{item.songTitle}</p>
         </NavLink>
      </>
   )
}

export default SongItem