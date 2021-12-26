const HomeIcon = ({size}) => {
   return (
      <svg role="img" height={size} width={size} className="Svg-sc-1bi12j5-0 hDgDGI home-icon" viewBox="0 0 24 24">
         <path d="M9 14h6v7h5V7.8l-8-4.6-8 4.6V21h5v-7zm1 8H3V7.2L12 2l9 5.2V22h-7v-7h-4v7z" fill="currentColor" />
      </svg>
   )
}

const SearchIcon = ({size}) => {
   return (
      <svg role="img" height={size} width={size} className="Svg-sc-1bi12j5-0 hDgDGI search-active-icon" viewBox="0 0 24 24">
         <path
            d="M16.736 16.262A8.457 8.457 0 0019 10.5a8.5 8.5 0 10-3.779 7.067l4.424 5.18 1.521-1.299-4.43-5.186zM10.5 17C6.916 17 4 14.084 4 10.5S6.916 4 10.5 4 17 6.916 17 10.5 14.084 17 10.5 17z" fill="currentColor" />
      </svg>
   )
}
const CollectionIcon = ({size}) => {
   return (
      <svg role="img" height={size} width={size} className="Svg-sc-1bi12j5-0 hDgDGI collection-icon" viewBox="0 0 24 24">
         <path d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z" fill="currentColor" />
      </svg>
   )
}

const PlusIcon = ({size}) => {
   return (
      <svg role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 hDgDGI">
         <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z" fill="currentColor" />
         <path fill="none" d="M0 0h16v16H0z" />
      </svg>
   )
}
const HeartFillIcon = ({size}) => {
   return (
      <svg role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 hDgDGI">
         <path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z" fill="currentColor" />
      </svg>
   )
}
const DownloadIcon = ({size}) => {
   return (
      <svg role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 hDgDGI">
         <path d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z" fill="currentColor" />
      </svg>
   )
}
const PrevIcon = ({size}) => {
   return (
      <svg role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 hDgDGI">
         <polyline points="16 4 7 12 16 20" fill="none" stroke="currentColor" />
      </svg>
   )
}
const NextIcon = ({size}) => {
   return (
      <svg role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 hDgDGI">
         <polyline points="8 4 17 12 8 20" fill="none" stroke="currentColor" />
      </svg>
   )
}
const UserIcon = ({size}) => {
   return (
      <svg width={size} height={size} fill="#ffffff" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" data-testid="user-icon">
         <path d="M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607 11.757 11.521C11.742 11.435 11.737 11.267 11.869 11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5 6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761 1.48601C11.64 0.435011 10.173 -0.0879888 8.636 0.0110112C5.756 0.198011 3.501 2.68401 3.501 5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82 9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243 11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786 13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885 1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152 12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891 10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499 6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699 1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994 3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201 13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803 10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513 11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884 17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692 15.216 13.717Z" />
      </svg>
   )
}
const DownIcon = ({size}) => {
   return (
      <svg width={size} height={size} fill="currentColor" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" data-testid="user-icon">
         <path d="M3 6l5 5.794L13 6z" />
      </svg>
   )
}
const ExternalIcon = ({size}) => {
   return (
      <svg width={size} height={size} fill="currentColor" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" data-testid="user-icon">
         <path fillRule="evenodd" d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z" clipRule="evenodd" />
      </svg>
   )
}
const PlayIcon = ({size}) => {
   return (
      <svg height={size} role="img" width={size} viewBox="0 0 24 24" aria-hidden="true">
         <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor" />
      </svg>
   )
}
const PauseIcon = ({size}) => {
   return (
      <svg role="img" height={size} width={size} fill="currentColor" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 hDgDGI">
         <path fill="none" d="M0 0h16v16H0z" />
         <path d="M3 2h3v12H3zm7 0h3v12h-3z" />
      </svg>
   )
}
const PlayerPrevIcon = ({size}) => {
   return (
      <svg height={size} role="img" width={size} viewBox="0 0 16 16" aria-hidden="true">
         <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z" fill="currentColor" />
      </svg>
   )
}
const PlayerNextIcon = ({size}) => {
   return (
      <svg height={size} role="img" width={size} viewBox="0 0 16 16" aria-hidden="true">
         <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z" fill="currentColor" />
      </svg>
   )
}
const ShuffleIcon = ({size}) => {
   return (
      <svg height={size} fill="currentColor" role="img" width={size} viewBox="0 0 16 16" aria-hidden="true">
         <path d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z" />
      </svg>
   )
}
const RepeatIcon = ({size}) => {
   return (
      <svg role="img" fill="currentColor"  height={size} width={size} viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 hDgDGI">
         <path d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z" />
      </svg>
   )
}
const HeartIcon = ({size}) => {
   return (
      <svg height={size} fill="currentColor" role="img" width={size} viewBox="0 0 16 16" aria-hidden="true">
         <path d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z" />
      </svg>
   )
}
const PipToggleIcon = ({size}) => {
   return (
      <svg height={size} role="img" fill="currentColor" width={size} viewBox="0 0 16 16" aria-hidden="true">
         <path d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" fillRule="currentColor" />
         <path d="M10 8h4v3h-4z" />
      </svg>
   )
}
const WrapperIcon = ({size}) => {
   return (
      <svg height={size} role="img" width={size} viewBox="0 0 16 16" aria-hidden="true">
         <path d="M2 2v5l4.33-2.5L2 2zm0 12h14v-1H2v1zm0-4h14V9H2v1zm7-5v1h7V5H9z" fill="currentColor" />
      </svg>
   )
}
const DeviceIcon = ({size}) => {
   return (
      <svg height={size} role="img" fill="currentColor" width={size} viewBox="0 0 16 16" aria-hidden="true">
         <path d="M0 3v8c0 .55.45 1 1 1h5v-1H1V3h5V2H1c-.55 0-1 .45-1 1zm3 11.5c0 .275.225.5.5.5H6v-1H3.5c-.275 0-.5.225-.5.5zM15 2H9c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H9V3h6v11zm-3-8a.75.75 0 100-1.5.75.75 0 000 1.5zm0 6a2 2 0 100-4 2 2 0 000 4zm0-3c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1z" />
      </svg>
   )
}

