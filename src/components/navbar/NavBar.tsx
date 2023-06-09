import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import siteConfig from "~/config/site";
import {
  NavLink,
  LoadingSpinner,
  ThemeToggler,
  SignOutButton,
} from "~/components/index";
import { SideNavLink } from "./SideNavLink";
import { SideSignOutButton } from "./SideSignOutButton";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useUser();

  return (
    <header className="bg-white dark:bg-zinc-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{siteConfig.title}</span>
            Logo
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-slate-100"
          >
            <span className="sr-only">Abrir menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {siteConfig.navbar.map((link) => (
            <NavLink href={link.href} key={link.href}>
              {link.title}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <ThemeToggler />
          {user.isLoaded ? (
            <>
              {!user.isSignedIn && (
                <NavLink href="/iniciar-sesion" color="purple">
                  Iniciar Sesion <span aria-hidden="true">&rarr;</span>
                </NavLink>
              )}
              {user.isSignedIn && <SignOutButton />}
            </>
          ) : (
            <LoadingSpinner size="24" color="purple" /> // o null
          )}
        </div>
      </nav>
      <div className="lg:hidden" role="dialog" aria-modal="true">
        <div
          className={`fixed ${
            isOpen ? "" : "hidden"
          }  inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 dark:bg-zinc-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
        >
          <div className="flex items-center justify-between">
            <span className="font-bold">{siteConfig.title}</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-slate-100"
            >
              <span className="sr-only">Cerrar menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {siteConfig.navbar.map((link) => (
                  <SideNavLink
                    href={link.href}
                    key={link.href}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {link.title}
                  </SideNavLink>
                ))}
              </div>
              <div className="py-6">
                {user.isLoaded ? (
                  <>
                    {!user.isSignedIn && (
                      <SideNavLink
                        href="/iniciar-sesion"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        Iniciar Sesion
                      </SideNavLink>
                    )}
                    {user.isSignedIn && <SideSignOutButton />}
                  </>
                ) : (
                  <LoadingSpinner size="25" color="purple" />
                )}
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export { NavBar };
