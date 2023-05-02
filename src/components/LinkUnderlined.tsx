import Link from "next/link";
import React from "react";

type Color = "blue" | "purple" | "green" | "red" | "gray" | "indigo";

const DEFAULT_COLOR = "bg-indigo-600";
const underlinedColors = new Map<Color, string>()
  .set("blue", "bg-blue-600")
  .set("purple", "bg-purple-600")
  .set("green", "bg-green-600")
  .set("red", "bg-red-600")
  .set("gray", "bg-gray-600 dark:bg-gray-300")
  .set("indigo", DEFAULT_COLOR);

function LinkUnderlined({
  href,
  children,
  color = "indigo",
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  color?: Color;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className={`group text-sm font-semibold leading-6 text-gray-900 transition duration-300 dark:text-slate-100 ${className}`}
      onClick={onClick}
    >
      {children}
      <span
        className={`block h-0.5 max-w-0 ${
          underlinedColors.get(color) ?? DEFAULT_COLOR
        } transition-all duration-500 group-hover:max-w-full`}
      ></span>
    </Link>
  );
}

export default LinkUnderlined;
