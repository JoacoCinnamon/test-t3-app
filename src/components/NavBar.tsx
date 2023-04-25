import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner";
import { useState } from "react";
import siteConfig from "~/config/site";
import LinkUnderlined from "./LinkUnderlined";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useUser();
  return (
    <header className="bg-white">
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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
            <LinkUnderlined href={link.href} key={link.href}>
              {link.title}
            </LinkUnderlined>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user.isLoaded ? (
            <>
              {!user.isSignedIn && (
                <LinkUnderlined href="/iniciar-sesion">
                  Iniciar Sesion <span aria-hidden="true">&rarr;</span>
                </LinkUnderlined>
              )}
              {user.isSignedIn && <UserButton />}
            </>
          ) : (
            <LoadingSpinner size="24" color="purple" />
          )}
        </div>
      </nav>
      <div className="lg:hidden" role="dialog" aria-modal="true">
        <div
          className={`fixed ${
            isOpen ? "hidden" : ""
          }  inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
        >
          <div className="flex items-center justify-between">
            <span className="font-bold">{siteConfig.title}</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                  <Link
                    href={link.href}
                    key={link.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                {user.isLoaded ? (
                  <>
                    {!user.isSignedIn && (
                      <Link
                        href="/iniciar-sesion"
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        Iniciar Sesion <span aria-hidden="true">&rarr;</span>
                      </Link>
                    )}
                    {user.isSignedIn && <UserButton />}
                  </>
                ) : (
                  <LoadingSpinner size="30" color="gray" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
