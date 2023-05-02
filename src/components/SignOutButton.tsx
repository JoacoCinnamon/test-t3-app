import { useClerk } from "@clerk/clerk-react";

const SignOutButton = () => {
  const { signOut } = useClerk();
  return (
    <button
      className="group text-sm font-semibold leading-6 text-gray-900 transition duration-300 dark:text-slate-100 "
      onClick={() => void signOut()}
    >
      Cerrar sesion
    </button>
  );
};

export default SignOutButton;
