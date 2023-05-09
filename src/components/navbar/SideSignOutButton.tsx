import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/router";

function SideSignOutButton() {
  const { signOut } = useClerk();
  const router = useRouter();
  const handleClick = () => {
    void signOut();
    void router.push("/");
  };
  return (
    <button
      className="-mx-3 flex w-full items-center gap-1 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-slate-100 dark:hover:bg-zinc-800"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="26"
        viewBox="0 96 960 960"
        width="26"
      >
        <path
          d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621 444l43-43 176 176-174 174Z"
          className="fill-gray-600 dark:fill-gray-300"
        />
      </svg>
      Cerrar Sesion
    </button>
  );
}

export { SideSignOutButton };
