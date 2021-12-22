import { Menu } from '@headlessui/react'
import { Icon } from 'icons'

function Auth() {

   const user = {
      name: 'Fırat İnalkaç',
      avatar: 'user'
   }

   return(
      <Menu as="nav" className="relative">
         {({open}) => (
            <>
               <Menu.Button>
                  <div className={`flex items-center h-8 rounded-3xl pr-2 bg-black ${open ? 'bg-active' : 'bg-black'}`}>
               <span className="w-8 h-8 rounded-full flex items-center justify-center bg-stone-600 mr-2">
                  <Icon name={user.avatar} size={20} />
               </span>
                     <span className="text-sm font-semibold mr-2">{user.name}</span>
                     <span className={open && 'rotate-180'}>
                        <Icon name="down" size={16} />
                     </span>
                  </div>
               </Menu.Button>
               <Menu.Items className="absolute p-1 right-0 w-48 bg-active rounded-md translate-y-2">
                  <Menu.Item>
                     {({ active }) => (
                        <a
                           className={`h-10 flex justify-between items-center px-2 text-sm rounded  ${active && 'bg-stone-600'}`}
                           href="/account-settings"
                        >
                              Account
                              <Icon name="external" size={20} />
                        </a>
                     )}
                  </Menu.Item>
                  <Menu.Item>
                     {({ active }) => (
                        <a
                           className={`h-10 flex items-center px-2 text-sm rounded  ${active && 'bg-stone-600'}`}
                           href="/account-settings"
                        >
                           Profile
                        </a>
                     )}
                  </Menu.Item>
                  <Menu.Item>
                     {({ active }) => (
                        <a
                           className={`h-10 flex items-center px-2 text-sm rounded  ${active && 'bg-stone-600'}`}
                           href="/account-settings"
                        >
                           Logout
                        </a>
                     )}
                  </Menu.Item>
               </Menu.Items>
            </>
         )}
      </Menu>
   )
}

export default Auth