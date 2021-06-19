
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = ['Dashboard', 'Team', 'Projects', 'Calendar', 'Reports']
const profile = ['Your Profile', 'Settings', 'Sign out']

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  return (
    <div className="">
      <main className="flex">
        <div className="w-36 absolute sm:relative shadow flex flex-col justify-center">
          <div className="px-8">
            <ul className="mt-12"></ul>
          </div>
          <div className="px-8">
            <ul className="mt-12">
              <li className="flex w-full justify-between text-gray-400 hover:text-purple-600 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={64} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-400 hover:text-purple-600 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={64} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-400 hover:text-purple-600 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={64} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-400 hover:text-purple-600 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={64} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </li>

            </ul>
          </div>
          <div className="px-8">

            <ul className="mt-12"></ul>
          </div>
        </div >
        <div className="container mx-auto bg-gray-200">
          <header className="bg-white">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-2">
              <Disclosure as="nav" className="bg-white">
                {({ open }) => (
                  <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="flex items-center justify-between h-16">
                        <div className="flex flex-1 items-center">
                          <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-3">
                              <button className="inline-flex items-center h-12 px-5 border rounded-lg focus:shadow-outline">
                                Add Assessment
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="hidden md:block ml-4 mt-4 flex flex-1">
                          <div className="overflow-hidden h-1 mb-1 text-xs flex rounded bg-purple-200">
                            <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-700"></div>

                          </div>
                          <span className="text-gray-400">24k / 24k patients seen</span>
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-4 flex items-start md:ml-6">

                            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <div className="ml3">
                                <div className="text-base font-medium leading-none text-gray-800">Tom Cook</div>
                                <div className="text-sm font-medium leading-none text-gray-600">tom@example.com</div>
                              </div>
                            </button>

                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                              {({ open }) => (
                                <>
                                  <div>
                                    <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                      <span className="sr-only">Open user menu</span>
                                      <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                      />
                                    </Menu.Button>
                                  </div>
                                </>
                              )}
                            </Menu>
                          </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                          {/* Mobile menu button */}
                          <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                              <XIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                            )}
                          </Disclosure.Button>
                        </div>
                      </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item, itemIdx) =>
                          itemIdx === 0 ? (
                            <Fragment key={item}>
                              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                              <a href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                                {item}
                              </a>
                            </Fragment>
                          ) : (
                            <a
                              key={item}
                              href="/"
                              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                              {item}
                            </a>
                          )
                        )}
                      </div>
                      <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="flex items-center px-5">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                            <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                          </div>
                          <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                          {profile.map((item) => (
                            <a
                              key={item}
                              href="/"
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </header>
          {/* Page title starts */}
          <div className="container mx-auto py-6 md:w-9/10 w-11/12 px-6">
            <div>
              <h4 className="text-2xl font-bold leading-tight text-gray-800">Analytics</h4>
            </div>
          </div>
          {/* Page title ends */}
          <div className="container mx-auto py-6 md:w-9/10 w-11/12 px-6">
            <div className="flex gap-8 flex-nowrap justify-around h-screen">
              <div className="w-1/3 shadow bg-white">
                <div className="flex items-center justify-between w-full h-5/6">
                  <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow">
                    <div className="w-full h-5/6 dark:bg-gray-800">
                    </div>
                    {/* <div className="w-full lg:w-1/3 h-24 dark:border-gray-700 lg:h-5/6 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100" /> */}
                  </div>
                </div>
              </div>
              <div className="w-2/3 shadow bg-white">
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow">
                    <div className="w-full h-5/6 dark:bg-gray-800" />
                    {/* <div className="w-full lg:w-1/3 h-24 dark:border-gray-700 lg:h-5/6 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


export default App;
