import { SignIn } from "@clerk/nextjs";

const SignInModal = () => (
  <main className="flex min-h-full place-items-center items-center justify-center   px-6 py-24 sm:py-32 lg:px-8">
    <SignIn appearance={{ elements: { footer: "hidden" } }} />
  </main>
);

export default SignInModal;
