import Link from 'next/link'
import {
  HomeIcon,
  SearchIcon,
  UserIcon,
  TemplateIcon,
  MenuAlt1Icon,
  GlobeAltIcon,
} from "@heroicons/react/outline"
import HeaderItem from "./HeaderItem"
import {useRef, useState, useEffect} from 'react'
import { useRouter } from 'next/router'

import en from '../locales/en'
import ptBR from '../locales/pt-BR'



/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <GlobeAltIcon className="h-5"/>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}




function Header() {
  let router = useRouter()
  const {locale} = router;
  const t = locale === 'en' ? en : ptBR;
  
  const isLogged = 'account'

  return (
    <>
    <header className="flex flex-col sm:flex-row p-3 justify-between
    items-center h-auto bg-black">
      <Link href="/"><a>
        <img alt="Dring Games website Logo" src="/images/Logo.png" className="object-contain" width={200} height={200}/>
      </a></Link>
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Link href="/"><a>
          <p className="font-bold last:pr-24 cursor-pointer transition duration-200 transform hover:text-white">Home</p>
        </a></Link>
        <Link href="/anime"><a>
          <p className="font-bold last:pr-24 cursor-pointer transition duration-200 transform hover:text-white">Anime</p>
        </a></Link>
        <Link href="/game"><a>
          <p className="font-bold last:pr-24 cursor-pointer transition duration-200 transform hover:text-white">Game</p>
        </a></Link>
        <Link href="/game"><a>
          <p className="font-bold last:pr-24 cursor-pointer transition duration-200 transform hover:text-white">Marketplace</p>
        </a></Link>
        <Link href="/account"><a>
          <p className="font-bold last:pr-24 cursor-pointer transition duration-200 transform hover:text-white">{isLogged}</p>
        </a></Link>
        <Example/>
      </div>
    </header>
    
    </>
  )
}

export default Header
