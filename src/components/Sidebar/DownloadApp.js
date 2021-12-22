import {Icon} from 'icons'

function DownloadApp() {
   return(
      <a href="x" className="h-10 flex px-6 gap-x-4 flex-shrink-0 items-center text-sm text-semibold text-link hover:text-white">
         <Icon name="download" size={20} />
         Uygulamayi Yükle
      </a>
   )
}

export default DownloadApp