import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner";
import { useState } from "react";
import siteConfig from "~/config/site";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useUser();
  return (
    <header className="relative z-50 flex w-full flex-wrap bg-white p-6 text-sm dark:bg-gray-800 sm:flex-nowrap sm:justify-start">
      <nav
        className="mx-auto w-full max-w-[85rem]  p-1 px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <h2 className="flex-none text-xl font-semibold dark:text-white">
            Etiquetando
          </h2>
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white p-2 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-with-mega-menu"
              aria-controls="navbar-with-mega-menu"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden h-4 w-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden h-4 w-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-with-mega-menu"
          className={`hs-collapse ${
            isOpen ? "hidden" : "block"
          }  grow basis-full overflow-hidden  p-1 transition-all duration-300 sm:block`}
        >
          <ul className="mt-5 flex flex-col gap-5   sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:pl-5">
            <li>
              <Link
                href="/"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                Inicio
              </Link>
            </li>
            {user.isLoaded ? (
              <>
                {!user.isSignedIn && (
                  <li>
                    <Link
                      href="/sign-in"
                      className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    >
                      Iniciar Sesion
                    </Link>
                  </li>
                )}
                {user.isSignedIn && (
                  <>
                    {siteConfig.navbar.map((link) => {
                      <li>
                        <Link
                          className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                          href={link.href}
                        >
                          {link.title}
                        </Link>
                      </li>;
                    })}
                    <li>
                      <UserButton userProfileMode="modal" />
                    </li>
                  </>
                )}
              </>
            ) : (
              <LoadingSpinner size="24" />
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
