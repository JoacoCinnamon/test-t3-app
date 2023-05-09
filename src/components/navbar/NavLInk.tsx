import Link from "next/link";
import { underlinedColor, type Color } from "~/styles/colors";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  color?: Color;
  className?: string;
  onClick?: () => void;
};

function NavLink({ href, children, color = "purple", onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`group text-sm font-semibold leading-6 text-gray-900 transition duration-300 dark:text-slate-100`}
      onClick={onClick}
    >
      {children}
      <span
        className={`block h-0.5 max-w-0 ${underlinedColor(
          color
        )} transition-all duration-500 group-hover:max-w-full`}
      ></span>
    </Link>
  );
}

export { NavLink };
