import {Icon} from 'icons'
import { useAudio } from 'react-use'
import { secondsToTime } from "utils";
import CustomRange from 'components/CustomRange';
import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setControls, setPlaying, setSidebar} from "stores/player";

function Player() {

   const dispatch = useDispatch();
   const { sidebar, current } = useSelector(state => state.player);

   const [audio, state, controls] = useAudio({
      src: current?.src,
   });

   useEffect(() => {
      controls.play()
   }, [current])

   useEffect(() => {
      dispatch(setPlaying(state.playing))
   }, [state.playing])

   useEffect(() => {
      dispatch(setControls(controls))
   }, [current])

   const volumeIcon = useMemo(() => {
      if(state.volume === 0 || state.muted)
         return 'volumeMuted'
      if(state.volume > 0 && state.volume < 0.33)
         return 'volumeLow'
      if(state.volume >= 0.33 && state.volume < 0.66)
         return 'volumeNormal'
      return 'volumeFull'
   }, [state.volume, state.muted])

   return(
      <div className="flex px-4 justify-between items-center h-full">
         <div className="min-w-[11.25rem] w-[30%] flex items-center">
            {current && (
               <div className="flex items-center">
                  <div className="flex items-center">
                     {!sidebar && (
                        <div className="w-14 h-14 mr-4 relative group">
                           <img src={current.image} alt=""/>
                           <button
                              onClick={() => dispatch(setSidebar(true))}
                              className="hidden group-hover:block w-6 h-6 flex items-center justify-center bg-black opacity-60 hover:opacity-100 hover:scale-[1.09] ease-linear absolute top-1 right-1 rounded-full rotate-90">
                              <Icon size={24} name="arrowUp"  />
                           </button>
                        </div>
                     )}
                     <div className="mr-5">
                        <h6 className="text-sm font-semibold line-clamp-1">{current.songTitle}</h6>
                        <p className="text-[0.688rem] text-white text-opacity-70"> {current.title}</p>
                     </div>
                  </div>
                  <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                     <Icon size={16} name="heart" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                     <Icon size={16} name="pipToggle" />
                  </button>
               </div>
            )}
         </div>
         <div className="flex flex-col items-center max-w-[40.125rem] w-[40%]">
            <div className="flex items-center gap-x-5">
               <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                  <Icon name="shuffle" size={16}/>
               </button>
               <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                  <Icon name="playerPrev" size={16}/>
               </button>
               <button
                  onClick={controls[state?.playing ? 'pause' : 'play']}
                  className="w-8 h-8 flex items-center justify-center text-black bg-white bg-opacity-70 hover:bg-opacity-100 hover:scale-[1.06] rounded-full">
                  <Icon name={state?.playing ? 'pause' : 'play'} size={16}/>
               </button>
               <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                  <Icon name="playerNext" size={16}/>
               </button>
               <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                  <Icon name="repeat" size={16}/>
               </button>
            </div>
            <div className="w-full flex items-center gap-x-2">
               {audio}
               <div className="text-[0.688rem] text-white text-opacity-70">
                  {secondsToTime(state?.time)}
               </div>
               <CustomRange
                  step={0.1}
                  min={0}
                  max={state?.duration || 1}
                  value={state?.time}
                  onChange={value => controls.seek(value)}
               />
               <div className="text-[0.688rem] text-white text-opacity-70">
                  {secondsToTime(state?.duration)}
               </div>
            </div>
         </div>
         <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
               <Icon name="lyrics" size={16}/>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
               <Icon name="queue" size={16}/>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
               <Icon name="device" size={16}/>
            </button>
            <button
               onClick={controls[state.muted ? 'unmute' : 'mute']}
               className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
               <Icon size={16} name={volumeIcon}/>
            </button>
            <div className="w-[5.825rem] w-max-full">
               <CustomRange
                  step={0.01}
                  min={0}
                  max={1}
                  value={state.muted ? 0 : state?.volume}
                  onChange={value => {
                     controls.unmute()
                     controls.volume(value)
                  }}
               />
            </div>
         </div>
      </div>
   )
}

export default Player;