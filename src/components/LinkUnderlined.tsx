import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

function LinkUnderlined({ href, children, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`group text-sm font-semibold leading-6 text-gray-900 transition duration-300 ${className}`}
    >
      {children}
      <span className="block h-0.5 max-w-0 bg-indigo-600 transition-all duration-500 group-hover:max-w-full"></span>
    </Link>
  );
}

export default LinkUnderlined;
