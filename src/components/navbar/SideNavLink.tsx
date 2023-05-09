import Link from "next/link";

type SideNavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

function SideNavLink({ href, children, onClick }: SideNavLinkProps) {
  return (
    <Link
      href={href}
      className="-mx-3 block  rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-slate-100 dark:hover:bg-zinc-800"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export { SideNavLink };
