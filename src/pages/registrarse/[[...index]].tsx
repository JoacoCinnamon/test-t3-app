import { SignUp } from "@clerk/nextjs";

const SignUpModal = () => (
  <main className="flex min-h-full place-items-center items-center justify-center  px-6 py-24 sm:py-32 lg:px-8">
    <SignUp />
  </main>
);

export default SignUpModal;
