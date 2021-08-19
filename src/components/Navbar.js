
import { Menu,Transition } from '@headlessui/react'
import {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { 
    UserCircleIcon, 
    UserIcon,
    LogoutIcon,
    MenuAlt2Icon
} 
from '@heroicons/react/outline'

export default function Navbar({setToggle, toggle}) {
    return (
        <>
            <nav className="bg-light h-16 flex w-full relative items-center pr-8">
                <div onClick={()=>(setToggle(!toggle))} className="group flex flex-col justify-center items-start py-1 rounded ml-8 bg-secondary-light hover:bg-secondary">
                    <MenuAlt2Icon className="h-5 w-8 text-secondary group-hover:text-secondary-light" /> 
                </div>
                <div className="flex-1 flex justify-end">
                    <Menu as="div" className="relative inline-block">
                        <div>
                            <Menu.Button><UserCircleIcon className="h-6 w-8" /></Menu.Button>
                        </div>
                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item as="div" className="flex items-center hover:bg-secondary-light p-2 border-b text-primary">
                                <UserIcon className="h-5 w-8 text-sm" />
                                <a href="true" className="font-normal text-sm">Hi! John Doe</a>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/login" className="flex items-center hover:bg-secondary-light p-2 text-primary">
                                    <LogoutIcon className="h-5 w-8 text-sm" />
                                    <span>Logout</span>
                                </Link>
                            </Menu.Item>
                        </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </nav>
        </>
    )
}