const VolumeMuted = ({size}) => {
   return (
      <svg height={size} role="img" fill="currentColor" width={size} viewBox="0 0 16 16" aria-hidden="true">
         <path d="M0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732zm8.623 2.121l-.707-.707-2.147 2.147-2.146-2.147-.707.707L12.062 8l-2.146 2.146.707.707 2.146-2.147 2.147 2.147.707-.707L13.477 8l2.146-2.147z" />
      </svg>
   )
}
const VolumeLow = ({size}) => {
   return (
      <svg height={size} role="img" fill="currentColor" width={size} viewBox="0 0 16 16" aria-hidden="true">
         <path d="M10.04 5.984l.658-.77q.548.548.858 1.278.31.73.31 1.54 0 .54-.144 1.055-.143.516-.4.957-.259.44-.624.805l-.658-.77q.825-.865.825-2.047 0-1.183-.825-2.048zM0 11.032v-6h2.802l5.198-3v12l-5.198-3H0zm7 1.27v-8.54l-3.929 2.27H1v4h2.071L7 12.302z" />
      </svg>
   )
}
const VolumeNormal = ({size}) => {
   return (
      <svg height={size} fill="currentColor" role="img" width={size} viewBox="0 0 16 16" aria-hidden="true">
         <path d="M0 11.032v-6h2.802l5.198-3v12l-5.198-3H0zm7 1.27v-8.54l-3.929 2.27H1v4h2.071L7 12.302zm4.464-2.314q.401-.925.401-1.956 0-1.032-.4-1.957-.402-.924-1.124-1.623L11 3.69q.873.834 1.369 1.957.496 1.123.496 2.385 0 1.262-.496 2.385-.496 1.123-1.369 1.956l-.659-.762q.722-.698 1.123-1.623z" />
      </svg>
   )
}
const VolumeFull = ({size}) => {
   return (
      <svg height={size} role="img" fill="currentColor" width={size} viewBox="0 0 16 16" aria-hidden="true">
         <path d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z" />
      </svg>
   )
}
const LyricsIcon = ({size}) => {
   return (
      <svg height={size} fill="currentColor" role="img" width={size} viewBox="0 0 16 16" aria-hidden="true">
         <path d="M8.5 1A4.505 4.505 0 004 5.5c0 .731.191 1.411.502 2.022L1.99 13.163a1.307 1.307 0 00.541 1.666l.605.349a1.307 1.307 0 001.649-.283L9.009 9.95C11.248 9.692 13 7.807 13 5.5 13 3.019 10.981 1 8.5 1zM4.023 14.245a.307.307 0 01-.388.066l-.605-.349a.309.309 0 01-.128-.393l2.26-5.078A4.476 4.476 0 007.715 9.92l-3.692 4.325zM8.5 9C6.57 9 5 7.43 5 5.5S6.57 2 8.5 2 12 3.57 12 5.5 10.429 9 8.5 9z" />
      </svg>
   )
}
const QueueIcon = ({size}) => {
   return (
      <svg height={size} fill="currentColor" role="img" width={size} viewBox="0 0 16 16" aria-hidden="true">
         <path d="M2 2v5l4.33-2.5L2 2zm0 12h14v-1H2v1zm0-4h14V9H2v1zm7-5v1h7V5H9z" />
      </svg>
   )
}
const ArrowUpIcon = ({size}) => {
   return (
      <svg height={size} fill="currentColor" role="img" width={size} viewBox="0 0 24 24" aria-hidden="true">
         <polygon points="15.54,21.151 5.095,12.229 15.54,3.309 16.19,4.069 6.635,12.229 16.19,20.39 " />
      </svg>
   )
}

const Icon = ({name, size = 24}) => {
   const icons = {
      home: HomeIcon,
      search: SearchIcon,
      collection: CollectionIcon,
      plus: PlusIcon,
      heartFill: HeartFillIcon,
      download: DownloadIcon,
      prev: PrevIcon,
      next: NextIcon,
      user: UserIcon,
      down: DownIcon,
      external: ExternalIcon,
      play: PlayIcon,
      pause: PauseIcon,
      playerPrev: PlayerPrevIcon,
      playerNext: PlayerNextIcon,
      shuffle: ShuffleIcon,
      repeat: RepeatIcon,
      heart: HeartIcon,
      pipToggle: PipToggleIcon,
      wrapper: WrapperIcon,
      device: DeviceIcon,
      volumeMuted: VolumeMuted,
      volumeLow: VolumeLow,
      volumeNormal: VolumeNormal,
      volumeFull: VolumeFull,
      lyrics: LyricsIcon,
      queue: QueueIcon,
      arrowUp: ArrowUpIcon,
   }

   const Component = icons[name]
   return <Component size={size} />
}

export {
   Icon
}