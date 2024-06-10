/* eslint-disable jsx-a11y/anchor-is-valid */

function Header(){
    return(
      <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-purple-600 dark:text-purple-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette" viewBox="0 0 16 16">
            <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
            <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8m-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7"/>
          </svg>
        </a>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="#/"
                >
                  About
                </a>
              </li>
    
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="#/"
                >
                  Careers
                </a>
              </li>
    
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="#/"
                >
                  History
                </a>
              </li>
    
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="#/"
                >
                  Services
                </a>
              </li>
    
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="#/"
                >
                 
                </a>
              </li>
    
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="#/"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
            <a
              className="block rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700 dark:hover:bg-purple-500">
                
               
            </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              >
                
              </a>
            </div>
    
            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
          </div>
        </div>
      </div>
    </header>
    

    )
}
export default Header