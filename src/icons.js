const HomeIcon = ({size}) => {
   return (
      <svg role="img" height={size} width={size} className="Svg-sc-1bi12j5-0 hDgDGI home-icon" viewBox="0 0 24 24">
         <path d="M9 14h6v7h5V7.8l-8-4.6-8 4.6V21h5v-7zm1 8H3V7.2L12 2l9 5.2V22h-7v-7h-4v7z" fill="currentColor"></path>
      </svg>
   )
}

const SearchIcon = ({size}) => {
   return (
      <svg role="img" height={size} width={size} className="Svg-sc-1bi12j5-0 hDgDGI search-active-icon" viewBox="0 0 24 24">
         <path
            d="M16.736 16.262A8.457 8.457 0 0019 10.5a8.5 8.5 0 10-3.779 7.067l4.424 5.18 1.521-1.299-4.43-5.186zM10.5 17C6.916 17 4 14.084 4 10.5S6.916 4 10.5 4 17 6.916 17 10.5 14.084 17 10.5 17z" fill="currentColor"></path>
      </svg>
   )
}
const CollectionIcon = ({size}) => {
   return (
      <svg role="img" height={size} width={size} className="Svg-sc-1bi12j5-0 hDgDGI collection-icon" viewBox="0 0 24 24">
         <path d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z" fill="currentColor"></path>
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
const HeartIcon = ({size}) => {
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
         <polyline points="16 4 7 12 16 20" fill="none" stroke="currentColor"></polyline>
      </svg>
   )
}
const NextIcon = ({size}) => {
   return (
      <svg role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 hDgDGI">
         <polyline points="8 4 17 12 8 20" fill="none" stroke="currentColor"></polyline>
      </svg>
   )
}
const UserIcon = ({size}) => {
   return (
      <svg width={size} height={size} fill="#ffffff" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" data-testid="user-icon">
         <path d="M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607 11.757 11.521C11.742 11.435 11.737 11.267 11.869 11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5 6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761 1.48601C11.64 0.435011 10.173 -0.0879888 8.636 0.0110112C5.756 0.198011 3.501 2.68401 3.501 5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82 9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243 11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786 13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885 1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152 12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891 10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499 6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699 1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994 3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201 13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803 10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513 11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884 17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692 15.216 13.717Z"></path>
      </svg>
   )
}
const DownIcon = ({size}) => {
   return (
      <svg width={size} height={size} fill="currentColor" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" data-testid="user-icon">
         <path d="M3 6l5 5.794L13 6z"></path>
      </svg>
   )
}
const ExternalIcon = ({size}) => {
   return (
      <svg width={size} height={size} fill="currentColor" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" data-testid="user-icon">
         <path fill-rule="evenodd" d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z" clip-rule="evenodd"></path>
      </svg>
   )
}
const PlayIcon = () => {
   return (
      <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
   )
}

const Icon = ({name, size = 24}) => {
   const icons = {
      home: HomeIcon,
      search: SearchIcon,
      collection: CollectionIcon,
      plus: PlusIcon,
      heart: HeartIcon,
      download: DownloadIcon,
      prev: PrevIcon,
      next: NextIcon,
      user: UserIcon,
      down: DownIcon,
      external: ExternalIcon,
      play: PlayIcon,
   }

   const Component = icons[name]
   return <Component size={size} />
}

export {
   Icon
}